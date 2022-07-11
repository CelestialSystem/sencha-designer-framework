xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.AbstractPanel",
    "className": "Ext.calendar.panel.AbstractPanel",
    "inherits": "Ext.Panel",
    "autoName": "MyAbstractPanel",
    "cfgs": [
        {
            "name": "menuButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "iconCls": "x-fa fa-bars"
            },
            "bindable": true
        },
        {
            "name": "sheet",
            "type": "object",
            "defaultValue": {
                "xtype": "sheet",
                "reference": "sheet",
                "cls": "x-calendar-panel-sheet",
                "centered": false,
                "enter": "left",
                "exit": "left",
                "hideOnMaskTap": true,
                "stretchY": true,
                "ui": "light",
                "header": {
                    "border": false,
                    "title": "Calendars"
                }
            },
            "bindable": true
        }
    ]
});
