xds.component.Registry.addDefinition({
    override: "Ext.TitleBar",
    typeAlias: "titlebar",
    canvasAlias: 'widget.xdtitlebar',

    validParentTypes: ['container'],
    alignConfigGroup: 'TitleBar Child',
    "toolbox": {
        "name": "TitleBar",
        "iconCls": "icon-titlebar",
        "category": "Toolbars",
        "groups": ["Containers"]
    },

    cfgs: [{
        name: 'baseCls',
        type: 'string',
        merge: true,
        alternates: [{type: 'boolean'}]
    }],

    ignoreCfgs: [
        'defaultType'
    ],

    cfgs: [
        {
            name: 'docked',
            type: 'string',
            editor: 'options',
            // toolbars only allow top and bottom docking
            options: [
                'top',
                'bottom'
            ]
        },
        {
            name: 'layout',
            merge: false,
            type: 'string',
            defaultValue: 'hbox',
            hidden: true,
            canSetValue: false
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
        me.on('addchild', me.onAddChild, me);
        me.on('restorechild', me.onAddChild, me);
        me.on('removechild', me.onRemoveChild, me);
    },

    onSetup: function() {
        // Dock to the top of parent by default
        this.setCfgValue('docked', 'top');
    },

    onAddChild: function(child) {
        if (child.isType('component') && !child.hasCfg('align')) {
            child.addCfg({
                name: 'align',
                type: 'string',
                group: this.alignConfigGroup,
                "editor": "options",
                "defaultValue": "left",
                "options": [
                    "left",
                    "right"
                ]
            });
        }
    },

    onRemoveChild: function(child) {
        if (child.hasCfg('align') && child.flyCfg('align').getGroup() === this.alignConfigGroup) {
            child.removeCfg('align');
        }
    }
});
