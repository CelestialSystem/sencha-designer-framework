xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Toolbar",
    typeAlias: 'toolbar',

    canvasAlias: 'widget.xdtoolbar',
    toolbox: {
        name: 'Toolbar',
        iconCls: 'icon-toolbar',
        category: 'Toolbar',
        groups: ["Containers","Views", "Forms"]
    },
    transformGroup: 'toolbar',
    fullscreenAtTopLevel: false,

    obscureCfgs: ['menuTriggerCls'],
    ignoreCfgs: [
        'defaultType'
    ],

    cfgs: [{
        name: 'layout',
        merge: false,
        type: 'string',
        defaultValue: 'hbox',
        hidden: true,
        canSetValue: false
    }],

    // used by Panel when giving dock config
    defaultDock: 'top',

    init: function(){
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.on({
            addchild: me.onAddChild,
            cfgchange: me.onCfgChange,
            scope: me
        });
    },

    onAddChild: function(child) {
        child.setCfgValue('layout|flex', null);
    },

    onCfgChange: function(name, value, oldValue) {
        var me = this,
            width = me.getCfgValue('width'),
            height = me.getCfgValue('height');

        switch (name) {
            case 'vertical':
                me.setCfgValue({
                    width: height,
                    height: width
                });
                break;
        }
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        if (!parent) {
            me.setCfgValue('width', 400);
        }
    }
});
