xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Phone",
    "className": "Ext.data.validator.Phone",
    "classAlias": "data.validator.phone",
    "inherits": "Ext.data.validator.Format",
    "autoName": "MyPhone",
    "cfgs": [
        {
            "name": "matcher",
            "type": "regex",
            "defaultValue": "new RegExp('^ *' + // optional country code\n'(?:' + '\\\\+?' + // maybe + prefix\n'(\\\\d{1,3})' + // optional separator\n'[- .]?' + ')?' + // optional area code\n'(?:' + '(?:' + '(\\\\d{3})' + // without ()\n'|' + '\\\\((\\\\d{3})\\\\)' + // with ()\n')?' + // optional separator\n'[- .]?' + ')' + // CO code (3 digit prefix)\n'(?:' + '([2-9]\\\\d{2})' + // optional separator\n'[- .]?' + ')' + // line number (4 digits)\n'(\\\\d{4})' + // optional extension\n'(?: *(?:e?xt?) *(\\\\d*))?' + ' *$')",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid phone number",
            "bindable": true
        }
    ]
});
