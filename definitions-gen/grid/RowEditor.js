xds.component.Registry.addDefinition({
    "type": "Ext.grid.RowEditor",
    "className": "Ext.grid.RowEditor",
    "classAlias": "widget.roweditor",
    "inherits": "Ext.form.Panel",
    "autoName": "MyRowEditor",
    "cfgs": [
        {
            "name": "cancelBtnText",
            "type": "string",
            "defaultValue": "Cancel"
        },
        {
            "name": "dirtyText",
            "type": "string",
            "defaultValue": "You need to commit or cancel your changes"
        },
        {
            "name": "errorsText",
            "type": "string",
            "defaultValue": "Errors"
        },
        {
            "name": "removeUnmodified",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "saveBtnText",
            "type": "string",
            "defaultValue": "Update"
        }
    ]
});
