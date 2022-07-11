xds.component.Registry.addDefinition({
    override: "Ext.form.trigger.Spinner",
    typeAlias: 'spinner',

    toolbox: {
        name: 'Spinner Trigger',
        iconCls: 'icon-trigger-spinner',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MySpinnerTrigger',

    ignoreCfgs: [
        'handler' //replaced by the separate down/up handlers
    ],

    cfgs: [{
        name: "downHandler",
        merge: false,
        type: 'function',
        params: [{
            name: 'field',
            type: 'Ext.form.field.Text'
        }, {
            name: 'trigger',
            type: 'Ext.form.trigger.Spinner'
        }, {
            name: 'e',
            type: 'Ext.event.Event'
        }],
        allowOnViewController: true
    }, {
        name: "upHandler",
        merge: false,
        type: 'function',
        params: [{
            name: 'field',
            type: 'Ext.form.field.Text'
        }, {
            name: 'trigger',
            type: 'Ext.form.trigger.Spinner'
        }, {
            name: 'e',
            type: 'Ext.event.Event'
        }],
        allowOnViewController: true
    }],

    init: function() {
        var me = this;
        me.on('codeconfig', me.onCodeConfig, me);
        me.on('coderequires', me.onCodeRequires, me);
    },

    onCodeRequires: function() {
        // required so builds work.
        return ['Ext.form.field.Spinner'];
    },

    onCodeConfig: function(config) {
        // 'type' isn't an actual config, but needs to be specified in codegen
        // for various types of triggers.
        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: 'spinner',
            rawValue: 'spinner'
        });

        return config;
    }

});