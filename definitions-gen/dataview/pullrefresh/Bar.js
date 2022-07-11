xds.component.Registry.addDefinition({
    "type": "Ext.dataview.pullrefresh.Bar",
    "className": "Ext.dataview.pullrefresh.Bar",
    "classAlias": "widget.pullrefreshbar",
    "inherits": "Ext.dataview.pullrefresh.Item",
    "autoName": "MyBar",
    "cfgs": [
        {
            "name": "lastUpdatedDateFormat",
            "type": "string",
            "defaultValue": "m/d/Y h:iA",
            "bindable": true
        },
        {
            "name": "lastUpdatedText",
            "type": "string",
            "defaultValue": "Last Updated:\\xa0",
            "bindable": true
        },
        {
            "name": "loadedText",
            "type": "string",
            "defaultValue": "Loaded.",
            "bindable": true
        },
        {
            "name": "loadingText",
            "type": "string",
            "defaultValue": "Loading...",
            "bindable": true
        },
        {
            "name": "mode",
            "type": "string",
            "editor": "options",
            "options": [
                "message",
                "spinner"
            ],
            "defaultValue": "message",
            "bindable": true
        },
        {
            "name": "pullText",
            "type": "string",
            "defaultValue": "Pull down to refresh...",
            "bindable": true
        },
        {
            "name": "releaseText",
            "type": "string",
            "defaultValue": "Release to refresh...",
            "bindable": true
        }
    ]
});
