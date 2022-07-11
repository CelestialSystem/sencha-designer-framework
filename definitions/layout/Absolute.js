xds.layouts.Absolute = {
    type: 'absolute',
    xcls:'Ext.layout.container.Absolute',
    text: 'Absolute Layout',

    cfgs: [{
        name: 'anchor',
        type: 'string'
    },{
        name: 'x',
        type: 'number'
    },{
        name: 'y',
        type: 'number'
    }],

    layoutCfgs: [{
        name: 'designer|snapToGrid',
        displayName: 'snapToGrid',
        type: 'number',
        editor: 'options',
        options: [5, 10, 15, 20]
    }, {
        name: 'ignoreOnContentChange',
        type: 'boolean',
        defaultValue: true
    }],

    onBeforeAdd: function(parentInstance, childInstance){
        if (xds.canvas.lastDropPoint) {
            var dock = childInstance.isCfgSet('dock'),
                lastDropPoint = xds.canvas.lastDropPoint;

            if (!dock) {
                xds.canvas.getFilmRegionInfo(parentInstance).then(function(parentRegion) {
                    if (parentRegion) {
                        // position should be abiding by snapping.
                        // p.left = xds.canvas.dragTracker.snap(p.left, pnode.component.snapToGrid);
                        // p.top = xds.canvas.dragTracker.snap(p.top, pnode.component.snapToGrid);
                        childInstance.setCfgValue({
                            "layout|x": lastDropPoint[0] - parentRegion.x,
                            "layout|y": lastDropPoint[1] - parentRegion.y
                        });
                    }
                });
            }
        }
    },

    onInit: function(containerInstance, isRestoring) {
        // Prime the snapToGrid value, if necessary
        var snapToGrid = containerInstance.getSnapToGrid();
        if (!snapToGrid) {
            containerInstance.setSnapToGrid(10);
        }

        containerInstance.on({
            canvasconfig: this.onCanvasConfig,
            containerInstance: containerInstance, //passed to handler in eventOpts arg
            scope: this
        });
    },

    onDestroy: function(containerInstance) {
        containerInstance.un({
            canvasconfig: this.onCanvasConfig,
            scope: this
        });
    },

    /**
     * When drawing to the canvas, set the collapsed state of the child panels so that it
     * expands the one containing the current selection.
     */
    onCanvasConfig: function(config, eventOpts) {
        var container = eventOpts.containerInstance,
            snapToGrid = container.getSnapToGrid(),
            cls, prop;

        // Add the snap-to-grid css for the canvas
        if (snapToGrid && container.getShowGrid()) {
            cls = ' xds-grid-' + snapToGrid;
            if (container.isType('panel')) {
                if (container.hasCfg('bodyCls')) {
                    prop = 'bodyCls';
                } else if (container.hasCfg('bodyCssClass')) {
                    prop = 'bodyCssClass';
                }
            } else {
                prop = 'cls';
            }
            config[prop] = config[prop] ? config[prop] + cls : cls;
        }

        return config;
    }

};
xds.component.Registry.addLayout(xds.layouts.Absolute);