xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Form",
    "className": "Ext.pivot.plugin.configurator.Form",
    "classAlias": "widget.pivotconfigform",
    "inherits": "Ext.form.Panel",
    "autoName": "MyForm",
    "cfgs": [
        {
            "name": "controller",
            "type": "string",
            "defaultValue": "pivotconfigform",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "defaults",
            "type": "object",
            "defaultValue": {
                "xtype": "fieldset",
                "defaults": {
                    "labelAlign": "top"
                }
            },
            "bindable": true
        },
        {
            "name": "hideAnimation",
            "type": "string",
            "defaultValue": {
                "type": "slideOut",
                "duration": 250,
                "easing": "ease-in",
                "direction": "right"
            },
            "bindable": true
        },
        {
            "name": "listeners",
            "type": "object",
            "defaultValue": {
                "fielditemchange": "onFieldItemChanged"
            },
            "bindable": true
        },
        {
            "name": "showAnimation",
            "type": "string",
            "defaultValue": {
                "type": "slideIn",
                "duration": 250,
                "easing": "ease-out",
                "direction": "left"
            },
            "bindable": true
        },
        {
            "name": "viewModel",
            "type": "string",
            "defaultValue": {
                "stores": {
                    "sFormatters": {
                        "type": "pivotselect"
                    },
                    "sAggregators": {
                        "type": "pivotselect"
                    },
                    "sSorters": {
                        "type": "pivotselect"
                    },
                    "sFilters": {
                        "type": "pivotselect"
                    },
                    "sOperators": {
                        "type": "pivotselect"
                    },
                    "sTopOrder": {
                        "type": "pivotselect"
                    },
                    "sTopType": {
                        "type": "pivotselect"
                    },
                    "sDimensions": {
                        "type": "pivotselect"
                    },
                    "sAlign": {
                        "type": "pivotselect"
                    }
                },
                "data": {
                    "requiredMessage": null,
                    "labelFilterText": null,
                    "valueFilterText": null
                },
                "formulas": {
                    "filterType": {
                        "bind": {
                            "bindTo": "{form.filter.type}",
                            "deep": true
                        }
                    },
                    "filterOperator": {
                        "bind": {
                            "bindTo": "{form.filter.operator}",
                            "deep": true
                        }
                    },
                    "filterOperatorValue": {
                        "bind": "{filterCommon && !(filterOperator === \"between\" || filterOperator === \"not between\")}"
                    },
                    "filterOperatorBetween": {
                        "bind": "{filterCommon && (filterOperator === \"between\" || filterOperator === \"not between\")}"
                    },
                    "filterCommon": {
                        "bind": "{filterType === \"label\" || filterType === \"value\"}"
                    },
                    "filterLabel": {
                        "bind": "{filterType === \"label\"}"
                    },
                    "filterValue": {
                        "bind": "{filterType === \"value\"}"
                    },
                    "filterTop10": {
                        "bind": "{filterType === \"top10\"}"
                    }
                }
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ]
});
