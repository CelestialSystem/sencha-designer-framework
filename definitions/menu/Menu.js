xds.component.Registry.addDefinition({
    override: "Ext.menu.Menu",
    typeAlias: 'menu',

    toolbox: {
        name: 'Menu',
        iconCls: 'icon-toolbox-menu',
        category: 'Menu',
        groups: ['Views', 'Menus', 'Containers']
    },
    transformGroup: null,
    fullscreenAtTopLevel: false,

    init: function() {
        var me = this;

        me.clearListenersByEvent('flyout');
        me.ex('setup', me.onSetup, me);
        me.on({
            add: me.onAdd,
            remove: me.onRemove,
            beforerestore: me.onBeforeRestore,
            canvasconfig: me.onCanvasConfig,
            validchild: me.onValidChild,
            linkedinstanceadd: me.onLinkedInstanceAdd,
            scope: me
        });
    },

    onValidChild: function(child) {
        if (child.isType('menu')) {
            return false;
        } 
    },

    onAdd: function(parent) {
        this.setupMenu(this, parent);
    },

    onLinkedInstanceAdd: function(instance, parent) {
        this.setupMenu(instance, parent);
    },

    setupMenu: function(instance, parent) {
        if (parent && (parent.isType('button') || parent.isType('menuitem'))) {
            instance.setReference('menu');
        } else if (parent && parent.isType('grid')) {
            instance.setReference('columnMenu');
        } else if (parent && !instance.isCfgSet('floated')) {
            instance.setCfgValue('floated', false);
        }
    },

    onBeforeRestore: function(parent) {
        var me = this;

        if (parent && (parent.isType('button') || parent.isType('menuitem'))) {
            me.setReference('menu');
        }
    },

    onRemove: function(parent) {
        var me = this;

        if (parent && parent.isType('button')) {
            me.setReference();
        }
    },

    onSetup: function() {
        var me = this;

        me.setCfgValue('width', 120);

        // Note: before we were creating the child and then setting the text to Menu Item + i.  By moving the config
        // value into the createChild the config change was ignored by the canvas as the new childs parents wasn't set yet
        // so of course it wasn't the canvas' current top instance.
        for (var i = 1; i <= 3; i++) {
            me.createChild({
                type: me.childtype || 'menuitem',
                data: {
                    text: 'Menu Item ' + i
                }
            });
        }
    },

    onCanvasConfig: function(config) {
        // Force the menu to be visible when rendered as top-level
        if (this === xds.canvas.topInstance) {
            config.floated = false;
            config.hidden = false;
        }
        return config;
    }
});
