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

    validParentTypes: ['menu'],
    validChildTypes: ['menu'],
    singleChildTypes: ['menu'],
    fullscreenAtTopLevel: false,

    obscureCfgs: ['activeCls', 'disabledCls'],
    ignoreCfgs: [
        'autoEl',
        'autoScroll',
        'data',
        'html',
        'menu',
        'renderTpl',
        'tpl',
        'tplWriteMode'
    ],
    cfgs: [{
        name: 'handler',
        merge: true,
        allowOnViewController: true
    },{
        name: 'tooltipType',
        merge: true,
        editor: 'options',
        options: ['qtip', 'title']
    },{
        name:'focusable',
        type: 'boolean'
    },{
        name: 'glyph',
        merge: true,
        allowHexadecimal: true // allow also numbers in hexadecimal formats
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