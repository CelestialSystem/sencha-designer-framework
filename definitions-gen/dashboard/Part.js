xds.component.Registry.addDefinition({
    "type": "Ext.dashboard.Part",
    "className": "Ext.dashboard.Part",
    "classAlias": "part.part",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable",
        "Ext.mixin.Identifiable"
    ],
    "autoName": "MyPart",
    "cfgs": [
        {
            "name": "viewTemplate",
            "type": "object",
            "defaultValue": {
                "collapsed": "{collapsed}",
                "columnIndex": "{columnIndex}",
                "id": "{id}",
                "title": "{title}",
                "height": "{height}"
            },
            "bindable": true
        }
    ]
});
