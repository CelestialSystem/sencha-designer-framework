xds.component.Registry.addDefinition({
    "type": "Ext.Audio",
    "className": "Ext.Audio",
    "classAlias": "widget.audio",
    "inherits": "Ext.Media",
    "autoName": "MyAudio",
    "cfgs": [
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-audio",
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        }
    ]
});
