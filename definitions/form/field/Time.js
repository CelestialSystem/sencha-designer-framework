xds.component.Registry.addDefinition({
    override: "Ext.form.field.Time",
    typeAlias: 'timefield',

    toolbox: {
        name: 'Time Field',
        iconCls: 'icon-timefield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyTimeField',

    obscureCfgs: ['triggerCls'],
    ignoreCfgs: [
        'displayField',
        'inputType',
        'queryMode',
        'store',
        'valueField'
    ],

    cfgs: [{
        name: 'maxValue',
        merge: true,
        type: 'time',
        encodeType: 'string',
        formatter: function(date) {
            return Ext4.Date.format(date, this.owner.getCfgValueOrDefault('format'));
        }
    }, {
        name: 'minValue',
        merge: true,
        type: 'time',
        encodeType: 'string',
        formatter: function(date) {
            return Ext4.Date.format(date, this.owner.getCfgValueOrDefault('format'));
        }
    }, {
        name: 'format',
        merge: true,
        defaultValue: 'g:i A'
    }],

    init: function() {
        this.ex('transform', this.onTransform, this);
    },

    // on transform TO a time field
    onTransform: function(from, toType, snapshot) {

        // Check to see if incoming value is valid time, clear if not
        // Use temp time field to validate since it uses internal checks
        var value = from.getCfgValue("value"),
            timeField = Ext4.create('Ext.form.field.Time');
        timeField.setValue(value);
        if (!timeField.isValid()) {
            this.setCfgValue("value", undefined);
        }
        timeField.destroy();

    }

});