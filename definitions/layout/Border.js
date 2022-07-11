xds.layouts.Border = {
    type:'border',
    xcls:'Ext.layout.container.Border',
    text: 'Border Layout',

    cfgs: [{
        name: 'collapseMode',
        type: 'string',
        editor: 'options',
        options: ['header', 'mini']
    },{
        name: 'flex',
        type: 'number'
    }, {
        name: 'floatable',
        type: 'boolean',
        defaultValue: true
    },{
        name: 'margins',
        type: 'string'
    },{
        name: 'region',
        type: 'string',
        editor: 'options',
        options: ['center', 'east', 'north', 'south', 'west'],
        setFn: 'setConfigWithSuffix'
    },{
        name: 'split',
        type: 'boolean',
        alternates: [{
            type: 'object'
        }]
    },{
        name: 'splitterResize',
        type: 'boolean',
        defaultValue: true
    },{
        name: 'weight',
        type: 'number'
    }],

    layoutCfgs: [{
        name: 'padding',
        type: 'auto',
        alternates: [{
            type: 'number'
        }, {
            type: 'object'
        }]
    }, {
        name: 'regionWeights',
        type: 'object',
        defaultValue: {
            north: 20,
            south: 10,
            center: 0,
            west: -10,
            east: -20
        }
    }],

    "eventDefs": [],

    // intelligently try to assign region on add
    onBeforeAdd: function(parentInstance, childInstance) {
        var isRegionSet = childInstance.isCfgSet('layout|region'),
            isDockSet = childInstance.isCfgSet('dock'),
            isFloating = childInstance.getCfgValue('floating'),
            regions = ['center', 'west', 'east', 'north', 'south'],
            region;

        if (!(isRegionSet || isDockSet) && !childInstance.ignoreLayoutCfgs && childInstance.isType('component') && !isFloating) {
            // prune out each already used region
            parentInstance.children().each(function(child) {
                //<debug>
                console.debug('Removing ' + child.getCfgValue('layout|region'));
                //</debug>
                regions = Ext4.Array.remove(regions, child.getCfgValue('layout|region'));
            });


            // all regions have been used, insert additional ones to the south
            if (!regions.length) {
                regions[0] = 'south';
            }

            // use the first region
            childInstance.setCfgValue('layout|region', regions[0]);

            switch (regions[0]) {
                case 'center':
                    childInstance.setCfgValue({
                        width: undefined,
                        height: undefined
                    });
                    break;
                case 'east':
                case 'west':
                    childInstance.setCfgValue({
                        width: 150,
                        height: undefined
                    });
                    break;
                case 'north':
                case 'south':
                    childInstance.setCfgValue({
                        height: 150,
                        width: undefined
                    });
                    break;
            }
        }
    },

    // intelligently try to assign regions to children on init
    onInit: function(parentInstance, isRestoring) {
        // if we're setting a container that has children to border layout let's run the child
        // through some auto region setup
        parentInstance.children().each(function(child) {
            this.onBeforeAdd(parentInstance, child);
        }, this);
    }
};
xds.component.Registry.addLayout(xds.layouts.Border);
