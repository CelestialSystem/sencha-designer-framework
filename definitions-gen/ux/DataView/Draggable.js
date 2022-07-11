xds.component.Registry.addDefinition({
    "type": "Ext.ux.DataView.Draggable",
    "className": "Ext.ux.DataView.Draggable",
    "inherits": "Ext.Base",
    "autoName": "MyDraggable",
    "cfgs": [
        {
            "name": "ddConfig",
            "type": "object"
        },
        {
            "name": "ghostCls",
            "type": "string",
            "defaultValue": "x-dataview-draggable-ghost"
        },
        {
            "name": "ghostConfig",
            "type": "string"
        },
        {
            "name": "ghostTpl",
            "type": "template",
            "defaultValue": [
                "<tpl for=\".\">",
                "{title}",
                "</tpl>"
            ],
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
