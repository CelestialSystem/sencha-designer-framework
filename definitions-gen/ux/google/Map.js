xds.component.Registry.addDefinition({
    "type": "Ext.ux.google.Map",
    "className": "Ext.ux.google.Map",
    "classAlias": "widget.map",
    "inherits": "Ext.Container",
    "mixin": [
        "Ext.mixin.Mashup"
    ],
    "autoName": "MyMap",
    "typeAlias": [
        "Ext.Map"
    ],
    "cfgs": [
        {
            "name": "geo",
            "type": "object",
            "bindable": true
        },
        {
            "name": "map",
            "type": "object",
            "bindable": true
        },
        {
            "name": "mapListeners",
            "type": "object",
            "bindable": true
        },
        {
            "name": "mapOptions",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "markers",
            "type": "object",
            "bindable": true
        },
        {
            "name": "markerTemplate",
            "type": "object",
            "defaultValue": {
                "title": "{title}",
                "position": "{position}",
                "animation": "{animation}",
                "clickable": "{clickable}",
                "draggable": "{draggable}",
                "visible": "{visible}"
            },
            "bindable": true
        },
        {
            "name": "useCurrentLocation",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "centerchange",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "map",
                    "type": "google.maps.Map",
                    "optional": true
                },
                {
                    "name": "center",
                    "type": "google.maps.LatLng",
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
            "name": "maprender",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "map",
                    "type": "google.maps.Map",
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
            "name": "markerclick",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markerdblclick",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markerdrag",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markerdragend",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markerdragstart",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markermousedown",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markermouseout",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markermouseover",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markermouseup",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "markerrightclick",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "typechange",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "map",
                    "type": "google.maps.Map",
                    "optional": true
                },
                {
                    "name": "mapType",
                    "type": "Number",
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
            "name": "zoomchange",
            "params": [
                {
                    "name": "map",
                    "type": "Ext.ux.google.Map",
                    "optional": true
                },
                {
                    "name": "map",
                    "type": "google.maps.Map",
                    "optional": true
                },
                {
                    "name": "zoomLevel",
                    "type": "Number",
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
