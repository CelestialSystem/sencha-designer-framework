xds.component.Registry.addDefinition({
    override: 'Ext.Dialog',
    typeAlias: 'dialog',

    toolbox: {
        name: 'Dialog',
        iconCls: 'icon-window',
        category: 'Containers',
        groups: ['Views', 'Containers']
    },

    init:function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            title: 'My Dialog'
        });
    }
});
