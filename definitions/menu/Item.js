xds.component.Registry.addDefinition({
    override: "Ext.menu.Item",
    typeAlias: 'menuitem',

    toolbox: {
        name: 'Menu Item',
        iconCls: 'icon-menuitem',
        category: 'Menu',
        groups: ['Views', 'Menus']
    },
    autoName: 'MyMenuItem',

    validParentTypes: ['menu', 'grid'],
    validChildTypes: ['menu'],
    singleChildTypes: ['menu'],
    fullscreenAtTopLevel: false,

    ignoreCfgs: [
        'data',
        'html',
        'menu',
        'tpl',
        'tplWriteMode'
    ],
    cfgs: [{
        name: 'handler',
        merge: true,
        allowOnViewController: true
    }],

    inlineEdit: [{
        cfg: 'text',
        textEl: '.x-menu-item-text'
    }],

    init: function() {
        var me = this;

        me.on({
            addchild: me.onAddChild,
            removechild: me.onRemoveChild,
            setup: me.onSetup,
            scope: me
        });
        me.clearListenersByEvent('flyout');
    },

    onAddChild: function(child) {
        if (child.isType('menu')) {
            child.setReference('menu');
        }
    },

    onRemoveChild: function(child) {
        if (child.isType('menu')) {
            child.setReference();
        }
    },

    onSetup: function() {
        this.setCfgValue('text', 'Menu Item');
    }
});