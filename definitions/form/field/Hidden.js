xds.component.Registry.addDefinition({
    override: "Ext.form.field.Hidden",
    typeAlias: 'hiddenfield',

    toolbox: {
        name: 'Hidden Field',
        iconCls: 'icon-hiddenfield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyHiddenField',

    ignoreCfgs: [
        'hideLabel',
        'inputType',
        'readOnly',
        'readOnlyCls',
        'validateOnBlur'
    ],

    init: function() {
        var me = this;

        me.clearListenersByEvent('flyout');
    }
});