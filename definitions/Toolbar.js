xds.component.Registry.addDefinition({
    override: "Ext.Toolbar",
    typeAlias: "toolbar",
    canvasAlias: 'widget.xdtoolbar',

    "toolbox": {
        "name": "Toolbar",
        "iconCls": "icon-toolbar",
        "category": "Toolbars",
        "groups": ["Containers","Views"]
    },

    "fullscreenAtTopLevel": false,

    ignoreCfgs: [
        'centered',
        'top',
        'bottom',
        'left',
        'right',
        'defaultType'
    ],

    cfgs: [
        {
            name: 'docked',
            merge: true,
            editor: 'combo',
            options: [
                'top',
                'bottom',
                'left',
                'right'
            ]
        },
        {
            name: "layout",
            merge: false,
            type: "string",
            defaultValue: "hbox",
            editor: "combo",
            options: xds.component.Registry.getAllVisibleLayouts()
        },
        {
            name: "title",
            merge: true,
            alternates: [{
                type: 'object'
            }]
        },
        {
            name: "ui",
            editor: "combo",
            type: 'string',
            options: [
                "dark",
                "light"
            ]
        }
    ],

    inlineEdit: [{
        cfg: 'title',
        textEl: '.x-title > .x-innerhtml',
        dblClickEl: '*'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.on({
            beforecfgchange: me.onBeforeCfgChange,
            scope: me
        });
    },

    onSetup: function() {
        // Dock toolbars to the top of parent by default
        this.setCfgValue('docked', 'top');
    },

    onBeforeCfgChange: function(name, value) {
        // Prevent unsetting of the docked config
        if (name === 'docked' && !value) {
            xds.ui.Ack.display('Toolbars cannot be undocked.', 5);
            return false;
        }
    }

});
