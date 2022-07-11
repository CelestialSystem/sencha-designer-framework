xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.BufferedRenderer",
    "className": "Ext.grid.plugin.BufferedRenderer",
    "classAlias": "plugin.bufferedrenderer",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyBufferedRenderer",
    "cfgs": [
        {
            "name": "leadingBufferZone",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "numFromEdge",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "scrollToLoadBuffer",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "synchronousRender",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "trailingBufferZone",
            "type": "number",
            "defaultValue": 10
        }
    ]
});
