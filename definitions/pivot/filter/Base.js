xds.component.Registry.addDefinition({
    override: 'Ext.pivot.filter.Base',
    typeAlias: 'pivotfilter.base',
    autoName: 'MyFilterBase',

    init: function() {
        var me = this;

        me.setReference({name: 'filter', type: 'object'});
        me.on({
            actionmenu: me.onActionMenu,
            scope: me
        });
    },

    onActionMenu: function() {
        var i8n = xds.app.Resource.get('contextMenu'),
            actions = [{
                text: i8n["delete"],
                iconCls: 'icon-delete',
                scope: this,
                handler: function(instance) {
                    instance.requestDelete();
                },
                disableWhen: function(instance) {
                    return !instance.canDelete();
                }
            }];

        return actions;
    }
});
