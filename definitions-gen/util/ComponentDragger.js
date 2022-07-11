xds.component.Registry.addDefinition({
    "type": "Ext.util.ComponentDragger",
    "className": "Ext.util.ComponentDragger",
    "inherits": "Ext.dd.DragTracker",
    "autoName": "MyComponentDragger",
    "cfgs": [
        {
            "name": "constrain",
            "type": "boolean"
        },
        {
            "name": "constrainDelegate",
            "type": "boolean"
        },
        {
            "name": "delegate",
            "type": "string"
        }
    ]
});
