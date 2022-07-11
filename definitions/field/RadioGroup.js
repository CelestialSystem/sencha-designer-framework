xds.component.Registry.addDefinition({
    override: "Ext.field.RadioGroup",
    typeAlias: 'radiogroup',

    toolbox: {
        name: 'Radio Group',
        iconCls: 'icon-radio-group',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    validChildTypes: ['radiofield'],

    obscureCfgs: ['fieldBodyCls'],
    ignoreCfgs: [
        'defaultType',
        'items',
        'name'
    ],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent(),
            cfg = {
                label: 'Label'
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
        radios[0].setCfgValue('label', 'Box Label');
        radios[1].setCfgValue('label', 'Box Label');
    }
});
