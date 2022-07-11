xds.component.Registry.addDefinition({
    override: "Ext.dataview.DataView",
    typeAlias: "dataview",

    "canvasAlias": "widget.xddataview", //dtype defined in web/src/frameworks/touch24/dtypes/dataview/DataView.js

    "toolbox": {
        "name": "DataView",
        "iconCls": "icon-dataview",
        "category": "Views",
        "groups": ["Views"]
    }
});
