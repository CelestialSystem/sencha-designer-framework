xds.component.Registry.addDefinition({
    override: "Ext.field.Hidden",
    typeAlias: "hiddenfield",

    "canvasAlias": "widget.xdhiddenfield", //dtype defined in web/src/frameworks/touch24/dtypes/field/Hidden.js
    "autoName": "MyHiddenField",
    "toolbox": {
        "name": "Hidden Field",
        "iconCls": "icon-hiddenfield",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    ignoreCfgs: [
        "width",
        "height",
        "top",
        "right",
        "bottom",
        "left",
        "centered",
        "docked",
        "label",
        "labelAlign",
        "labelWidth",
        "clearIcon"
    ],

    init: function() {
        var me = this;
        me.on({
            resizehandles: me.onResizeHandles,
            scope: me
        });
    },

    onResizeHandles: function() {
        return false;
    }

});
