xds.component.Registry.addDefinition({
    override: "Ext.Widget",
    typeAlias: 'widget',
    mixin: [
        'baseview',
        'idbehavior',
        'inlineeditbehavior',
        'controllable',
        'viewbehavior',
        'Ext.mixin.Responsive'
    ],

    init: function() {
        var me = this;

        this.on({
            canvasconfig: me.onCanvasConfig,
            flyout: me.onFlyout
        });
    },

    onCanvasConfig: function(config) {
        config.xdsInstanceId = this.getId();
        return config;
    },

    onFlyout: function() {
        var me = this,
            parent = me.parent(),
            ref = me.getReference(),
            items = [];

        var checkParentLayout = function(layout) {
            return parent.hasCfgValue('layout', layout);
        };

        if (me.hasCfg('autoScroll')) {
            items.push({
                xtype: 'checkbox',
                boxLabel: 'autoScroll',
                hideLabel: true,
                bindTo: {
                    name: 'autoScroll',
                    event: 'check'
                }
            });
        }

        if (me.hasCfg('layout|flex') && parent && ['vbox', 'hbox', 'border'].some(checkParentLayout)) {
            items.push({
                xtype: 'numberfield',
                fieldLabel: 'Flex',
                bindTo: 'layout|flex'
            });
        }

        // Only show the border layout region menu if we are an item under the border layout
        // i.e. dockedItems and other reference items should not show this menu
        if (parent && checkParentLayout('border') && ref.name === 'items'){
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Select a region',
                data: ['north', 'east', 'center', 'south', 'west'],
                bindTo: {
                    name: 'layout|region',
                    event: 'select'
                }
            });
        }

        if (me.hasCfg('dock')){
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Dock in parent',
                data: [['(none)', null], 'top', 'bottom', 'left', 'right'],
                bindTo: {
                    name: 'dock',
                    event: 'select'
                }
            });
        }

        if (me.hasCfg('store') && me.flyCfg('store').getType() === 'store') {
            items.push({
                xtype: 'xds-storeflyoutselect'
            });
        }

        return items;
    }
});
