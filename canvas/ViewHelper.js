Ext.define('xds.ViewHelper', {
    extend: 'xds.AbstractViewHelper',
    singleton: true,

    constructor: function() {
        var me = this;
        me.callParent(arguments);
        xds.messaging.implement({
            expandPanel: me.expandPanel,
            collapsePanel: me.collapsePanel,
            showButtonMenu: me.showButtonMenu,
            hideButtonMenu: me.hideButtonMenu,
            getSliderValueForPoint: me.getSliderValueForPoint,
            scope: me
        })
    },

    /**
     * @override
     * Inherit docs
     */
    prepareRenderCt: function(data) {
        var me = this,
            renderCt = me.$renderCt,
            oldLayout = renderCt ? renderCt.getLayout() : null,
            newLayout, layoutChanged;

        // Some components we want to be rendered as fullscreen when they are shown as the top-level
        // instance, others such as buttons we do not. Adjust the layout of the renderCt to account for this.
        if (data.fullscreen && !data.config.hasOwnProperty('width') && !data.config.hasOwnProperty('height')) {
            newLayout = 'fit';
        } else {
            newLayout = 'auto';
        }

        // layout is initialized lazily so it might still be a plain string
        if (oldLayout && oldLayout.isLayout) {
            layoutChanged = !Ext.Array.contains(oldLayout.alias, 'layout.' + newLayout);
        } else if (oldLayout) {
            layoutChanged = oldLayout !== newLayout;
        } else {
            layoutChanged = true; //first time
        }

        // The SDK doesn't allow calling setLayout after initial creation, so we have to blow
        // away the renderCt and recreate it with the new layout
        if (layoutChanged) {
            if (renderCt) {
                renderCt.destroy();
            }
            // Use our custom Viewport dtype so that the renderCt expands to the full size
            // of the iframe, but doesn't take over the body element like Ext's Viewport does.
            renderCt = this.$renderCt = Ext.create('xds.dtypes.container.Viewport', {
                autoScroll: true,
                xdsInstanceId: '$xdsRenderCt',
                cls: 'xds-renderCt',
                layout: newLayout,
                renderTo: Ext.getBody(),
                listeners: {
                    scroll: {
                        element: 'el',
                        fn: this.onRenderCtScroll,
                        scope: this
                    }
                }
            });
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
            ownerCt, ownerRegion, ownerTargetEl;

        if (cmp && cmp.isVisible(true) && cmp.el && cmp.el.dom) {
            // Start with the component's outer region
            info = me.getRegionForElement(cmp.getEl());

            // Walk up the parent containers and clip the film region to their bounds
            ownerCt = cmp.ownerCt;
            while (ownerCt) {
                // Docked items are clipped by the owner's outer el, others by the targetEl
                ownerTargetEl = cmp.dock ? ownerCt.getEl() : ownerCt.getTargetEl();

                // Don't clip if overflow is visible
                if (ownerTargetEl.getStyle('overflow') !== 'visible') {
                    ownerRegion = me.getRegionForElement(ownerTargetEl);

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
                        info.ownerInstanceId = ownerCt.xdsInstanceId;
                        info.ownerRegion = ownerRegion;

                        return info;
                    }

                    // We never want to clip a menu's film to its parent menu's region
                    if (ownerCt.isXType('menu')) {
                        break;
                    }
                }

                // move up a level
                cmp = ownerCt;
                ownerCt = ownerCt.ownerCt;
            }
        }
        //<debug>
        else if (cmp && !cmp.rendered) {
            console.debug('Film weirdness: ' + cmp);
        }
        //<debug>

        return info;
    },

    /**
     * @override
     * Inherit docs.
     */
    getCmpScrollInfo: function(cmp) {
        var me = this,
            targetEl,
            info = null;

        if (cmp) {
            targetEl = cmp.getTargetEl();

            // Grab region of scroll view area
            info = me.getRegionForElement(targetEl);

            // Add in the scroll position and size
            ['scrollLeft','scrollTop','scrollWidth','scrollHeight'].forEach(function(item){
                if(item in targetEl.dom){
                    info[item] = targetEl.dom[item];
                }
            });
        }

        return info;
    },

    /**
     * @override
     * Inherit docs.
     */
    scrollCmpTo: function(cmp, x, y, animate) {
        var el = cmp && cmp.getTargetEl();
        if (el) {
            if (Ext.isNumber(x)) {
                el.scrollTo('left', x, animate);
            }
            if (Ext.isNumber(y)) {
                el.scrollTo('top', y, animate);
            }
        }
    },

    /**
     * @override
     * Inherit docs.
     */
    setActiveItem: function(parentId, item) {
        var ct = this.getCmpByInstanceId(parentId),
            layout;
        if (ct && ct.rendered && !ct.isDestroyed) {
            layout = ct.getLayout();
            // Ignore if this is called before the layout has been initialized
            if (layout && layout.isLayout) {
                if (layout.getLayoutItems().length) {
                    item = item || 0;
                    if (ct.getComponent(item)) {
                        // Due to customized absolute layout code tabpanel needs special handling.
                        if (ct.xtype === 'tabpanel') {
                            ct.setActiveItem(ct.items.getAt(item));
                        } else {
                            layout.setActiveItem(item);
                        }
                    }
                }
            }
        }
    },

    /**
     * @messaging.call
     * Show the child menu for a given button instance
     * @param {String} instanceId
     */
    showButtonMenu: function(instanceId) {
        var button = this.getCmpByInstanceId(instanceId);
        if (button && button.menu) {
            button.showMenu();
        }
    },

    /**
     * @messaging.call
     * Hide the child menu for a given button instance
     * @param {String} instanceId
     */
    hideButtonMenu: function(instanceId) {
        var button = this.getCmpByInstanceId(instanceId);
        if (button && button.menu) {
            /*
             * We have to forcefully remove the 'focus' class for
             * menu buttons in the canvas for the onmouseout event.
             */
            var cls = "x-btn-" + button.activeUI + '-focus';
            button.removeCls(cls);

            button.hideMenu();
        }
    },

    /**
     * @messaging.call
     * Expand a given panel instance
     * @param {String} instanceId
     */
    expandPanel: function(instanceId) {
        var panel = this.getCmpByInstanceId(instanceId);
        if (panel && panel.rendered) {
            panel.expand();
        }
    },

    /**
     * @messaging.call
     * Collapse a given panel instance
     * @param {String} instanceId
     */
    collapsePanel: function(instanceId) {
        var panel = this.getCmpByInstanceId(instanceId);
        if (panel && panel.rendered) {
            panel.collapse();
        }
    },

    /**
     * @messaging.call
     * For a given slider field instance, return the numeric slider value for a given x/y point
     * @param {String} instanceId
     * @param {Number} x
     * @param {Number} y
     * @returns {Promise<Number>} A promise for the numeric value
     */
    getSliderValueForPoint: function(instanceId, x, y) {
        var me = this;
        return me.promiseCmpRendered(instanceId).then(function(cmp) {
            var sliderRegion = me.getRegionForElement(cmp.innerEl),
                offset;
            if (!sliderRegion.isOutOfBound({x:x, y:y})) {
                offset = cmp.vertical ? sliderRegion.bottom - y : x - sliderRegion.left;
                return Ext.util.Format.round(cmp.reversePixelValue(offset), cmp.decimalPrecision);
            }
        });
    }

});