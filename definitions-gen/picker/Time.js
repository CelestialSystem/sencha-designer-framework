xds.component.Registry.addDefinition({
    "type": "Ext.picker.Time",
    "className": "Ext.picker.Time",
    "classAlias": "widget.timepicker",
    "inherits": "Ext.view.BoundList",
    "autoName": "MyTime",
    "cfgs": [
        {
            "name": "format",
            "type": "string"
        },
        {
            "name": "increment",
            "type": "number",
            "defaultValue": 15
        },
        {
            "name": "maxValue",
            "type": "date",
            "bindable": true
        },
        {
            "name": "minValue",
            "type": "date",
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "defaultValue": true,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
