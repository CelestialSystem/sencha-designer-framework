xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.DragDrop",
    typeAlias: 'griddragdropplugin',
    ptype: 'gridviewdragdrop',

    toolbox: {
        name: 'Grid Drag Drop Plugin',
        iconCls: 'icon-dragdrop',
        category: 'Grid View',
        groups: ['Grids']
    },
    autoName: 'MyGridDragDropPlugin',
    validParentTypes: ['gridview'],

    basicCfgs: ['enableDrag', 'enableDrop', 'ddGroup'],

    eventsFiredOnParent: [
        'beforedrop',
        'drop'
    ],

    init: function() {
        var me = this;
        me.on('coderequires', me.onCodeRequires, me);
    },

    onCodeRequires: function() {
        // The framework is missing the requires for Ext.util.Point which is used by
        // EventObjectImpl.getPoint(); see EXTJSIV-9956. For now we'll add it for the user.
        return ['Ext.util.Point'];
    }
});
