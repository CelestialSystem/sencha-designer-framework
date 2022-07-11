xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Pie",
    "className": "Ext.sparkline.Pie",
    "classAlias": "widget.sparklinepie",
    "inherits": "Ext.sparkline.Base",
    "autoName": "MyPie",
    "cfgs": [
        {
            "name": "borderColor",
            "type": "string",
            "defaultValue": "#000",
            "bindable": true
        },
        {
            "name": "borderWidth",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "offset",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "sliceColors",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "#3366cc",
                "#dc3912",
                "#ff9900",
                "#109618",
                "#66aa00",
                "#dd4477",
                "#0099c6",
                "#990099"
            ],
            "bindable": true
        }
    ]
});
