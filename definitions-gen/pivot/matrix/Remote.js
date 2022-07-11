xds.component.Registry.addDefinition({
    "type": "Ext.pivot.matrix.Remote",
    "className": "Ext.pivot.matrix.Remote",
    "classAlias": "pivotmatrix.remote",
    "inherits": "Ext.pivot.matrix.Base",
    "autoName": "MyRemote",
    "typeAlias": [
        "Mz.aggregate.matrix.Remote"
    ],
    "cfgs": [
        {
            "name": "timeout",
            "type": "number",
            "defaultValue": 3000
        },
        {
            "name": "url",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "beforerequest",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Remote",
                    "optional": true
                },
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "requestexception",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Remote",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
