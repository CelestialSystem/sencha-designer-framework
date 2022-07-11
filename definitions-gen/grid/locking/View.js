xds.component.Registry.addDefinition({
    "type": "Ext.grid.locking.View",
    "className": "Ext.grid.locking.View",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable",
        "Ext.util.StoreHolder",
        "Ext.mixin.Focusable"
    ],
    "autoName": "MyView",
    "typeAlias": [
        "Ext.grid.LockingView"
    ]
});
