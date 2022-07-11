xds.component.Registry.addDefinition({
    "type": "Ext.mixin.FocusableContainer",
    "className": "Ext.mixin.FocusableContainer",
    "inherits": "Ext.Mixin",
    "autoName": "MyFocusableContainer",
    "cfgs": [
        {
            "name": "activeChildTabIndex",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "allowFocusingDisabledChildren",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "focusableContainer",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "inactiveChildTabIndex",
            "type": "number",
            "defaultValue": -1
        },
        {
            "name": "resetFocusPosition",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
