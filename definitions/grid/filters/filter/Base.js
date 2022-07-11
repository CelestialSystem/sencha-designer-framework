xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.filter.Base",
    mixin: ['base', 'baseview'],
    typeAlias: 'basecolumnfilter',
    disablePromoteToClass: true,

    validParentTypes: ['gridcolumn'],

    cfgs: [{
        // Not documented in framework files
        name: 'value',
        type: 'string',
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;

        me.on({
            canvasconfig: me.onCanvasConfig,
            codeconfig: me.onCodeConfig,
            setup: me.onSetup
        });
    },

    onSetup: function() {
        var grid = this.up('tablepanel'),
            filtersPlugin;

        this.setReference('filter');

        // ensure the filters plugin is required if we add any filters.
        filtersPlugin = grid.query('[type="Ext.grid.filters.Filters"]');
        if (!filtersPlugin.length) {
            grid.createChild({
                type: 'Ext.grid.filters.Filters'
            });
        }

    },

    onCanvasConfig: function(config) {
        var grid = this.up('tablepanel');

        config.type = this.filterType;

        if (grid && !grid.getCfgValue('store')) {
            delete config.value;
        }
        return config;
    },

    onCodeConfig: function(config) {
        var type = this.filterType;

        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: type,
            rawValue: type
        });

        return config;
    }

});
