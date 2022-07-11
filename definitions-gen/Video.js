xds.component.Registry.addDefinition({
    "type": "Ext.Video",
    "className": "Ext.Video",
    "classAlias": "widget.video",
    "inherits": "Ext.Media",
    "autoName": "MyVideo",
    "cfgs": [
        {
            "name": "posterUrl",
            "type": "string",
            "bindable": true
        },
        {
            "name": "showPosterOnPause",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
