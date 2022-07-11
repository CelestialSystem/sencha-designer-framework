xds.component.Registry.addDefinition({
    override: "Ext.form.CheckboxGroup",
    typeAlias: 'checkboxgroup',

    toolbox: {
        name: 'Checkbox Group',
        iconCls: 'icon-checkbox-group',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    validChildTypes: ['checkboxfield', 'labelable'],

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

        var chkBoxes = me.createChild(['checkboxfield', 'checkboxfield']);
        chkBoxes[0].setCfgValue('fieldLabel', null);
        chkBoxes[1].setCfgValue('fieldLabel', null);
    }
});
