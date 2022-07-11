xds.component.Registry.addDefinition({
    "type": "Ext.calendar.header.Base",
    "className": "Ext.calendar.header.Base",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.mixin.ConfigState"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "cellCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "compact",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "compactOptions",
            "type": "object",
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "bindable": true
        },
        {
            "name": "value",
            "type": "date",
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "bindable": true
        }
    ]
});
