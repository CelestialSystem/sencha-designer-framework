// This file is loaded into the canvas iframe, so Ext refers to the Sencha Touch
// namespace, while xds refers to a minimal object structure injected by the Canvas
// into the iframe's DOM.

// Bypass private member override prevention
Ext.privacyViolation = Ext.emptyFn;

(function(Ext){
    var scrollCache = {};

    // Initialize messaging with the outer Architect window
    xds.messaging = Ext.create('sencha.CrossWindowMessaging', {
        targetWindow: window.parent,
        channel: 'xdsCanvas'
    });

    // Implement the fireExtReady call
    xds.messaging.implement('fireExtReady', function() {
        return xds.messaging.promise(function(fulfill) {
            let launched = false;
            const callFulfill = () => {
                if (!launched) {
                    launched = true;
                    fulfill.call(null);
                }
            };

            Ext.application({ name: 'app', launch: callFulfill });

            // if app launch is not called for whatever reason (e.g. ERR_NAME_NOT_RESOLVED)
            // then fulfill the promise. DSGNR-7648 DSGNR-7950 DSGNR-7983
            window.setTimeout(callFulfill, 2000);
        });
    });


    // Global error handling - capture and send message to parent window which will
    // display it and send a MixPanel tracking event for it.
    window.onerror = function(message, url, lineNumber) {
        xds.messaging.notify('frameworkerror', message, url, lineNumber);
        return true;
    };


    // TODO TEMPORARY!!! work around framework bug in Region
    Ext.util.Numbers = Ext.Number;


    // The default OverflowChange paint monitor implementation does not
    // fire reliably in our version of Chrion; force it to use the old
    // CssAnimation impl which seems to fire reliably.
    Ext.util.PaintMonitor = Ext.util.paintmonitor.CssAnimation;

    // The CssTransition animation runner uses an iframe to contain its test element, but this
    // fails when the canvas iframe is sandboxed. Override to use a local test element instead.
    Ext.define(null, {
        override: 'Ext.fx.runner.CssTransition',
        getTestElement: function() {
            var testElement = this.testElement;
            if (!testElement) {
                testElement = this.testElement = document.createElement('fx-test');
                testElement.style.setProperty('position', 'absolute', 'important');
                document.body.appendChild(testElement);
                this.testElementComputedStyle = window.getComputedStyle(testElement);
            }
            return testElement;
        }
    });


    Ext.define('Ext.override.Component', {
        override: 'Ext.Component',

        initConfig: function(config) {
            var me = this,
                instanceId = config && config.xdsInstanceId,
                inlineEditId = config && config.xdsInlineEditCfgOwnerId,
                activateId = config && config.xdsActivateInstanceId;

            // Designer passes in the instance's unique id as a 'xdsInstanceId' property, but since that
            // is not a defined class config we must grab it out manually to prevent console warnings.
            if (instanceId) {
                me.xdsInstanceId = instanceId;
                delete config.xdsInstanceId;
                xds.ViewHelper.registerCmpByInstanceId(instanceId, me);
            }

            me.callParent(arguments);

            if (instanceId) {
                me.element.set({'data-xdsinstanceid': instanceId});

                me.on('initialize', me.onInitializeXDS, me);
                me.on('painted', me.onPaintedXDS, me);
                me.on('erased', me.onErasedXDS, me);
                me.on('destroy', me.onDestroyXDS, me);
            }
            if (inlineEditId) {
                me.element.set({'data-xdsinlineeditid': inlineEditId});
            }
            if (activateId) {
                me.element.set({'data-xdsactivateid': activateId});
            }
        },

        onInitializeXDS: function() {
            xds.messaging.notify('instancecreate', this.xdsInstanceId);
        },

        onPaintedXDS: function() {
            xds.messaging.notify('instancepaint', this.xdsInstanceId);
        },

        onErasedXDS: function() {
            xds.messaging.notify('instanceerase', this.xdsInstanceId);
        },

        onDestroyXDS: function() {
            var xdsInstanceId = this.xdsInstanceId;
            if (xdsInstanceId) {
                xds.messaging.notify('instancedestroy', xdsInstanceId);
                delete this.xdsInstanceId;
                xds.ViewHelper.unregisterCmpByInstanceId(xdsInstanceId);
            }
        },



        /**
         * Compat
         */
        getEl: function() {
            return this.renderElement;
        },

        getTargetEl: function() {
            return this.element;
        },

        getOwnerCt: function() {
            return this.getParent();
        },



        /**
         * Returns true if this component is visible.
         *
         * @param {Boolean} [deep=false] Pass `true` to interrogate the visibility status of all parent Containers to
         * determine whether this Component is truly visible to the user.
         *
         * @return {Boolean} True if this component is visible, false otherwise.
         */
        isVisible: function(deep) {
            var me = this,
                ancestor;

            if (me.isHidden() || !me.isPainted()) {
                return false;
            }

            if (deep) {
                ancestor = me.parent;
                while (ancestor) {
                    if (!ancestor.isVisible()) {
                        return false;
                    }
                    ancestor = ancestor.parent;
                }
            }

            return true;
        }

    });


    Ext.define(null, {
        override: 'Ext.Widget',

        constructor: function(config) {
            var me = this;

            me.callParent(arguments);

            // Remove xdsInstanceId to prevent it being passed
            // down to children. Duplicate xdsInstanceIds can cause bugs.
            if (config && config.xdsInstanceId) {
                me.xdsInstanceId = config.xdsInstanceId;
                delete config.xdsInstanceId;
            }

            me.element.set({
                'data-xdsinstanceid': me.xdsInstanceId
            });

            if (me.xdsInstanceId) {
                xds.ViewHelper.registerCmpByInstanceId(me.xdsInstanceId, me);
                xds.messaging.notify('instancecreate', me.xdsInstanceId);
            }
        },

        isVisible: function() {
            return true;
        },

        isPainted: function() {
            return true;
        }
    });


    Ext.define('Ext.override.Container', {
        override: 'Ext.Container',

        // HACK to fix DSGNR-6750
        getComponent: function(component) {
            // This first `if` statement is added. The rest of the code is the original Ext code.
            if (this.destroyed) {
                return null;
            }

            if (typeof component === 'number') {
                return this.getItems().getAt(component);
            }

            if (Ext.isObject(component)) {
                component = component.getItemId();
            }

            return this.getItems().get(component);
        },

        onInitializeXDS: function() {
            var me = this,
                scrollable = me.getScrollable();
            me.callParent(arguments);
            if (scrollable) {
                scrollable.on('scroll', me.onScrollXDS, me);
            }
        },

        onPaintedXDS: function() {
            var me = this,
                xdsInstanceId = me.xdsInstanceId,
                scrollable, scrollXY;
            me.callParent(arguments);
            if (xdsInstanceId) {
                // Restore the last scroll position if any
                scrollable = me.getScrollable();
                scrollXY = scrollCache[xdsInstanceId];
                if (scrollable && scrollXY) {
                    scrollable.scrollTo(scrollXY[0], scrollXY[1]);
                }
            }
        },

        onScrollXDS: function(scroller, x, y) {
            var me = this,
                xdsInstanceId = me.xdsInstanceId;
            if (xdsInstanceId) {
                scrollCache[xdsInstanceId] = [x, y];
                xds.messaging.notify('instancescroll', xdsInstanceId);
            }
        }
    });


    /**
     * Scrollers using the 'scrollposition' translation method result in films not being
     * rendered correctly, so let's force it to always use the 'csstransform' method.
     */
    Ext.define('Ext.override.scroll.Scroller', {
        override: 'Ext.scroll.Scroller',
        applyTranslatable: function(config) {
            if (config) {
                config.translationMethod = 'csstransform';
            }
            return this.callParent(arguments);
        }
    });

    /**
     * Override the scroller view to make it work better in the desktop setting:
     * - mousewheel events will scroll the view
     * - the scroll indicators are replaced by an overlaid overflow:auto container that shows
     *   native scrollbars instead of the normal virtual indicators.
     */
    Ext.define('Ext.override.scroll.View', {
        override: 'Ext.scroll.View',

        // Shrink from edge plus width of the scrollbar
        inset: 12,

        scrollingEnabled: function() {
            var scroller = this.getScroller();
            return (scroller && scroller.getDisabled() !== true);
        },

        updateElement: function(element) {
            var me = this;
            me.callParent(arguments);
            if (!me.scrollingEnabled()) {
                return;
            }
            element.dom.addEventListener('mousewheel', Ext.bind(me.onMousewheel, me), false);
        },

        onMousewheel: function(e) {
            var scroller = this.getScroller();
            scroller.scrollBy(-e.wheelDeltaX, -e.wheelDeltaY);
            scroller.snapToBoundary();
            e.stopPropagation();
        },

        updateIndicators: function(element) {
            var me = this;
            me.callParent(arguments);
            if (!me.scrollingEnabled()) {
                return;
            }
            me.indicatorsGrid.dom.addEventListener('scroll', Ext.bind(me.onIndicatorGridScroll, me));
        },

        onIndicatorGridScroll: function(e) {
            if (this.indicatorsGrid) {
                var dom = this.indicatorsGrid.dom;
                this.getScroller().scrollTo(dom.scrollLeft, dom.scrollTop);
            }
        },

        onScroll: function(scroller, x, y) {
            this.callParent(arguments);
            var dom = this.indicatorsGrid.dom;
            dom.scrollLeft = x;
            dom.scrollTop = y;
        },

        refreshIndicators: function() {
            var me = this,
                inner = me.indicatorsGrid.child('div'),
                size = me.getScroller().getSize(),
                inset = me.inset;
            if (!this.scrollingEnabled()) {
                return;
            }
            inner.setSize(size.x - inset, size.y - inset);
        }
    });


    Ext.define('Ext.override.carousel.Carousel', {
        override: 'Ext.carousel.Carousel',
        onRemove: function(item, index) {
            if (item.isInnerItem()) {
                if (!this.isCardInRange(item)) {
                    item.show();
                }
                item.element.removeCls(this.getItemCls());
            }

            Ext.carousel.Carousel.superclass.onRemove.apply(this, arguments);

            var indicator = this.getIndicator();
            if (indicator) {
                indicator.removeIndicator();
            }
        }
    });

    Ext.define('Ext.override.data.Connection', {
        override: 'Ext.data.Connection',
        onStateChange : function(request) {
            // TRUNKDIFF: request.xhr undefined check
            if (request.xhr) {
                this.callParent(arguments);
            }
        }
    });

    Ext.data.reader.Reader.override({
        process: function(response) {
            var data = response;

            // TrunkDiff: saving the rawResponse
            if (Ext.isArray(response)) {
                // response is already decoded into a data array, e.g. from Direct
                this.rawResponseText = JSON.stringify(response) || '';
            } else if (Ext.isObject(response)) {
                // response is a response from xhr
                if ('responseText' in response) {
                    this.rawResponseText = response.responseText;
                } else {
                    // response will already be eval'ed from jsonp
                    this.rawResponseText = JSON.stringify(response) || '';
                }
            } else if (Ext.isString(response)) {
                // response is a string
                this.rawResponseText = response;
            } else {
                this.rawResponseText = '';
            }

            if (response) {
                // TRUNKDIFF get the result from data since response is now actual response object instead of an event
                // TODO determine if this is still needed.
                data = this.getResponseData(response).result ? this.getResponseData(response).result : this.getResponseData(response);
            }

            if (data) {
                return this.readRecords(data);
            } else {
                return this.nullResultSet;
            }
        }
    });

    Ext.data.reader.Xml.override({

        constructor: function(config) {
            var me = this;
            me.callParent([config]);
            me.on('exception', me.onException, me);
        },

        onException: function() {
            var onerror = function(message, url, lineNumber) {
                xds.messaging.notify('frameworkerror', message, url, lineNumber);
            };

            var msg = 'Response XML was invalid or unavailable.<br /><br />XML:<br />'
                        + Ext.util.Format.htmlEncode(arguments[1].responseText).replace(/\n/g, '<br />');

            var getErrorObject = function(){
                try { throw Error('') } catch(err) { return err; }
            };

            var e = getErrorObject();
            onerror(msg, e.sourceURL, e.line);

            throw new Error('');
        },

        getResponseData: function(response) {
            var xml;

            // Check to see if the response is already an xml node.
            if (response.nodeType === 1 || response.nodeType === 9) {
                return response;
            }

            // TRUNKDIFF - catch all exceptions and handle below
            try {
                xml = response.responseXML;
            } catch (e) {
                // nothing
            }

            if (!xml) {
                /**
                 * @event exception Fires whenever the reader is unable to parse a response.
                 * @param {Ext.data.reader.Xml} reader A reference to this reader
                 * @param {XMLHttpRequest} response The XMLHttpRequest response object.
                 * @param {String} error The error message.
                 */
                this.fireEvent('exception', this, response, 'XML data not found in the response');
            }

            return xml;
        }

    });


    // Turn off animations. Because the canvas is constantly removing, destroying and re-adding items we
    // just turn them off.
    Ext.layout.Card.override({
        applyAnimation: Ext.emptyFn
    });

    Ext.direct.RemotingProvider.override({
        onData: function(options, success, response) {
            var me = this,
                i = 0,
                ln, events, event,
                transaction, transactions;

            if (success) {
                events = me.createEvents(response);
                for (ln = events.length; i < ln; ++i) {
                    event = events[i];
                    // TRUNKDIFF save response for the reader otherwise there is no way to get responseTxt/XMl
                    event.response  = response;
                    transaction = me.getTransaction(event);
                    me.fireEvent('data', me, event);
                    if (transaction) {
                        me.runCallback(transaction, event, true);
                        Ext.direct.Manager.removeTransaction(transaction);
                    }
                }
            } else {
                transactions = [].concat(options.transaction);
                for (ln = transactions.length; i < ln; ++i) {
                    transaction = me.getTransaction(transactions[i]);
                    if (transaction && transaction.getRetryCount() < me.getMaxRetries()) {
                        transaction.retry();
                    } else {
                        event = Ext.create('Ext.direct.ExceptionEvent', {
                            data: null,
                            transaction: transaction,
                            code: Ext.direct.Manager.exceptions.TRANSPORT,
                            message: 'Unable to connect to the server.',
                            xhr: response
                        });

                        me.fireEvent('data', me, event);
                        if (transaction) {
                            me.runCallback(transaction, event, false);
                            Ext.direct.Manager.removeTransaction(transaction);
                        }
                    }
                }
            }
        }
    });

    // Patch from https://github.com/extjs/SDK/pull/4751/files
    Ext.navigation.Bar.override({
        // partial override - call parent calls the original onSizeMonitorChange
        onSizeMonitorChange: function() {
            // trunk diff
            if (!this.rendered) {
                return;
            }
            // trunk diff

            this.callParent(arguments);
        }
    });

    Ext.navigation.View.override({
        updateNavigationBar: function(newNavigationBar, oldNavigationBar) {
            if (oldNavigationBar) {
                this.remove(oldNavigationBar);
            }

            if (newNavigationBar) {
                // trunk diff
                var layout = this.getLayout(),
                    animation = (layout && layout.isLayout) ? layout.getAnimation() : false;
                // trunk diff

                if (animation && animation.isAnimation) {
                    newNavigationBar.setAnimation(animation.config);
                }
                this.add(newNavigationBar);
            }
        }
    });

    // Patch from commit 9460d2cd06bac1e1a17b76ef0f594576e64062eb (rename onDestroy to destroy)
    Ext.field.DatePicker.override({
        destroy: function() {
            var picker = this.getPicker();
            if (picker) {
                picker.destroy();
            }
            this.callParent(arguments);
        }
    });

    Ext.define(null, {
        override: 'Ext.ux.google.Map',
        destroy: function() {
            Ext.destroy(this.getGeo());
            var map = this.getMap();

            if (map && (window.google || {}).maps) {
                google.maps.event.clearInstanceListeners(map);
            }

            this.callParent();
        }
    });

    // TODO remove me - temporary workaround for bug in beta3 - https://github.com/extjs/SDK/pull/5262
    Ext.util.Collection.override({
        removeSorters: function(sorters) {
            this.mixins.sortable.removeSorters.call(this, sorters);
            // TRUNKDIFF fixed typo: this.item --> this.items
            if (this.sorted && this.getAutoSort() && this.items.length) {
                this.sort();
            }
            return this;
        }
    });

    Ext.util.Grouper.override({
        getGroupString: function(item) {
            var group = this.getGroupFn().call(this, item);
            return group && group.toString ? group.toString() : '';
        }
    });

    Ext.util.sizemonitor.OverflowChange.override({
        refreshMonitors: function() {
            // TRUNKDIFF - under some scenarios, this monitor is destroyed before being triggered by the task queue
            if (this.isDestroyed) {
                return;
            }

            this.callParent(arguments);
        }
    });

    // this overrides the locally defined "power" function from touch24 to
    // avoid an infinite loop in case the first parameter passed in is 0
    Ext.define('Ext.override.chart.series.sprite.Line', {
        override: 'Ext.chart.series.sprite.Line',
        drawStroke: function (surface, ctx, start, end, list, xAxis) {
            var attr = this.attr,
                matrix = attr.matrix,
                xx = matrix.getXX(),
                yy = matrix.getYY(),
                dx = matrix.getDX(),
                dy = matrix.getDY(),
                smooth = attr.smooth,
                step = attr.step,
                scale = Math.pow(2, power(attr.dataX.length, end)),
                smoothX = this.smoothX,
                smoothY = this.smoothY,
                i, j, lineConfig, changes,
                cx1, cy1, cx2, cy2, x, y, x0, y0, saveOpacity;

            function power(count, end) {
                var power = 0,
                    n = count;
                // if count is <1 or falsy, return or we'll be stuck in an
                // infinite loop.
                if (!count) {
                    return 0;
                }
                while (n < end) {
                    power++;
                    n += count >> power;
                }
                return power > 0 ? power - 1 : power;
            }

            ctx.beginPath();
            if (smooth && smoothX && smoothY) {
                ctx.moveTo(smoothX[start * 3] * xx + dx, smoothY[start * 3] * yy + dy);
                for (i = 0, j = start * 3 + 1; i < list.length - 3; i += 3, j += 3 * scale) {
                    cx1 = smoothX[j] * xx + dx;
                    cy1 = smoothY[j] * yy + dy;
                    cx2 = smoothX[j + 1] * xx + dx;
                    cy2 = smoothY[j + 1] * yy + dy;
                    x = list[i + 3];
                    y = list[i + 4];
                    x0 = list[i];
                    y0 = list[i + 1];
                    if (attr.renderer) {
                        lineConfig = {
                            type: 'line',
                            smooth: true,
                            step: step,
                            cx1: cx1,
                            cy1: cy1,
                            cx2: cx2,
                            cy2: cy2,
                            x: x,
                            y: y,
                            x0: x0,
                            y0: y0
                        };
                        changes = attr.renderer.call(this, this, lineConfig, {store:this.getStore()}, (i/3 + 1));
                        ctx.save();
                            Ext.apply(ctx, changes);
                            // Fill the area if we need to, using the fill color and transparent strokes.
                            if (attr.fillArea) {
                                saveOpacity = ctx.strokeOpacity;
                                ctx.save();
                                    ctx.strokeOpacity = 0;
                                    ctx.moveTo(x0, y0);
                                    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                                    ctx.lineTo(x, xAxis);
                                    ctx.lineTo(x0, xAxis);
                                    ctx.lineTo(x0, y0);
                                    ctx.closePath();
                                    ctx.fillStroke(attr, true);
                                ctx.restore();
                                ctx.strokeOpacity = saveOpacity;
                                ctx.beginPath();
                            }
                            // Draw the line on top of the filled area.
                            ctx.moveTo(x0, y0);
                            ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                            ctx.moveTo(x0, y0);
                            ctx.closePath();
                            ctx.stroke();
                        ctx.restore();
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                    } else {
                        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                    }
                }
            } else {
                ctx.moveTo(list[0], list[1]);
                for (i = 3; i < list.length; i += 3) {
                    x = list[i];
                    y = list[i + 1];
                    x0 = list[i - 3];
                    y0 = list[i - 2];
                    if (attr.renderer) {
                        lineConfig = {
                            type: 'line',
                            smooth: false,
                            step: step,
                            x: x,
                            y: y,
                            x0: x0,
                            y0: y0
                        };
                        changes = attr.renderer.call(this, this, lineConfig, {store:this.getStore()}, i/3);
                        ctx.save();
                            Ext.apply(ctx, changes);
                            // Fill the area if we need to, using the fill color and transparent strokes.
                            if (attr.fillArea) {
                                saveOpacity = ctx.strokeOpacity;
                                ctx.save();
                                    ctx.strokeOpacity = 0;
                                    if (step) {
                                        ctx.lineTo(x, y0);
                                    } else {
                                        ctx.lineTo(x, y);
                                    }
                                    ctx.lineTo(x, xAxis);
                                    ctx.lineTo(x0, xAxis);
                                    ctx.lineTo(x0, y0);
                                    ctx.closePath();
                                    ctx.fillStroke(attr, true);
                                ctx.restore();
                                ctx.strokeOpacity = saveOpacity;
                                ctx.beginPath();
                            }
                            // Draw the line (or the 2 lines if 'step') on top of the filled area.
                            ctx.moveTo(x0, y0);
                            if (step) {
                                ctx.lineTo(x, y0);
                                ctx.closePath();
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(x, y0);
                            }
                            ctx.lineTo(x, y);
                            ctx.closePath();
                            ctx.stroke();
                        ctx.restore();
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                    } else {
                        if (step) {
                            ctx.lineTo(x, y0);
                        }
                        ctx.lineTo(x, y);
                    }
                }
            }
        }
    });

    /**
     * Schemas do not allow redefining Model entities and don't provide a way to remove
     * a single entity, resulting in errors when we attempt to update/redefine a Model class
     * in the canvas. To get around this, we detect the duplicate entity, clear the entire
     * schema and then redefine not only the updated model but all the other unchanged models
     * too. The result should be a clean schema with no stale associations.
     */
    Ext.define(null, {
        override: 'Ext.data.schema.Schema',
        addEntity: function(entityType) {
            // Search through all schemas, in case the model was previously using a different schema
            if (!this.$skipEntityRemoval) {
                Ext.Object.each(Ext.data.schema.Schema.instances, function(id, schema) {
                    var entities = schema.entities,
                        entityName = entityType.entityName,
                        entry = entities[entityName];
                    if (entry && entry.cls) {
                        // The model is already registered; clear the schema and re-register everything but the updated model
                        schema.clear();
                        Ext.Object.each(entities, function(name, entry) {
                            if (name !== entityName) {
                                schema.$skipEntityRemoval = true; //prevent recursion
                                schema.addEntity(entry.cls);
                                schema.$skipEntityRemoval = false;
                            }
                        });
                    }
                });
            }
            // Now that we've removed it from all schemas, add it to this one
            this.callParent(arguments);
        }
    });

    /**
     * Add missing function for Ext.chart.SpaceFillingChart
     */
    Ext.define('Ext.override.chart.SpaceFillingChart', {
        override: 'Ext.chart.SpaceFillingChart',
        getDirectionForAxis: function (position) {
            return position === 'radial' ? 'Y' : 'X';
        }
    });

    /**
     * Fix position of chart parts
     */
    Ext.define('Ext.override.draw.engine.Canvas', {
        override: 'Ext.draw.engine.Canvas',
        element: {
            reference: 'element',
            style: {
                position: 'absolute'
            },
            children: [
                {
                    reference: 'bodyElement',
                    style: {
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }
                }
            ]
        }
    });

    Ext.define(null, {
        override: 'Ext.data.BufferedStore',

        // add addObserver and removeObserver, see DSGNR-7046
        addObserver: function() {},
        removeObserver: function() {}
    });

    Ext.define(null, {
        override: 'Ext.data.PageMap',

        // add addObserver and removeObserver, see DSGNR-7046
        addObserver: function() {},
        removeObserver: function() {}
    });

    Ext.define(null, {
        override: 'Ext.pivot.Grid',

        // fix clearing Pivot grid data when no store is set, see DSGNR-7687
        onMatrixClearData: function() {
            var me = this,
                store = me.getStore();

            if (store) {
                store.removeAll(true);
            }

            if (!me.expandedItemsState) {
                me.lastColumnsState = null;
            }

            me.sortedColumn = null;
        }
    });

    Ext.define(null, {
        override: 'Ext.pivot.plugin.Configurator',

        onPivotInitialized: function(){
            var me = this,
                pivot = me.getPivot(),
                fields = me.getFields(),
                matrix = pivot.getMatrix(),
                header = pivot.getHeaderContainer && pivot.getHeaderContainer(),
                store, newFields, field, name, length, i, dim;

            if(fields.length === 0 && matrix instanceof Ext.pivot.matrix.Local) {
                // if no fields were provided then try to extract them from the matrix store
                store = matrix.store;
                newFields = store ? store.model.getFields() : [];
                length = newFields.length;

                for (i = 0; i < length; i++) {
                    name = newFields[i].getName();

                    if (!fields.byDataIndex.get(name)) {
                        fields.add({
                            header: Ext.String.capitalize(name),
                            dataIndex: name
                        });
                    }
                }
            }

            // extract fields from the existing pivot configuration
            newFields = Ext.Array.merge(matrix.leftAxis.dimensions.getRange(), matrix.topAxis.dimensions.getRange(), matrix.aggregate.getRange());
            length = newFields.length;
            for (i = 0; i < length; i++) {
                dim = newFields[i].getInitialConfig();
                delete(dim.matrix);
                delete(dim.id);
                field = fields.byDataIndex.get(dim.dataIndex);
                if(!field) {
                    fields.add(dim);
                }
            }

            me.isReady = true;
            me.doneSetup = false;

            if(header) {
                me.pivotListeners = header.renderElement.on({
                    longpress: 'showConfigurator',
                    scope: this
                });
            }
        }
    });

    /**
     * chart config is mandatory for navigator container.
     * If not provided then the chart code crashes in applyNavigator method
     */
    Ext.define(null, {
        override: 'Ext.chart.navigator.Container',

        constructor(config) {
            if (!config.chart) {
                this.applyNavigator = function() {};
            }
            this.callParent(arguments);
        }
    });

    /**
     * axis config is mandatory for navigator.
     * If not provided then the chart code crashes in setVisibleRange method
     */
    Ext.define(null, {
        override: 'Ext.chart.navigator.Navigator',

        constructor(config) {
            if (!config.axis) {
                this.setVisibleRange = function() {};
            }
            this.callParent(arguments);
        }
    });

})(Ext);
