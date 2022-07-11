xds.component.Registry.addDefinition({
    "type": "Ext.ux.form.ItemSelector",
    "className": "Ext.ux.form.ItemSelector",
    "classAlias": "widget.itemselectorfield",
    "inherits": "Ext.ux.form.MultiSelect",
    "autoName": "MyItemSelector",
    "typeAlias": [
        "Ext.ux.ItemSelector"
    ],
    "cfgs": [
        {
            "name": "buttons",
            "type": "array",
            "defaultValue": [
                "top",
                "up",
                "add",
                "remove",
                "down",
                "bottom"
            ]
        },
        {
            "name": "buttonsText",
            "type": "object",
            "defaultValue": {
                "top": "Move to Top",
                "up": "Move Up",
                "add": "Add to Selected",
                "remove": "Remove from Selected",
                "down": "Move Down",
                "bottom": "Move to Bottom"
            }
        },
        {
            "name": "hideNavIcons",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
