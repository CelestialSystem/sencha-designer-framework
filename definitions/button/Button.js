xds.component.Registry.addDefinition({
    override: "Ext.button.Button",
    typeAlias: 'button',

    toolbox: {
        name: 'Button',
        iconCls: 'icon-button',
        category: 'Standard',
        groups: ['Buttons', 'Forms', 'Views']
    },
    transformGroup: 'tbitem',
    validChildTypes: ['menu'],
    singleChildTypes: ['menu'],
    fullscreenAtTopLevel: false,

    mixin: ['buttonmenubehavior'],

    obscureCfgs: ['arrowCls', 'clickEvent', 'handleMouseEvents', 'overCls'],
    ignoreCfgs: [
        // Component
        'autoEl',
        'autoScroll',
        'componentLayout',
        'data',
        'html',
        'renderTpl',
        'scope',
        'tpl',
        'tplWriteMode'
    ],

    cfgs: [{
        name: 'arrowAlign',
        merge: true,
        editor: 'options',
        options: [
            'right',
            'bottom'
        ]
    },{
        name: 'clickEvent',
        merge: true,
        editor: 'options',
        options: [
            'click',
            'contextmenu',
            'dblclick'
        ]
    },{
        name: 'handler',
        merge: true,
        allowOnViewController: true
    },{
        name: 'iconAlign',
        merge: true,
        editor: 'options',
        options: [
            'top',
            'right',
            'bottom',
            'left'
        ]
    },{
        name: 'menu',
        merge: false,
        displayName: 'Menu',
        type: 'refgroup',
        refSelector: 'menu',
        createTypes: ['menu'],
        max: 1
    },{
        name: 'textAlign',
        merge: true,
        editor: 'options',
        options:[
            'center',
            'left',
            'right'
        ]
    },{
        name: 'toggleHandler',
        merge: true,
        allowOnViewController: true
    },{
        name: 'tooltipType',
        merge: true,
        editor: 'options',
        options: [
            'title',
            'qtip'
        ]
    },{
        name: 'glyph',
        merge: true,
        allowHexadecimal: true // allow also numbers in hexadecimal formats
    },{
        name: "iconCls",
        merge: true,
        editor: "combo",
        options: xds.app.Resource.get('iconClassesAwesomeFive')
    }],

    inlineEdit: [{
        cfg: 'text',
        textEl: '.x-btn-inner',
        dblClickEl: '*'
    }],


    init: function() {
        var me = this;

        me.on('cfgchange', me.onCfgChange, me);
        me.ex('setup', me.onSetup, me);

        me.clearListenersByEvent('flyout');
        me.on('flyout', me.onFlyout, me);

        me.on('codeconfig', me.onCodeConfig, me);
    },

    onCfgChange: function(name, value) {
        var me = this;

        switch (name) {
            case 'enableToggle':
                if (!value) {
                    me.setCfgValue({
                        allowDepress: false,
                        pressed: false,
                        toggleGroup: undefined
                    });
                }
                break;
            case 'allowDepress':
            case 'pressed':
            case 'toggleGroup':
                if (value) {
                    me.setCfgValue('enableToggle', true);
                }
                break;
        }
    },

    onSetup: function() {
        this.setCfgValue('text', 'MyButton');
    },

    onFlyout: function() {
        return this.isLinkedInstance ? [] : {
            xtype: 'xds-menuflyout',
            title: this.getName() + ' Menu Builder'
        };
    },
	canvasViewStates: {
        normal:  {
            type: 'normal',
            displayName: 'Normal'
        },
        pressed: {
            type: 'cls-ui',
            displayName: 'Pressed'
        },
        focus: {
            type: 'cls-ui',
            displayName: 'Focused'
        },
        over: {
            type: 'cls-ui',
            displayName: 'Over'
        },
        disabled: {
            type: 'custom',
            displayName: 'Disabled',
            func: function(enabled) {
                return ['setDisabled', enabled];
            }
        }
    },

    onCodeConfig: function(config) {
        if (this.parent() && this.parent().isType('segmentedbutton') && config.alias === 'button') {
            delete config.alias; // don't output xtype for button in segmented buttons unless it differs from button
        }
        return config;
    },

    getUiInterfaceName: function(uiName) {
        return uiName;
    },

    syncConfigWithUiInterface: function(uiInterface) {
        var invokedMixin = uiInterface.get('invokedMixin'),
            i, scale;
        for (i = 0; i < uiInterface.componentInterface.getBaseUis().length; i++) {
            if (invokedMixin === uiInterface.componentInterface.getBaseUis()[i].invokedMixin) {
                scale = uiInterface.componentInterface.getBaseUis()[i].buttonScale;
                this.setCfgValue('scale', scale);
            }
        }
    },

    canCfgChangeAlterUiInterfaceName: function(cfgName) {
        return cfgName === 'scale';
    },

    hasNoUiSetting: true

});
