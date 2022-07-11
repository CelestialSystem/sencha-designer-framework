Ext.define('xds.ViewHelper', {
    extend: 'xds.AbstractViewHelper',
    singleton: true,

    constructor: function() {
        var me = this;
        me.callParent(arguments);
        xds.messaging.implement({
            showComponent: me.showComponent,
            hideComponent: me.hideComponent,
            isPointInFieldInput: me.isPointInFieldInput,
            scaleDocument: me.scaleDocument,
            scope: me
        })
    },

    /**
     * @override to use painted instead of rendered
     * Inherit docs
     */
    promiseCmpRendered: function(instanceId) {
        return this.promise(function(fulfill) {
            var me = this,
                cmp = me.getCmpByInstanceId(instanceId);
            if (cmp && !cmp.isDestroyed) {
                if (cmp.isPainted()) {
                    fulfill(cmp);
                } else {
                    cmp.on('painted', function() {
                        fulfill(cmp);
                    }, cmp, {single: true});
                }
            }
        });
    },

    promiseCmpInitialized: function(instanceId) {
        return this.promise(function(fulfill) {
            var me = this,
                cmp = me.getCmpByInstanceId(instanceId);
            if (cmp && !cmp.isDestroyed) {
                if (cmp.initialized) {
                    fulfill(cmp);
                } else {
                    cmp.on('initialize', fulfill, cmp, {single: true});
                }
            }
        });
    },

    /**
     * @override
     * Inherit docs
     */
    prepareRenderCt: function(data) {
        var me = this,
            viewport = Ext.Viewport,
            renderCt = me.$renderCt,
            oldLayout = renderCt ? renderCt.getLayout() : null,
            newLayout, layoutChanged;

        // Most components we want to be rendered as fullscreen when they are shown as the top-level
        // instance, others such as buttons we do not. Adjust the layout of the renderCt to account for this.
        newLayout = data.fullscreen ? 'fit' : 'auto';

        // layout is initialized lazily so it might still be a plain string
        if (oldLayout && oldLayout.isLayout) {
            layoutChanged = !Ext.Array.contains(oldLayout.alias, 'layout.' + newLayout);
        } else if (oldLayout) {
            layoutChanged = oldLayout !== newLayout;
        } else {
            layoutChanged = true; //first time
        }

        // touch sdk explicitly disallows calling setLayout after initial creation,
        // so we have to blow away the ownerCt and recreate it with the new layout
        if (layoutChanged) {
            me.$renderCt = viewport.add({
                xtype: 'container',
                layout: newLayout,
                style: { 'overflow': 'auto' }
            });
            viewport.setActiveItem(me.$renderCt);
            if (renderCt) {
                renderCt.destroy();
            }
            renderCt = me.$renderCt;
        }
        return renderCt;
    },


    /**
     * @override
     * Inherit docs
     */
    doGetFilmRegionInfo: function(cmp) {
        var me = this,
            info = null,
            parent, ownerRegion;

        if (cmp && cmp.isVisible(true) && cmp.el && cmp.el.dom) {
            // Start with the component's outer region
            info = me.getRegionForElement(cmp.el);

            // Walk up the parent containers and clip the film region to their content area bounds
            parent = cmp.parent;
            while (parent) {
                // Docked items are never clipped by their immediate owner, so only do this
                // for items in the main content area
                if (!cmp.getDocked()) {
                    ownerRegion = me.getRegionForElement(parent.element);
                    if (ownerRegion && ownerRegion.intersect(info)) {
                        if (ownerRegion.top > info.top) {
                            info.top = ownerRegion.top;
                            info.topClipped = true;
                        }
                        if (ownerRegion.right < info.right) {
                            info.right = ownerRegion.right;
                            info.rightClipped = true;
                        }
                        if (ownerRegion.bottom < info.bottom) {
                            info.bottom = ownerRegion.bottom;
                            info.bottomClipped = true;
                        }
                        if (ownerRegion.left > info.left) {
                            info.left = ownerRegion.left;
                            info.leftClipped = true;
                        }
                    } else if (!ownerRegion.contains(info)) {
                        // film is completely outside visible area
                        info.outside = true;
                        info.ownerInstanceId = parent.xdsInstanceId;
                        info.ownerRegion = ownerRegion;

                        return info;
                    }
                }

                // move up a level
                cmp = parent;
                parent = parent.parent;
            }
        }

        return info;
    },

    /**
     * @override
     * Inherit docs.
     */
    getCmpScrollInfo: function(cmp) {
        var me = this,
            scrollable = cmp.getScrollable(),
            scrollViewEl, scroller, scrollPos, scrollSize, scrollWidth, scrollHeight, ctSize,
            info = null;

        if (scrollable) {
            // Grab region of scroll view area
            scrollViewEl = scrollable.getElement();
            if (scrollViewEl) {
                info = me.getRegionForElement(scrollViewEl);
                ctSize = info.getSize();

                // Add in the scroll position and size
                scroller = scrollable.getScroller();
                scrollPos = scroller.position;
                scrollSize = scroller.getElement().getSize();
                info.scrollLeft = scrollPos.x;
                info.scrollTop = scrollPos.y;
                scrollWidth = scrollSize.width;
                scrollHeight = scrollSize.height;
                if (scrollHeight <= ctSize.height) {
                    scrollHeight = 0; //prevent horizontal scrollbar from causing vertical scrollbar
                }
                if (scrollWidth <= ctSize.width) {
                    scrollWidth = 0; //prevent vertical scrollbar from causing horizontal scrollbar
                }
                info.scrollWidth = scrollWidth;
                info.scrollHeight = scrollHeight;
            }
        }

        return info;
    },

    /**
     * @override
     * Inherit docs.
     */
    scrollCmpTo: function(cmp, x, y, animate) {
        var scrollable = cmp && cmp.isContainer && cmp.getScrollable();
        if (scrollable) {
            scrollable.getScroller().scrollTo(x, y, animate);
        }
    },

    /**
     * @override
     * Inherit docs.
     */
    setActiveItem: function(parentId, item) {
        this.promiseCmpInitialized(parentId).then(function(cmp) {
            cmp.setActiveItem(item || 0);
        });
    },

    /**
     * @messaging.call
     * Show a component
     * @param {String} instanceId
     */
    showComponent: function(instanceId) {
        this.promiseCmpInitialized(instanceId).then(function(cmp) {
            cmp.show();
        });
    },

    /**
     * @messaging.call
     * Hide a component
     * @param {String} instanceId
     */
    hideComponent: function(instanceId) {
        this.promiseCmpInitialized(instanceId).then(function(cmp) {
            cmp.hide();
        });
    },

    /**
     * @messaging.call
     * Determine whether a given x/y point is within the input element of a given field instance.
     * @param {String} instanceId
     * @param {Number} x
     * @param {Number} y
     * @return {Boolean}
     */
    isPointInFieldInput: function(instanceId, x, y) {
        var cmp = this.getCmpByInstanceId(instanceId),
            inputRegion;
        if (cmp && cmp.isXType('field') && cmp.isPainted()) {
            inputRegion = Ext.util.Region.getRegion(cmp.getComponent().element);
            return !inputRegion.isOutOfBound({x:x, y:y});
        }
        return false;
    },

    /**
     * @messaging.call
     * Set the scale of the document element
     * @param {Number} scale 0..1
     */
    scaleDocument: function(scale) {
        document.documentElement.style.WebkitTransform = 'scale(' + scale + ')';
    }

});