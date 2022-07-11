xds.component.Registry.addDefinition({
    override: "Ext.toolbar.TextItem",
    typeAlias: 'tbtext',

    toolbox: {
        name: 'Text Item',
        iconCls: 'icon-text-item',
        category: 'Toolbar',
        groups: ['Views']
    },

    ignoreCfgs: ['renderTpl'],

    inlineEdit: [{
        cfg: 'text',
        textEl: '.x-toolbar-text'
    }],

    cfgs: [{
        name: 'html',
        type: 'string',
        alternates: [{
            type: 'object'
        }]
    }],


    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue('text', 'My Text');
    }
});
