xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.Rotate",
    "className": "Ext.chart.interactions.Rotate",
    "classAlias": "interaction.rotate",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyRotate",
    "eventDefs": [
        {
            "name": "rotate",
            "params": [
                {
                    "name": "rotate",
                    "type": "Ext.chart.interactions.Rotate",
                    "optional": true
                },
                {
                    "name": "angle",
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
            "name": "rotateend",
            "params": [
                {
                    "name": "rotate",
                    "type": "Ext.chart.interactions.Rotate",
                    "optional": true
                },
                {
                    "name": "angle",
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
            "name": "rotatestart",
            "params": [
                {
                    "name": "rotate",
                    "type": "Ext.chart.interactions.Rotate",
                    "optional": true
                },
                {
                    "name": "angle",
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
