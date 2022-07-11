xds.component.Registry.addDefinition({
    "type": "Ext.chart.theme.Base",
    "className": "Ext.chart.theme.Base",
    "inherits": "Ext.chart.theme.BaseTheme",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "axis",
            "type": "object",
            "defaultValue": {
                "defaults": {
                    "label": {
                        "x": 0,
                        "y": 0,
                        "textBaseline": "middle",
                        "textAlign": "center",
                        "fontSize": "default",
                        "fontFamily": "default",
                        "fontWeight": "default",
                        "fillStyle": "black"
                    },
                    "title": {
                        "fillStyle": "black",
                        "fontSize": "default*1.23",
                        "fontFamily": "default",
                        "fontWeight": "default"
                    },
                    "style": {
                        "strokeStyle": "black"
                    },
                    "grid": {
                        "strokeStyle": "rgb(221, 221, 221)"
                    }
                },
                "top": {
                    "style": {
                        "textPadding": 5
                    }
                },
                "bottom": {
                    "style": {
                        "textPadding": 5
                    }
                }
            },
            "bindable": true
        },
        {
            "name": "baseColor",
            "type": "string",
            "bindable": true
        },
        {
            "name": "chart",
            "type": "object",
            "defaultValue": {
                "defaults": {
                    "captions": {
                        "title": {
                            "docked": "top",
                            "padding": 5,
                            "style": {
                                "textAlign": "center",
                                "fontFamily": "default",
                                "fontWeight": "500",
                                "fillStyle": "black",
                                "fontSize": "default*1.6"
                            }
                        },
                        "subtitle": {
                            "docked": "top",
                            "style": {
                                "textAlign": "center",
                                "fontFamily": "default",
                                "fontWeight": "normal",
                                "fillStyle": "black",
                                "fontSize": "default*1.3"
                            }
                        },
                        "credits": {
                            "docked": "bottom",
                            "padding": 5,
                            "style": {
                                "textAlign": "left",
                                "fontFamily": "default",
                                "fontWeight": "lighter",
                                "fillStyle": "black",
                                "fontSize": "default"
                            }
                        }
                    },
                    "background": "white"
                }
            },
            "bindable": true
        },
        {
            "name": "colors",
            "type": "array",
            "bindable": true
        },
        {
            "name": "gradients",
            "type": "object",
            "bindable": true
        },
        {
            "name": "legend",
            "type": "object",
            "defaultValue": {
                "label": {
                    "fontSize": 14,
                    "fontWeight": "default",
                    "fontFamily": "default",
                    "fillStyle": "black"
                },
                "border": {
                    "lineWidth": 1,
                    "radius": 4,
                    "fillStyle": "none",
                    "strokeStyle": "gray"
                },
                "background": "white"
            },
            "bindable": true
        },
        {
            "name": "series",
            "type": "object",
            "defaultValue": {
                "defaults": {
                    "label": {
                        "fillStyle": "black",
                        "strokeStyle": "none",
                        "fontFamily": "default",
                        "fontWeight": "default",
                        "fontSize": "default*1.077",
                        "textBaseline": "middle",
                        "textAlign": "center"
                    },
                    "labelOverflowPadding": 5
                }
            },
            "bindable": true
        },
        {
            "name": "sprites",
            "type": "object",
            "defaultValue": {
                "text": {
                    "fontSize": "default",
                    "fontWeight": "default",
                    "fontFamily": "default",
                    "fillStyle": "black"
                }
            },
            "bindable": true
        }
    ]
});
