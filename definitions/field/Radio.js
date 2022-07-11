xds.component.Registry.addDefinition({
    override: "Ext.field.Radio",
    typeAlias: "radiofield",

    "autoName": "MyRadioButton",
    "toolbox": {
        "name": "Radio Button",
        "iconCls": "icon-radio",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    init: function() {
        this.on('setup', this.onSetup, this);
    },

    onSetup: function() {
        // Ensure default name is set for radio buttons
        // Otherwise and error will be thrown on select
        if (!this.getCfgValue('name')) {
            var name = this.getCfgValue('label') || this.autoName;
            this.setCfgValue('name', this.normalizeForFieldName(name));
        }
    },

    /**
     * For radios, make existing names from any other radios available as options
     */
    getFieldNameOptions: function() {
        var top = this.up('.formpanel') || this.top(),
            radios = top.query('.radiofield'),
            ExtArray = Ext4.Array,
            radioNames = radios.map(function(radio) {
                return radio.getCfgValue('name');
            });

        radioNames.push(this.normalizeForFieldName(this.getCfgValue('label') || this.getName()));

        return ExtArray.clean(ExtArray.unique(radioNames));
    }
});
