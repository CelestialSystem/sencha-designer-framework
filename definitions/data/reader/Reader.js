xds.component.Registry.addDefinition({
    override: "Ext.data.reader.Reader",
    typeAlias: 'reader',
    mixin: ['basedata'],

    validParentTypes: ['proxy', 'Ext.data.association.Association'],
    validChildTypes: [],
    transformGroup: 'datareaders',
    disableDuplication: true,

    cfgs:[{
        name: 'rootProperty',
        merge: true,
        alternates:[{
            type: 'function',
            params: [
                {
                    name: 'data'
                }
            ]
        }]
    },{
        name: 'transform',
        merge: true,
        params: [
            {
                name: 'data'
            }
        ]
    }],
    
    init: function() {
        var me = this;
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);
        me.setReference('reader');
    },

    onCanvasConfig: function(config) {
        config.type = this.getReaderType();
        return config;
    },

    onCodeConfig: function(config) {
        var readerType = this.getCodeGenReaderType();

        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: readerType,
            rawValue: readerType
        });

        return config;
    },

    getCodeGenReaderType: function() {
        return this.getCreateAlias() || this.getReaderType();
    },

    getReaderType: function() {
        return this.getAlias().replace(/^reader./, '');
    },

    /**
     * Determines whether this reader is configured such that it can successfully read data.
     * Should be overridden by sub-definitions to provide custom logic as needed.
     */
    isConfigComplete: function() {
        return true;
    }
});