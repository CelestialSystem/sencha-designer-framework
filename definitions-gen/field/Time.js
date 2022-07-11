xds.component.Registry.addDefinition({
    "type": "Ext.field.Time",
    "className": "Ext.field.Time",
    "classAlias": "widget.timefield",
    "inherits": "Ext.field.Picker",
    "autoName": "MyTime",
    "cfgs": [
        {
            "name": "altFormats",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H|gi a|hi a|giA|hiA|gi A|hi A",
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "bindable": true
        }
    ]
});
