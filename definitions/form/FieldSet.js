xds.component.Registry.addDefinition({
    override: "Ext.form.FieldSet",
    typeAlias: 'fieldset',

    toolbox: {
        name: 'FieldSet',
        iconCls: 'icon-fieldset',
        category: 'Containers',
        groups: ['Forms','Views']
    },
    fullscreenAtTopLevel: false,

    ignoreCfgs: [
        'autoEl',
        'componentLayout',
        'renderTpl'
    ],

    cfgs: [{
        name: 'layout',
        merge: true,
        editor: 'options',
        options: xds.component.Registry.getAllVisibleLayouts()
    }],

    inlineEdit: [{
        cfg: 'title',
        textEl: '.x-fieldset-header-text'
    }],

    init: function() {
        var me = this;

        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue('title', 'My Fields');
    }
});
