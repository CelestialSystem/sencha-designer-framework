xds.component.Registry.addDefinition({
    "type": "Ext.grid.HeaderContainer",
    "className": "Ext.grid.HeaderContainer",
    "classAlias": "widget.headercontainer",
    "inherits": "Ext.Container",
    "autoName": "MyHeaderContainer",
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "defaultColumnUI",
            "type": "object",
            "bindable": true
        }
    ]
});
