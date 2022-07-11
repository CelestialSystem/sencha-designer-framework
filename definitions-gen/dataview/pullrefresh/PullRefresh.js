xds.component.Registry.addDefinition({
    "type": "Ext.dataview.pullrefresh.PullRefresh",
    "className": "Ext.dataview.pullrefresh.PullRefresh",
    "classAlias": "plugin.pullrefresh",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.mixin.ConfigProxy"
    ],
    "autoName": "MyPullRefresh",
    "typeAlias": [
        "Ext.plugin.PullRefresh"
    ],
    "cfgs": [
        {
            "name": "autoSnapBack",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "lastUpdatedDateFormat",
            "type": "string"
        },
        {
            "name": "lastUpdatedText",
            "type": "string"
        },
        {
            "name": "loadedText",
            "type": "string"
        },
        {
            "name": "loadingText",
            "type": "string"
        },
        {
            "name": "mergeData",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "overlay",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "pullText",
            "type": "string"
        },
        {
            "name": "releaseText",
            "type": "string"
        },
        {
            "name": "snappingAnimationDuration",
            "type": "number",
            "defaultValue": 300,
            "bindable": true
        }
    ]
});
