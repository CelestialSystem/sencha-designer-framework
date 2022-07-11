xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Bullet",
    "className": "Ext.sparkline.Bullet",
    "classAlias": "widget.sparklinebullet",
    "inherits": "Ext.sparkline.Base",
    "autoName": "MyBullet",
    "cfgs": [
        {
            "name": "base",
            "type": "number",
            "bindable": true
        },
        {
            "name": "performanceColor",
            "type": "string",
            "defaultValue": "#33f",
            "bindable": true
        },
        {
            "name": "rangeColors",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "#d3dafe",
                "#a8b6ff",
                "#7f94ff"
            ],
            "bindable": true
        },
        {
            "name": "targetColor",
            "type": "string",
            "defaultValue": "#f33",
            "bindable": true
        },
        {
            "name": "targetWidth",
            "type": "number",
            "defaultValue": 3,
            "bindable": true
        }
    ]
});
