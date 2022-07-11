xds.component.Registry.addDefinition({
    override: "Ext.button.Cycle",
    typeAlias: 'cyclebutton',

    canvasAlias: 'widget.xdcyclebutton',
    toolbox: {
        name: 'Cycle Button',
        iconCls: 'icon-cyclebutton',
        category: 'Standard',
        groups: ['Buttons']
    },
    autoName: 'MyCycleButton',

    cfgs: [{
        name: 'changeHandler',
        merge: true,
        params: [{
            name: 'button',
            type: 'Ext.button.Cycle'
        }, {
            name: 'item',
            type: 'Ext.menu.CheckItem'
        }]
    }],

    // No inline editing on cycle button
    inlineEdit: null,


    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.on('cfgchange', me.onCfgChange, me);
        me.ex('transform', me.onTransform, me);
        me.on('addchild', me.onAddChild, me);
        
        me.clearListenersByEvent('flyout');
        me.on('flyout', me.onFlyout, me);
    },

    onAddChild: function(child) {
        if (child.isType('menu')) {
            child.childtype = 'menucheckitem';
        }
    },

    // Transforming TO a cycle button
    onTransform: function(from, toType, snapshot) {

        var me = this,
            menu = me.query('menu')[0],
            menuItems;

        // if no menu is found, then add default menu and items
        if (!menu) {
            me.createChild({ type: 'menu', childtype: 'menucheckitem' });
        } else {
            // we need to transform any menu items to check menu items
            // since cycle button menu only accepts those
            menuItems = menu.query(':not(menucheckitem)');
            menuItems.each(function(item) {
                item.transform('Ext.menu.CheckItem');
            });
        }

    },

    onSetup: function() {
        var me = this;
        me.setCfgValue('showText', true);

        if (!me.child('menu')) {
            me.createChild({ type: 'menu', childtype: 'menucheckitem' });
        }
    },

    onCfgChange: function(name, value) {
        var me = this;

        switch (name) {
            case 'prependText':
                if (value) {
                    me.setCfgValue('showText', true);
                }
                break;
            case 'showText':
                if (!value) {
                    me.setCfgValue('prependText', undefined);
                }
                break;
        }
    },

    onFlyout: function() {
        return this.isLinkedInstance ? [] : {
            xtype: 'xds-menuflyout',
            title: Ext4.String.format(xds.Resource.get('canvas').flyouts.menu.title, this.getName()),
            childType: 'menucheckitem'
        };
    }
});
