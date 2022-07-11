xds.component.Registry.addDefinition({
    "type": "Ext.pivot.matrix.Local",
    "className": "Ext.pivot.matrix.Local",
    "classAlias": "pivotmatrix.local",
    "inherits": "Ext.pivot.matrix.Base",
    "autoName": "MyLocal",
    "typeAlias": [
        "Mz.aggregate.matrix.Local"
    ],
    "cfgs": [
        {
            "name": "recordsPerJob",
            "type": "number",
            "defaultValue": 1000
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "timeBetweenJobs",
            "type": "number",
            "defaultValue": 2
        }
    ]
});
