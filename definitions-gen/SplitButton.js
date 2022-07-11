xds.component.Registry.addDefinition({
    "type": "Ext.SplitButton",
    "className": "Ext.SplitButton",
    "classAlias": "widget.splitbutton",
    "inherits": "Ext.Button",
    "autoName": "MySplitButton",
    "cfgs": [
        {
            "name": "arrowHandler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "button",
                    "type": "Ext.SplitButton"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "arrowclick",
            "params": [
                {
                    "name": "splitbutton",
                    "type": "Ext.SplitButton",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Event",
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
