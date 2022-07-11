xds.component.Registry.addDefinition({
    "type": "Ext.data.ResultSet",
    "className": "Ext.data.ResultSet",
    "inherits": "Ext.Base",
    "autoName": "MyResultSet",
    "cfgs": [
        {
            "name": "count",
            "type": "number",
            "bindable": true
        },
        {
            "name": "groupData",
            "type": "array",
            "bindable": true
        },
        {
            "name": "loaded",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "bindable": true
        },
        {
            "name": "metadata",
            "type": "object",
            "bindable": true
        },
        {
            "name": "records",
            "type": "array",
            "bindable": true
        },
        {
            "name": "remoteTotal",
            "type": "number",
            "bindable": true
        },
        {
            "name": "success",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "summaryData",
            "type": "object",
            "bindable": true
        },
        {
            "name": "total",
            "type": "number",
            "bindable": true
        }
    ]
});
