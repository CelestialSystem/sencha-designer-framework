xds.component.Registry.addDefinition({
    override: "Ext.form.RadioGroup",
    typeAlias: 'radiogroup',

    toolbox: {
        name: 'Radio Group',
        iconCls: 'icon-radio-group',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    validChildTypes: ['radiofield', 'labelable'],

    ignoreCfgs: [
        'defaultType',
        'items'
    ],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent(),
            cfg = {
                fieldLabel: 'Label'
            },
            defaultWidth = 400;

        if (parent) {
            var layout = parent.getCfgValue('layout') || parent.getCfgDefaultValue('layout');
            if ((layout !== 'form' && layout !== 'anchor') && !me.isCfgSet('width')) {
                cfg.width = parent.getCfgValue('width') || defaultWidth;
            }
        } else {
            cfg.width = defaultWidth;
        }
        me.setCfgValue(cfg);

        var radios = me.createChild(['radiofield', 'radiofield']);
        radios[0].setCfgValue('fieldLabel', null);
        radios[1].setCfgValue('fieldLabel', null);
    }
});
