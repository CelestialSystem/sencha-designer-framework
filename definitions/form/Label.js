xds.component.Registry.addDefinition({
    override: "Ext.form.Label",
    typeAlias: 'label',

    toolbox: {
        name: 'Label',
        iconCls: 'icon-label',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    fullscreenAtTopLevel: false,

    ignoreCfgs: [
        // Component
        'autoEl',
        'autoScroll',
        'data',
        'tpl',
        'tplWriteMode'
    ],

    inlineEdit: [{
        cfg: 'text',
        textEl: 'label'
    }],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue('text', 'My Label');
    }
});