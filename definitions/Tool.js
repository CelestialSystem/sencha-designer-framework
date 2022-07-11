xds.component.Registry.addDefinition({
    override: "Ext.Tool",
    typeAlias: 'tool',

    toolbox: {
        name: 'Tool',
        iconCls: 'icon-tool',
        category: 'Standard',
        groups: ["Views"]
    },

    ignoreLayoutCfgs: true,
    validParentTypes: ['panel', 'gridcolumn'],
    fullscreenAtTopLevel: false,
    
    cfgs: [{
        name: 'type',
        merge: true,
        editor: 'combo',
        options: [
            'close',
            'collapse',
            'down',
            'expand',
            'gear',
            'help',
            'left',
            'maximize',
            'minimize',
            'minus',
            'move',
            'next',
            'pin',
            'plus',
            'prev',
            'print',
            'refresh',
            'resize',
            'restore',
            'right',
            'save',
            'search',
            'toggle',
            'unpin',
            'up'
        ]
    }],

    init: function() {
        this.on('resizehandles', function() { return false; });
        this.setReference({ name: 'tools', type: 'array' });
    }
});