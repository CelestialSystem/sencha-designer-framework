// This file is loaded into the canvas iframe, so Ext refers to the canvas's ExtJS 6.2
// namespace, while xds refers to a minimal object structure injected by the Canvas
// into the iframe's DOM.


// Bypass private member override prevention
Ext.privacyViolation = Ext.emptyFn;


// Initialize messaging with the outer Architect window
xds.messaging = Ext.create('sencha.CrossWindowMessaging', {
    targetWindow: window.parent,
    channel: 'xdsCanvas'
});

// Implement the fireExtReady call
xds.messaging.implement('fireExtReady', function() {
    return xds.messaging.promise();
});


// Global error handling - capture and send message to parent window which will
// display it and send a MixPanel tracking event for it.
window.onerror = function(message, url, lineNumber) {
    xds.messaging.notify('frameworkerror', message, url, lineNumber);
    return true;
};


(function(Ext) {
    var scrollCache = {};

    // Enable QuickTips globally -- some component configurations expect it to be
    // initialized and throw errors if it isn't.
    Ext.QuickTips.init();

    Ext.define(null, {
        override: 'Ext.AbstractComponent',

        constructor : function(config) {
            var me = this;
            // Remove xdsInstanceId to prevent it being passed
            // down to children. Duplicate xdsInstanceIds can cause bugs.
            if (config && config.xdsInstanceId) {
                me.xdsInstanceId = config.xdsInstanceId;
                delete config.xdsInstanceId;
            }
            if (config && config.xdsInlineEditCfgOwnerId) {
                me.xdsInlineEditCfgOwnerId = config.xdsInlineEditCfgOwnerId;
                delete config.xdsInlineEditCfgOwnerId;
            }
            if (config && config.xdsActivateId) {
                me.xdsActivateId = config.xdsActivateId;
                delete config.xdsActivateId;
            }
            me.callParent(arguments);
        },

        initComponent: function() {
            var me = this,
                xdsInstanceId = me.xdsInstanceId;
            if (xdsInstanceId) {
                xds.ViewHelper.registerCmpByInstanceId(xdsInstanceId, me);
                xds.messaging.notify('instancecreate', xdsInstanceId);
                me.on('afterrender', me.onAfterRenderXDS, me);
                me.on('destroy', me.onDestroyXDS, me);
            }
            me.callParent(arguments);
        },

        onAfterRenderXDS: function(me) {
            var xdsInstanceId = me.xdsInstanceId,
                inlineEditId = me.xdsInlineEditCfgOwnerId,
                activateId = me.xdsActivateId;
            if (xdsInstanceId) {
                me.el.set({'data-xdsinstanceid': xdsInstanceId});
                if (!me.isContainer) {
                    xds.messaging.notify('instancepaint', xdsInstanceId);
                }
                if (me.autoScroll) {
                    me.mon(me.getTargetEl(), 'scroll', me.onScrollXDS, me);
                }
            }
            if (inlineEditId) {
                me.el.set({'data-xdsinlineeditid': inlineEditId});
            }
            if (activateId) {
                me.element.set({'data-xdsactivateid': activateId});
            }
        },

        onDestroyXDS: function(me) {
            var xdsInstanceId = me.xdsInstanceId;
            if (xdsInstanceId) {
                xds.messaging.notify('instancedestroy', xdsInstanceId);
                delete me.xdsInstanceId;
                xds.ViewHelper.unregisterCmpByInstanceId(xdsInstanceId);
            }
        },

        onScrollXDS: function() {
            var me = this,
                xdsInstanceId = me.xdsInstanceId;
            if (xdsInstanceId) {
                scrollCache[xdsInstanceId] = me.getTargetEl().getScroll();
                xds.messaging.notify('instancescroll', xdsInstanceId);
            }
        },

        /**
         * Add getOwnerCt method for compatibility; called by the canvas
         */
        getOwnerCt: function() {
            return this.ownerCt;
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
        }
    });

    Ext.define(null, {
        override: 'Ext.container.Container',

        initComponent: function() {
            // If the user specified a function for the defaults, wrap it to recover from any errors it may throw.
            var defaults = this.defaults;
            if (Ext.isFunction(defaults)) {
                this.defaults = function() {
                    try {
                        return defaults.apply(this, arguments);
                    } catch(e) {
                        //<debug>
                        console.log('Error in "defaults" config function for container ' + this.getId(), e);
                        //</debug>
                        return {};
                    }
                };
            }

            this.callParent(arguments);
        },

        afterLayout: function() {
            var me = this,
                xdsInstanceId = me.xdsInstanceId,
                targetEl, scrollXY;

            me.callParent(arguments);
            if (xdsInstanceId) {
                // Restore the last scroll position if any
                targetEl = me.getTargetEl();
                scrollXY = scrollCache[xdsInstanceId];
                if (scrollXY && targetEl) {
                    targetEl.scrollTo('left', scrollXY.left);
                    targetEl.scrollTo('top', scrollXY.top);
                }

                xds.messaging.notify('instancepaint', xdsInstanceId);
            }
        }
    });


    Ext.define(null, {
        override: 'Ext.view.AbstractView',

        // TRUNKDIFF: Keep from iterating past the number of records in the store. This can happen
        // when the itemSelector is set to something that selects a different number of elements
        // than we have records. If we see this condition, we show the user a warning and constrain
        // the endIndex to keep it from erroring.
        updateIndexes : function(startIndex, endIndex) {
            var me = this,
                instanceId = me.xdsInstanceId,
                elementCount = me.all.elements.length,
                recordCount = me.store.getCount();

            if (elementCount !== recordCount) {
                if (instanceId) {
                    // TODO decide if we need to make this more generic somehow, like 'add/removeInstanceMessage' events
                    xds.messaging.notify('dataview:itemcountmismatch', instanceId, elementCount, recordCount);
                }
                if (!Ext.isNumber(endIndex)) {
                    endIndex = elementCount - 1;
                }
                endIndex = Math.min(endIndex, elementCount - 1, recordCount - 1);
            } else if (instanceId) {
                xds.messaging.notify('dataview:itemcountok', instanceId);
            }

            return me.callOverridden([startIndex, endIndex]);
        }
    });

    Ext.define(null, {
        override: 'Ext.data.Connection',
        onStateChange : function(request) {
            // TRUNKDIFF: request.xhr undefined check
            if (request.xhr) {
                this.callParent(arguments);
            }
        }
    });

    Ext.define(null, {
        override: 'Ext.data.reader.Reader',
        read: function(response) {
            // TRUNKDIFF - save response
            if (response) {
                if ('responseText' in response) {
                    this.rawResponseText = response.responseText;
                } else if ('responseJson' in response) {
		    //For json type reader check for responseJson not responseText
                    this.rawResponseText = JSON.stringify(response.responseJson || '');
                } else {
                    this.rawResponseText = JSON.stringify(response) || '';
                }
            } else {
                this.rawResponseText = '';
            }
            // END TRUNKDIFF

            return this.callParent(arguments);
        }
    });


    Ext.define(null, {
        override: 'Ext.data.reader.Xml',

        constructor: function(config) {
            var me = this;
            me.callParent([config]);
            me.on('exception', me.onException, me);
        },

        onException: function() {
            var response = arguments[1];

            Ext.Error.raise({
                response: response,
                xml: response.responseText,
                msg: 'Response XML was invalid or unavailable.<br /><br />XML:<br />' +
                    Ext.util.Format.htmlEncode(response.responseText).replace(/\n/g, '<br />')
            });
        },

        getResponseData: function(response) {
            var xml,
                error,
                msg;

            // TRUNKDIFF - catch all exceptions and handle below
            try {
                xml = response.responseXML;
            } catch (e) {
                // nothing
            }

            if (!xml) {
                msg = 'XML data not found in the response';

                error = new Ext.data.ResultSet({
                    total  : 0,
                    count  : 0,
                    records: [],
                    success: false,
                    message: msg
                });

                this.fireEvent('exception', this, response, error);

                return error;
            }

            return this.readRecords(xml);
        }
    });


    Ext.define(null, {
        override: 'Ext.data.proxy.Server',
        buildUrl: function(request) {
            var me = this,
                url = me.getUrl(request);

            // TRUNKDIFF: Don't warn about empty string
            if (!Ext.isString(url)) {
                url = '';
            }

            if (me.noCache) {
                url = Ext.urlAppend(url, Ext.String.format("{0}={1}", me.cacheString, Ext.Date.now()));
            }

            return url;
        }
    });


    /**
     * Reduce timeout for JsonP requests. Default of 30sec is much too long.
     */
    Ext.data.JsonP.timeout = 5000;


    /**
     * Prevent error when salt or timestamp are not configured
     */
    Ext.define(null, {
        override: 'Ext.data.UuidGenerator',
        init: function() {
            this.salt = this.salt || {};
            this.timestamp = this.timestamp || {};
            this.callParent(arguments);
        }
    });

    /**
     * Prevent error on mouseenter and mouseleave events when
     * associated store isn't configured properly (DSGNR-4240)
     */
    Ext.define(null, {
        override: 'Ext.view.View',
        handleMouseOverOrOut: Ext.emptyFn
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


    Ext.define(null, {
        override: 'Ext.layout.container.Border',

        /**
         * The border layout's beginLayout method has an explicit check that raises an error
         * if it's within a shrinkWrap layout context. Since it's possible that the user will
         * hit that scenario while in the middle of configuring things, we want to intercept
         * it, prevent the error by switching sizemodels to something that won't throw an
         * error, and notify the user of the situation so they know to fix it.
         */
        beginLayout: function(ownerContext) {
            var notify;
            if (ownerContext.heightModel.shrinkWrap) {
                ownerContext.heightModel = this.sizeModels.natural;
                notify = true;
            }
            if (ownerContext.widthModel.shrinkWrap) {
                ownerContext.widthModel = this.sizeModels.natural;
                notify = true;
            }

            if (notify) {
                xds.messaging.notify(
                    'instancemessage',
                    this.owner.xdsInstanceId,
                    'Border layout is not allowed on a shrink-wrapped container. Give the container an explicit ' +
                    'width/height, or give its parent container a layout that will assign it a width/height.',
                    'icon-error'
                );
            }

            this.callParent(arguments);
        }
    });

    Ext.define(null, {
        override: 'Ext.data.ChainedStore',

        // add getTotalCount due to DSGNR-6585
        getTotalCount: function() {
            return 0;
        }
    });

    Ext.define(null, {
        override: 'Ext.data.BufferedStore',

        // add addObserver and removeObserver, see DSGNR-6605 
        addObserver: function() {},
        removeObserver: function() {}

    });

    Ext.define(null, {
        override: 'Ext.data.PageMap',

        // add addObserver and removeObserver, see DSGNR-6605
        addObserver: function() {},
        removeObserver: function() {}

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
