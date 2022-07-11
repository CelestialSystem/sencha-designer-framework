xds.component.Registry.addDefinition({
    override: "Ext.form.field.Text",
    typeAlias: 'textfield',

    toolbox: {
        name: 'Text Field',
        iconCls: 'icon-textfield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyTextField',
    validChildTypes: ['trigger'],

    obscureCfgs: ['emptyCls', 'requiredCls'],
    cfgs: [{
        name: 'vtype',
        merge: true,
        editor: 'combo',
        options: ['alpha', 'alphanum', 'email', 'url']
    },{
        name: "maxLength", 
        merge: true,
        minValue: 0
    },{
        name: 'triggers',
        merge: false,
        displayName: 'Triggers',
        type: 'refgroup',
        refSelector: 'trigger',
        createTypes: ['trigger', 'spinner']
    }],

    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);
    },

    onCodeConfig: function(config) {
        var refs = config.refs;

        if (refs) {
            config.refs = this.convertReferencesToDictionary(refs, 'triggers', 'name');
        }

        return config;
    },

    onCanvasConfig: function(config) {
        var vtypes = this.flyCfg('vtype').config.options,
            triggers = {};

        // only render a vtype that comes standard
        if (config.vtype && !vtypes.contains(config.vtype)) {
            delete config.vtype;
        }

        if (Ext4.isArray(config.triggers)) {
            config.triggers.forEach(function(trigger) {
                var name = trigger.name;

                if (name) {
                    delete trigger.name;
                    triggers[name] = trigger;
                }
            });

            config.triggers = triggers;
        }

        return config;
    }
});