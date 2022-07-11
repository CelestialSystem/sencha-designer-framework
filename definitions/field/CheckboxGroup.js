xds.component.Registry.addDefinition({
    override: "Ext.field.CheckboxGroup",
    typeAlias: 'checkboxgroup',
    autoName: 'MyCheckboxGroup',

    toolbox: {
        name: 'Checkbox Group',
        iconCls: 'icon-checkbox-group',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    validChildTypes: ['checkboxfield'],

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

        var chkBoxes = me.createChild(['checkboxfield', 'checkboxfield']);
        chkBoxes[0].setCfgValue('label', 'Box Label');
        chkBoxes[1].setCfgValue('label', 'Box Label');
    }
});
