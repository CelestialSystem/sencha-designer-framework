xds.component.Registry.addDefinition({
    override: "Ext.field.Email",
    typeAlias: "emailfield",

    "autoName": "MyEmailField",
    "toolbox": {
        "name": "Email Field",
        "iconCls": "icon-emailfield",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    init: function() {
        var me = this;
        me.on({
            setup: me.onSetup,
            transform: me.onTransform,
            scope: me
        });
    },

    onSetup: function() {
        this.setPlaceHolder();
    },

    onTransform: function(from, toType, snapshot) {
        this.setPlaceHolder();
    },

    setPlaceHolder: function() {
        this.setCfgValue('placeHolder', 'email@example.com');
    }
});
