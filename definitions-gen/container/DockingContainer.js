xds.component.Registry.addDefinition({
    "type": "Ext.container.DockingContainer",
    "className": "Ext.container.DockingContainer",
    "inherits": "Ext.Base",
    "autoName": "MyDockingContainer",
    "cfgs": [
        {
            "name": "defaultDockWeights",
            "type": "object",
            "defaultValue": {
                "top": {
                    "render": 1,
                    "visual": 1
                },
                "left": {
                    "render": 3,
                    "visual": 5
                },
                "right": {
                    "render": 5,
                    "visual": 7
                },
                "bottom": {
                    "render": 7,
                    "visual": 3
                }
            }
        }
    ],
    "eventDefs": [
        {
            "name": "dockedadd",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dockedremove",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
