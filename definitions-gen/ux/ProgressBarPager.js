xds.component.Registry.addDefinition({
    "type": "Ext.ux.ProgressBarPager",
    "className": "Ext.ux.ProgressBarPager",
    "classAlias": "plugin.ux-progressbarpager",
    "inherits": "Ext.Base",
    "autoName": "MyProgressBarPager",
    "cfgs": [
        {
            "name": "defaultAnimCfg",
            "type": "object",
            "defaultValue": {
                "duration": 1000,
                "easing": "bounceOut"
            }
        },
        {
            "name": "defaultText",
            "type": "string",
            "defaultValue": "Loading..."
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": 225
        }
    ]
});
