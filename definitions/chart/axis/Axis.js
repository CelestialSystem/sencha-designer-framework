xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Axis",
    typeAlias: 'chartaxis',
    mixin: ['baseview'],

    disableInitialView: true,

    cfgs: [{
        name: 'grid',
        merge: true,
        alternates: [{
            type: 'boolean'
        }]
    }, {
        name: 'position',
        merge: true,
        editor: 'options',
        options: ['top', 'bottom', 'left', 'right', 'radial', 'angular', 'gauge']
    },{
        name: 'fields',
        merge: false,
        type: 'typedarray',
        memberConfig: {
            type: 'datafield',
            storeOwnerSelector: '^abstractchart'
        }
    },{
        name: 'renderer',
        merge: true,
        params: [
            {
                "name": "axis",
                "type": "Ext.chart.axis.Axis"
            },
            {
                "name": "label",
                "type": "String"
            },
            {
                "name": "layoutContext",
                "type": "Object"
            },
            {
                "name": "lastLabel",
                "type": "String"
            }
        ]
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);
        me.on('linkedinstance', me.onLinkedInstance, me);
        me.on('linkedinstancecodeconfig', me.onLinkedInstanceCodeConfig, me);

        // Axes are added in the chart's `axes` config
        me.setReference({ name: 'axes', type: 'array' });
    },

    onSetup: function() {
        this.setCfgValue({
            position: 'bottom',
            title: this.getAxisType() + ' Axis'
        });
    },

    onCanvasConfig: function(config) {
        config.type = this.getAxisType();

        // The SDK errors if the axis position is not passed in the config, even though there
        // is a default value defined on the prototype and documented, so we add the default.
        if (!config.hasOwnProperty('position')) {
            config.position = this.getCfgDefaultValue('position');
        }
        return config;
    },

    onCodeConfig: function(config) {
        var axisType = this.getAxisType();

        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: axisType,
            rawValue: axisType
        });

        // The SDK errors if the axis position is not passed in the config, even though there
        // is a default value defined on the prototype and documented, so we add the default.
        if (!Ext4.Array.some(config.configs, function(c) { return c.name === 'position'; })) {
            var val = this.getCfgDefaultValue('position');
            config.configs.push({
                name: 'position',
                type: 'string',
                primitive: true,
                rawValue: val,
                value: val
            });
        }
        return config;
    },

    onLinkedInstance: function(linkedInstance) {
        var me = this;

        // Copy our implementation of getAxisType to the linked instance
        linkedInstance.getAxisType = me.getAxisType;
    },

    onLinkedInstanceCodeConfig: function(config, linkedInstance) {
        // Force the linked instance to generate instantiation code
        // rather than an xtype config.
        // i.e.:
        //   { xtype: 'myaxis', id: 'yo' }
        //   =>
        //   Ext.create('myaxis', { id: 'yo' })
        config.$codeClass = this.getUserClassName();
        delete config.alias;
        return config;
    }
});
