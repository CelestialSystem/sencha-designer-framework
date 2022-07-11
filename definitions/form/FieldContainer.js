xds.component.Registry.addDefinition({
    override: "Ext.form.FieldContainer",
    typeAlias: 'fieldcontainer',

    toolbox: {
        name: 'FieldContainer',
        iconCls: 'icon-fieldcontainer',
        category: 'Containers',
        groups: ['Forms','Views', 'Containers']
    },
    fullscreenAtTopLevel: false,

    ignoreCfgs: [
        'componentLayout'
    ],

    inlineEdit: [{
        cfg: 'fieldLabel',
        textEl: '.x-form-item-label'
    }],

    init: function() {
        this.ex('setup', this.onSetup, this);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent(),
            cfg = {
                fieldLabel: 'Label',
                height: 120
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
    }
});
