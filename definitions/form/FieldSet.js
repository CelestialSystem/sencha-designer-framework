xds.component.Registry.addDefinition({
    override: "Ext.form.FieldSet",
    typeAlias: "fieldset",
    canvasAlias: "widget.xdfieldset",

    "toolbox": {
        "name": "FieldSet",
        "iconCls": "icon-fieldset",
        "category": "Containers",
        "groups": ['Forms', 'Containers','Views']
    },

    "fullscreenAtTopLevel": false,

    inlineEdit: [{
        cfg: 'title',
        textEl: '.x-form-fieldset-title > .x-innerhtml'
    }],


    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;
        if (!me.isCfgSet('title')) {
            me.setCfgValue('title', me.getName());
        }
        if (!me.hasChildren()) {
            me.createChild(['textfield', 'textfield']);
        }
    }

});
