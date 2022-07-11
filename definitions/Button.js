xds.component.Registry.addDefinition({
    override: "Ext.Button",
    typeAlias: "button",
    canvasAlias: 'widget.xdbutton',

    "toolbox": {
        "name": "Button",
        "iconCls": "icon-button",
        "category": "Standard",
        "groups": ["Views", "Forms"]
    },

    validChildTypes: ['menu'],
    singleChildTypes: ['menu'],
    "fullscreenAtTopLevel": false,

    obscureCfgs: ['autoEvent', 'badgeCls', 'iconMaskCls', 'labelCls', 'pressedCls'],
    cfgs: [{
        "name": "handler",
        merge: true,
        params: [{
            name: 'button',
            type: 'Ext.Button'
        }, {
            name: 'e',
            type: 'Ext.EventObject'
        }]
    }, {
        "name": "iconCls",
        merge: true,
        "editor": "combo",
        "options": xds.app.Resource.get('iconClassesAwesomeFive')
    }, {
        // TODO need autogen to handle Number/Boolean alternate types
        "name": "pressedDelay",
        merge: false,
        "type": "number",
        "defaultValue": 0,
        alternates: [{
            type: 'boolean'
        }]
    }, {
        name: 'menu',
        merge: true,
        displayName: 'Menu',
        type: 'refgroup',
        refSelector: 'menu',
        createTypes: ['menu'],
        max: 1
    }, {
        "name": "ui",
        merge: true,
        "editor": "combo",
        "options": [
            'action',
            'action round',
            'confirm',
            'confirm round',
            'decline',
            'decline round',
            'round',
            'raised',
            'alt',
            'forward',
            'back',
            'plain'
        ]
    }],

    ignoreCfgs: ['tpl', 'tplWriteMode', 'data'],

    inlineEdit: [{
        cfg: 'text',
        textEl: '.x-button-label',
        dblClickEl: '*'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.on({
            flyout: me.onFlyout,
            cfgchange: me.onCfgChange,
            scope: me
        });
    },

    onSetup: function() {
        this.setCfgValue('text', this.getName());
    },

    onFlyout: function() {
        var items = [];

        if (this.parent() && this.parent().isType('navigationbar') && this.hasCfg('align')) {
            items.push({
                xtype: 'flyoutcombo',
                fieldLabel: 'Align',
                bindTo: {
                    name: 'align',
                    event: 'select'
                },
                data: this.flyCfg('align').config.options
            });
        }
        return items;
    },

    onCfgChange: function(name, value, oldValue) {
        var me = this,
            iconClasses = xds.app.Resource.get('iconClassesAwesomeFive');

        switch (name) {
            case 'iconCls':
                if (value && iconClasses.contains(value) && !me.isCfgSet('iconMask')) {
                    me.setCfgValue('iconMask', true);
                }
                break;
        }
    },

    isBaseUiApplicable: function(baseUi) {
        return true;
    },

    canvasViewStates: {
        normal:  {
            type: 'normal',
            displayName: 'Normal'
        },
        'x-button-pressed': {
            type: 'cls',
            displayName: 'Pressed'
        },
        disabled: {
            type: 'custom',
            displayName: 'Disabled',
            func: function(enabled) {
                return ['setDisabled', enabled];
            }
        }
    }
});
