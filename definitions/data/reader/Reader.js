xds.component.Registry.addDefinition({
    override: "Ext.data.reader.Reader",
    typeAlias: 'reader',
    mixin: ['basedata'],

    validParentTypes: ['proxy', 'Ext.data.association.Association', 'form'],
    validChildTypes: [],
    transformGroup: 'datareaders',
    disableDuplication: true,

    cfgs: [{
        name: 'rootProperty',
        merge: true,
        alternates: [{
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
        me.on('validparent', me.onValidParent, me);
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);
        me.on('add', me.onAdd, me);
        me.on('restore', me.onRestore, me);
    },

    onValidParent: function(parent) {
        // Disallow another reader if we've already got both reader and errorReader present
        if (parent.isType('form') && parent.query('>reader:not([isTransforming])').length >= 2) {
            return false;
        }
        return true;
    },

    onAdd: function(parent) {
        var me = this,
            ref, otherReader;
        if (parent.isType('form')) {
            // If the reference is pre-set, e.g. by the formreader config's + button, use it directly
            ref = me.getReference().name;
            if (ref !== 'reader' && ref !== 'errorReader') {
                // If either a 'reader' or 'errorReader' ref is present, use the opposite one
                otherReader = parent.child('reader:not([designerId=' + me.getUniqueId() + '])');
                ref = otherReader && otherReader.getReference().name === 'reader' ? 'errorReader' : 'reader';
            }
            me.setReference(ref);
            me.setName(ref); //use the reference name as the display name
        } else {
            me.setReference('reader');
        }
    },

    onRestore: function() {
        if (this.parent().isType('form')) {
            // The name isn't persisted, so restore it to match the reference name
            this.setName(this.getReference().name);
        }
    },

    onCanvasConfig: function(config) {
        config.type = this.getReaderType();
        return config;
    },

    onCodeConfig: function(config) {
        if (this.parent().is('form')) {
            config.$codeClass = this.getClassName();
        } else {
            var readerType = this.getCodeGenReaderType();
            config.configs.unshift({
                name: 'type',
                type: 'string',
                value: readerType,
                rawValue: readerType
            });
        }

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