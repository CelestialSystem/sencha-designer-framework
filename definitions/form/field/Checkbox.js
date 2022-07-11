xds.component.Registry.addDefinition({
    override: "Ext.form.field.Checkbox",
    typeAlias: 'checkboxfield',

    toolbox: {
        name: 'Checkbox',
        iconCls: 'icon-checkbox',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    transformGroup: 'boolfields',

    obscureCfgs: ['boxLabelCls', 'checkedCls', 'fieldBodyCls', 'focusCls'],
    ignoreCfgs: [
        'componentLayout',
        'inputType',
        'scope'
    ],

    cfgs: [{
        name: 'boxLabelAlign',
        merge: true,
        editor: 'options',
        options: ['before', 'after']
    }, {
        name: 'handler',
        merge: true,
        allowOnViewController: true
    }],

    inlineEdit: [{
        cfg: 'fieldLabel',
        textEl: '.x-form-item-label'
    }, {
        cfg: 'boxLabel',
        textEl: '.x-form-cb-label'
    }],

    init: function() {
        var me = this;

        me.clearListenersByEvent('resizehandles');
        me.ex('resizehandles', function() { return false; });
    }
});