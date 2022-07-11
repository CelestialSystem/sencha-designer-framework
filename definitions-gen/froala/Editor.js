xds.component.Registry.addDefinition({
    "type": "Ext.froala.Editor",
    "className": "Ext.froala.Editor",
    "classAlias": "widget.froalaeditor",
    "inherits": "Ext.Component",
    "autoName": "MyFroalaEditor",
    "mixin": [
        'Ext.froala.Mixin'
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.froala.FroalaEditor"
                },
                {
                    "name": "html",
                    "type": "string"
                }
            ]
        },
        {
            "name": "ready",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.froala.FroalaEditor"
                },
                {
                    "name": "FroalaEditor",
                    "type": "object"
                }
            ]
        }
    ]
});
