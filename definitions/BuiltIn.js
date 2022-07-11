Ext4.ns('xds');
if (!xds.builtInSnapshots) {
    xds.builtInSnapshots = {};
}

xds.builtInSnapshots = {
    // needed for build scripts
    // type: 'builtin'

    xdsAreaChart: {
        "xdsVersion": "6.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-area-chart",
        "internals": {
            "type": "Ext.chart.CartesianChart",
            "autoName": "MyAreaChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Category",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "x"
                        ],
                        "grid": null,
                        "title": null
                    }
                },
                {
                    "type": "Ext.chart.axis.Numeric",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "position": "left",
                        "fields": [
                            "y1",
                            "y2",
                            "y3"
                        ],
                        "grid": [
                            "{",
                            "    odd: {",
                            "        fill: '#e8e8e8'",
                            "    }",
                            "}"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.series.Area",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "xField": "x",
                        "yField": [
                            "y1",
                            "y2",
                            "y3"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.interactions.PanZoom",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                    }
                }
            ]
        },
        "id":"senchaAreaChart",
        "name":"Area Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsBarChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-bar-chart",
        "internals": {
            "type": "Ext.chart.CartesianChart",
            "autoName": "MyBarChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Category",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "x"
                        ],
                        "grid": null
                    }
                },
                {
                    "type": "Ext.chart.axis.Numeric",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "position": "left",
                        "fields": [
                            "y1",
                            "y2",
                            "y3"
                        ],
                        "grid": [
                            "{",
                            "    odd: {",
                            "        fill: '#e8e8e8'",
                            "    }",
                            "}"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.series.Bar",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "xField": "x",
                        "yField": [
                            "y1",
                            "y2",
                            "y3"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.interactions.PanZoom",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                    }
                }
            ]
        },
        "id":"senchaBarChart",
        "name":"Bar Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsCandlestickChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-candlestick-chart",
        "internals": {
            "type": "Ext.chart.CartesianChart",
            "autoName": "MyCandlestickChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ],
                "innerPadding": [
                    "{\"top\":0,\"left\":10,\"right\":10,\"bottom\":0}"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Time",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "date"
                        ],
                        "position": "bottom"
                    }
                },
                {
                    "type": "Ext.chart.axis.Numeric",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "position": "left",
                        "fields": [
                            "open",
                            "low",
                            "high",
                            "close"
                        ],
                        "grid": [
                            "{",
                            "    odd: {",
                            "        fill: '#e8e8e8'",
                            "    }",
                            "}"
                        ],
                        "title": null
                    }
                },
                {
                    "type": "Ext.chart.series.CandleStick",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "style": [
                            "{",
                            "    barWidth: 7,",
                            "    dropStyle: {",
                            "        fill: 'rgb(237,123,43)',",
                            "        stroke: 'rgb(237,123,43)'",
                            "    },",
                            "    raiseStyle: {",
                            "        fill: 'rgb(55,153,19)',",
                            "        stroke: 'rgb(55,153,19)'",
                            "    }",
                            "}"
                        ],
                        "xField": "date",
                        "yField": null,
                        "closeField": "close",
                        "highField": "high",
                        "lowField": "low",
                        "openField": "open"
                    }
                },
                {
                    "type": "Ext.chart.interactions.PanZoom",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                    }
                }
            ]
        },
        "id":"senchaCandlestickChart",
        "name":"Candlestick Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsColumnChart: {
        "xdsVersion":"4.0.0",
        "frameworkVersion":"modern76",
        "iconCls": "icon-column-chart",
        "className": "Ext.chart.Column",
        "internals":
        {
            "type": "Ext.chart.CartesianChart",
            "autoName": "ColumnChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "snapToGrid": 10,
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "animate": "true",
                "insetPadding": 20
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Category",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "snapToGrid": 10,
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "x"
                        ],
                        "position": "bottom",
                        "title": "Category Axis"
                    }
                },
                {
                    "type": "Ext.chart.axis.Numeric",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "snapToGrid": 10,
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "y"
                        ],
                        "position": "left",
                        "title": "Numeric Axis"
                    }
                },
                {
                    "type": "Ext.chart.series.Bar",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "snapToGrid": 10,
                    "codeClass": null,
                    "userConfig": {
                        "xField": "x",
                        "yField": [
                            "y"
                        ]
                    }
                }
            ]
        },
        "id":"senchaColumnChart",
        "name":"Column Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xds3dColumnChart: {
        "xdsVersion":"4.0.0",
        "frameworkVersion":"modern76",
        "iconCls": "icon-column-chart",
        "className": "Ext.chart.Column3D",
        "internals":
        {
            "type": "Ext.chart.CartesianChart",
            "autoName": "ColumnChart3D",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "snapToGrid": 10,
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "animate": "true",
                "insetPadding": 20
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Category3D",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "snapToGrid": 10,
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "x"
                        ],
                        "position": "bottom",
                        "title": "3D Category Axis"
                    }
                },
                {
                    "type": "Ext.chart.axis.Numeric3D",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "snapToGrid": 10,
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "y"
                        ],
                        "position": "left",
                        "title": "3D Numeric Axis"
                    }
                },
                {
                    "type": "Ext.chart.series.Bar3D",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "snapToGrid": 10,
                    "codeClass": null,
                    "userConfig": {
                        "xField": "x",
                        "yField": [
                            "y"
                        ]
                    }
                }
            ]
        },
        "id":"senchaColumnChart3D",
        "name":"Column Chart 3D",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsGaugeChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-gauge-chart",
        "internals": {
            "type": "Ext.chart.SpaceFillingChart",
            "autoName": "MyGaugeChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.series.Gauge",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "angleField": "y"
                    }
                }
            ]
        },
        "id":"senchaGaugeChart",
        "name":"Gauge Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsLineChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-line-chart",
        "internals": {
            "type": "Ext.chart.CartesianChart",
            "autoName": "MyLineChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Category",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "x"
                        ],
                        "grid": null,
                        "title": null
                    }
                },
                {
                    "type": "Ext.chart.axis.Numeric",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "position": "left",
                        "fields": [
                            "y1",
                            "y2"
                        ],
                        "grid": [
                            "{",
                            "    odd: {",
                            "        fill: '#e8e8e8'",
                            "    }",
                            "}"
                        ],
                        "title": null
                    }
                },
                {
                    "type": "Ext.chart.series.Line",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "xField": "x",
                        "yField": "y1",
                        "colors": [
                            "[\"rgba(0,200,0,0.3)\"]"
                        ],
                        "style": [
                            "{",
                            "    smooth: true,",
                            "    stroke: 'rgb(0,200,0)',",
                            "}"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.series.Line",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "xField": "x",
                        "yField": "y2",
                        "colors": [
                            "[\"transparent\"]"
                        ],
                        "style": [
                            "{",
                            "    stroke: 'rgb(0,0,200)',",
                            "    lineWidth: 2",
                            "}"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.interactions.PanZoom",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                    }
                }
            ]
        },
        "id":"senchaLineChart",
        "name":"Line Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsPieChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-pie-chart",
        "internals": {
            "type": "Ext.chart.PolarChart",
            "autoName": "MyPieChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.series.Pie",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "angleField": "y",
                        "label": [
                            "{'field':'x','display':'rotate','font':'12px Arial'}"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.interactions.Rotate",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                    }
                }
            ]
        },
        "id":"senchaPieChart",
        "name":"Pie Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsPie3dChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-pie3d-chart",
        "internals": {
            "type": "Ext.chart.PolarChart",
            "autoName": "MyPieChart3D",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.series.Pie3D",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "angleField": "y",
                        "label": [
                            "{'field':'x','display':'rotate','font':'12px Arial'}"
                        ]
                    }
                },
                {
                    "type": "Ext.chart.interactions.Rotate",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                    }
                }
            ]
        },
        "id":"senchaPie3dChart",
        "name":"Pie Chart 3D",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },

    xdsRadarChart: {
        "xdsVersion": "4.0.0",
        "frameworkVersion": "modern76",
        "iconCls": "icon-radar-chart",
        "internals": {
            "type": "Ext.chart.PolarChart",
            "autoName": "MyRadarChart",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "height": 250,
                "width": 400,
                "designer|userClassName": "RadarChart",
                "designer|userAlias": "radarchart",
                "colors": [
                    "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]"
                ]
            },
            "cn": [
                {
                    "type": "Ext.chart.axis.Numeric",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "fields": [
                            "y1",
                            "y2"
                        ],
                        "grid": [
                            "true"
                        ],
                        "increment": null,
                        "length": null,
                        "majorTickSteps": null,
                        "maximum": null,
                        "position": "radial"
                    }
                },
                {
                    "type": "Ext.chart.axis.Category",
                    "reference": {
                        "name": "axes",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "designer|userClassName": "MyCategoryAxis4",
                        "fields": [
                            "x"
                        ],
                        "grid": [
                            "true"
                        ],
                        "increment": null,
                        "length": null,
                        "majorTickSteps": null,
                        "minorTickSteps": null,
                        "position": "angular"
                    }
                },
                {
                    "type": "Ext.chart.series.Radar",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "angleField": "x",
                        "radiusField": "y1"
                    }
                },
                {
                    "type": "Ext.chart.series.Radar",
                    "reference": {
                        "name": "series",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "angleField": "x",
                        "radiusField": "y2"
                    }
                },
                {
                    "type": "Ext.chart.interactions.Rotate",
                    "reference": {
                        "name": "interactions",
                        "type": "array"
                    },
                    "codeClass": null,
                    "userConfig": {
                        "designer|userClassName": "MyRotateInteraction1"
                    }
                }
            ]
        },
        "id":"senchaRadarChart",
        "name":"Radar Chart",
        "category":
        {
            "id":"xdcCharts",
            "name":"Charts"
        },
        "groups": ["Charts"]
    },
};