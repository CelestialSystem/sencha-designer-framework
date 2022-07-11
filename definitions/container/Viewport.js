xds.component.Registry.addDefinition({
    override: "Ext.container.Viewport",
    typeAlias: 'viewport',

    canvasAlias: 'widget.xdviewport',
    toolbox: {
        name: 'Viewport',
        iconCls: 'icon-viewport',
        category: 'Containers',
        groups: ['Views', 'Containers']
    },

    ignoreCfgs: [
        // Component
        'autoEl',
        'autoRender',
        'autoShow',
        'componentLayout',
        'constrain',
        'constrainTo',
        'defaultAlign',
        'draggable',
        'fixed',
        'floating',
        'focusOnToFront',
        'frame',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'resizable',
        'resizeHandles',
        'shadow',
        'shadowOffset',
        'shrinkWrap',
        'toFrontOnShow',
        'tpl'
    ],

    cfgs: [
    // Because of DSGNR-7858
    {
        name: 'scrollable',
        merge: false,
        type: 'auto',
        allowBoolean: true,
        editor: 'combo',
        options: [
            ['false', false],
            ['true', true],
            ['horizontal', 'horizontal'],
            ['vertical', 'vertical'],
            ['both', 'both']
        ],
        alternates: [
            {
                type: 'boolean'
            },{
                type: 'string'
            },{
                type: 'object'
            }
        ]
    }],

    init: function() {
        var me = this;

        me.ex('validparent', me.onValidParent, me);
        me.ex('resizehandles', function() { return false; });
    },

    onValidParent: function(parent) {
        return parent.is('viewcategory');
    }
});
