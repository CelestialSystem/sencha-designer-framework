xds.component.Registry.addDefinition({
    override: "Ext.field.Url",
    typeAlias: "urlfield",

    "autoName": "MyUrlField",
    "toolbox": {
        "name": "URL Field",
        "iconCls": "icon-urlfield",
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
        this.setCfgValue('placeHolder', 'http://example.com');
    }
});
