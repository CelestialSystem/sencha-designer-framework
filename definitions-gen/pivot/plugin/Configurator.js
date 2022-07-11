xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.Configurator",
    "className": "Ext.pivot.plugin.Configurator",
    "classAlias": "plugin.pivotconfigurator",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyConfigurator",
    "typeAlias": [
        "Mz.pivot.plugin.Configurator"
    ],
    "cfgs": [
        {
            "name": "collapsible",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "dock",
            "type": "string",
            "defaultValue": "right",
            "bindable": true
        },
        {
            "name": "fields",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "refreshDelay",
            "type": "number",
            "defaultValue": 300,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "applyconfigfieldsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "applypivotsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforeapplyconfigfieldsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforeapplypivotsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforeconfigchange",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforemoveconfigfield",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforeshowconfigfieldmenu",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforeshowconfigfieldsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "beforeshowpivotsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "configchange",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "hideconfigpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
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
            "name": "showconfigfieldmenu",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "showconfigfieldsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "showconfigpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
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
            "name": "showpivotsettings",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.pivot.plugin.configurator.Panel",
                    "optional": true
                },
                {
                    "name": "config",
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
