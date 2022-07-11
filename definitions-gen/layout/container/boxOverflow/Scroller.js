xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.boxOverflow.Scroller",
    "className": "Ext.layout.container.boxOverflow.Scroller",
    "classAlias": "box.overflow.scroller",
    "inherits": "Ext.layout.container.boxOverflow.None",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyScroller",
    "typeAlias": [
        "Ext.layout.boxOverflow.Scroller"
    ],
    "cfgs": [
        {
            "name": "animateScroll",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scrollDuration",
            "type": "number",
            "defaultValue": 400
        },
        {
            "name": "scrollIncrement",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "scrollRepeatInterval",
            "type": "number",
            "defaultValue": 60
        },
        {
            "name": "wheelIncrement",
            "type": "number",
            "defaultValue": 10
        }
    ],
    "eventDefs": [
        {
            "name": "scroll",
            "params": [
                {
                    "name": "scroller",
                    "type": "Ext.layout.container.boxOverflow.Scroller",
                    "optional": true
                },
                {
                    "name": "newPosition",
                    "type": "Number",
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
