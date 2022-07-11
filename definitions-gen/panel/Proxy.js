xds.component.Registry.addDefinition({
    "type": "Ext.panel.Proxy",
    "className": "Ext.panel.Proxy",
    "inherits": "Ext.Base",
    "autoName": "MyProxy",
    "typeAlias": [
        "Ext.dd.PanelProxy"
    ],
    "cfgs": [
        {
            "name": "insertProxy",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "moveOnDrag",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
