xds.component.Registry.addDefinition({
    override: "Ext.menu.ColorPicker",
    typeAlias: 'colormenu',

    toolbox: {
        name: 'Color Menu',
        iconCls: 'icon-color-menu',
        category: 'Menu',
        groups: ['Views', 'Menus']
    },
    autoName: 'MyColorMenu',

    validChildTypes: [],

    ignoreCfgs: ['tools'],


    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        if (!parent) {
            me.setCfgValue('width', 150);
        }
    }
});
