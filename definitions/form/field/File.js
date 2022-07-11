xds.component.Registry.addDefinition({
    override: "Ext.form.field.File",
    typeAlias: 'filefield',

    toolbox: {
        name: 'File Upload',
        iconCls: 'icon-fileupload',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    validChildTypes: ['filebutton'],
    singleChildTypes: ['filebutton'],
    autoName: 'MyFileUpload',

    obscureCfgs: ['fieldBodyCls'],
    ignoreCfgs: [
        'componentLayout',
        'inputType',
        'readOnly',
        'triggers' //doesn't allow arbitrary triggers, in favor of buttonConfig
    ],

    cfgs: [{
        name: 'buttonConfig',
        merge: false,
        type: 'refgroup',
        max: 1,
        refSelector: 'filebutton',
        createTypes: ['filebutton']
    }],


    init: function() {
        var me = this;

        me.on({
            addchild: me.onAddChild,
            removechild: me.onRemoveChild,
            scope: me
        });
    },

    onAddChild: function(child) {
        if (child.isType('Ext.form.field.FileButton')) {
            child.setReference('buttonConfig');
        }
    },

    onRemoveChild: function(child) {
        if (child.isType('Ext.form.field.FileButton')) {
            child.setReference();
        }
    }
});