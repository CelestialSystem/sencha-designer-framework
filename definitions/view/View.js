xds.component.Registry.addDefinition({
    override: "Ext.view.View",
    typeAlias: 'dataview',

    canvasAlias: 'xddataview',
    toolbox: {
        name: 'View',
        iconCls: 'icon-view',
        category: 'Views',
        groups: ['Views']
    },

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this,
            config;

        if (!me.parent()) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }

        me.setCfgValue({
            itemSelector: 'div'
        });

        // Set a default itemTpl
        // indexOf('.ux.') hotfix for DSGNR-7241, do not create itemTpl when class is from user extension
        if (!me.isCfgSet('itemTpl') && me.getType() && me.getType().indexOf('.ux.') === -1) {
            config = me.flyCfg('itemTpl');
            config.setTemplateValue(me.getDefaultItemTpl());
        }
    },

    getDefaultItemTpl: function() {
        return 'Data View Item {string}';
    }
});

