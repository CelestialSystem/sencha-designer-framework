xds.component.Registry.addDefinition({
    "type": "Ext.ux.PreviewPlugin",
    "className": "Ext.ux.PreviewPlugin",
    "classAlias": "plugin.preview",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyPreviewPlugin",
    "cfgs": [
        {
            "name": "bodyField",
            "type": "string"
        },
        {
            "name": "previewExpanded",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
