xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Toolable",
    "className": "Ext.mixin.Toolable",
    "inherits": "Ext.Base",
    "autoName": "MyToolable",
    "cfgs": [
        {
            "name": "defaultToolWeights",
            "type": "object",
            "defaultValue": {
                "toggle": 10,
                "gear": 20,
                "prev": 30,
                "next": 40,
                "left": 50,
                "right": 60,
                "down": 70,
                "up": 80,
                "refresh": 90,
                "disclosure": 100,
                "plus": 100,
                "minus": 110,
                "search": 120,
                "edit": 125,
                "save": 130,
                "print": 140,
                "expand": 150,
                "collapse": 160,
                "help": 170,
                "pin": 180,
                "unpin": 190,
                "minimize": 200,
                "maximize": 210,
                "restore": 220,
                "close": 230,
                "trash": 240
            },
            "bindable": true
        },
        {
            "name": "toolDefaults",
            "type": "object",
            "defaultValue": {
                "xtype": "tool",
                "zone": "end"
            },
            "bindable": true
        },
        {
            "name": "tools",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
