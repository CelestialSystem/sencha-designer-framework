xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.RowEditing",
    "className": "Ext.grid.plugin.RowEditing",
    "classAlias": "plugin.rowediting",
    "inherits": "Ext.grid.plugin.Editing",
    "autoName": "MyRowEditing",
    "cfgs": [
        {
            "name": "autoCancel",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoUpdate",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "clicksToMoveEditor",
            "type": "number"
        },
        {
            "name": "errorSummary",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "formAriaLabel",
            "type": "string",
            "defaultValue": "Editing row {0}"
        },
        {
            "name": "formAriaLabelRowBase",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "removeUnmodified",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
