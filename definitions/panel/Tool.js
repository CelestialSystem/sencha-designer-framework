xds.component.Registry.addDefinition({
    override: "Ext.panel.Tool",
    typeAlias: 'tool',

    toolbox: {
        name: 'Tool',
        iconCls: 'icon-tool',
        category: 'Standard',
        groups: ["Views"]
    },
    ignoreLayoutCfgs: true,
    validParentTypes: ['panel'],
    fullscreenAtTopLevel: false,

    obscureCfgs: ['id', 'itemId'],
    ignoreCfgs: [
        // AbstractComponent
        'autoEl',
        'autoRender',
        'autoShow',
        'baseCls',
        'border',
        'componentCls',
        'componentLayout',
        'contentEl',
        'data',
        'disabledCls',
        'dock',
        'draggable',
        'floating',
        'frame',
        'height',
        'hidden',
        'hideMode',
        'html',
        'loader',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'overCls',
        'padding',
        'renderSelectors',
        'renderTpl',
        'style',
        'tpl',
        'tplWriteMode',
        'ui',
        'width',

        // Component
        'autoScroll',
        'maintainFlex',
        'resizable',
        'resizeHandles',
        'toFrontOnShow',

        // Stateful
        'saveBuffer',
        'stateEvents',
        'stateId',
        'stateful',

        // Floating
        'focusOnToFront',
        'shadow',

        // Local
        'scope'
    ],

    cfgs: [{
        name: 'callback',
        merge: true,
        allowOnViewController: true
    }, {
        name: 'tooltipType',
        merge: true,
        editor: 'options',
        options: ['qtip', 'title']
    }, {
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
        var me = this;
        me.on('resizehandles', function() { return false; });
        me.setReference({ name: 'tools', type: 'array' });
    }
});
