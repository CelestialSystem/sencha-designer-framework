xds.component.Registry.addDefinition({
    override: "Ext.Viewport",
    typeAlias: "viewport",

    "classAlias": null, //xtype is implicit

    iconCls: 'icon-viewport',
    "autoName": "Viewport",

    validParentTypes: ['application'],
    validChildTypes: ['!delegateeventbinding'],

    disableTransform: true,
    disablePromoteToClass: true,
    disableDuplication: true,
    className: null,

    cfgs: [
        {
            name: 'layout',
            merge: false,
            type: 'string',
            defaultValue: 'card',
            editor: 'options',
            options: xds.component.Registry.getAllVisibleLayouts()
        },
        {
            name: 'eventsRefGroup',
            displayName: 'Event Bindings',
            type: 'refgroup',
            group: xds.architectGroup,
            // no delegateeventbinding allowed for viewport
            refSelector: '[type=basiceventbinding]',
            createTypes: ['basiceventbinding']
        }
    ],

    init: function() {
        var me = this;

        me.setReference('viewport');
        me.on('codeconfig', me.onCodeConfig);
    },

    onCodeConfig: function(codeConfig) {
        var cfg = {
            name: "xclass", rawValue: "Ext.viewport.Viewport"
        };

        codeConfig.configs.push(cfg);

        return codeConfig;
    }
});
