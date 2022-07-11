xds.component.Registry.addDefinition({
    "type": "Ext.state.CookieProvider",
    "className": "Ext.state.CookieProvider",
    "inherits": "Ext.state.Provider",
    "autoName": "MyCookieProvider",
    "cfgs": [
        {
            "name": "domain",
            "type": "string"
        },
        {
            "name": "expires",
            "type": "date"
        },
        {
            "name": "path",
            "type": "string"
        },
        {
            "name": "secure",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
