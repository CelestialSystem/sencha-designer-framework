xds.component.Registry.addDefinition({
    override: "Ext.form.field.Date",
    typeAlias: 'datefield',

    toolbox: {
        name: 'Date Field',
        iconCls: 'icon-datefield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyDateField',

    obscureCfgs: ['disabledDates', 'triggerCls'],
    ignoreCfgs: [
        'inputType'
    ],
    cfgs: [{
        name: 'maxValue',
        merge: false,
        type: 'date',
        encodeType: 'string',
        formatter: function(date) {
            return Ext4.Date.format(date, this.owner.getCfgValueOrDefault('format'));
        },
        alternates: [{
            type: 'object',
            encodeType: 'raw'
        }]
    }, {
        name: 'minValue',
        merge: false,
        type: 'date',
        encodeType: 'string',
        formatter: function(date) {
            return Ext4.Date.format(date, this.owner.getCfgValueOrDefault('format'));
        },
        alternates: [{
            type: 'object',
            encodeType: 'raw'
        }]
    }, {
        name: 'value',
        type: 'date',
        encodeType: 'string',
        formatter: function(date) {
            return Ext4.Date.format(date, this.owner.getCfgValueOrDefault('format'));
        },
        alternates: [{
            type: 'object',
            encodeType: 'raw'
        }]
    }],

    init: function() {
        this.ex('transform', this.onTransform, this);
    },

    // on transform TO a date field
    onTransform: function(from, toType, snapshot) {

        // Uses Date object for value, attempt to convert value
        var value = from.getCfgValue("value") || '',
            toDate = new Date(Date.parse(value.toString()));
        if (toDate.toString() == "Invalid Date") {
            this.setCfgValue("value", undefined);
        }
        else {
            this.setCfgValue("value", toDate);
        }

    }

});