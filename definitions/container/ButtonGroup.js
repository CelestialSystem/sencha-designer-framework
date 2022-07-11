xds.component.Registry.addDefinition({
    override: "Ext.container.ButtonGroup",
    typeAlias: 'buttongroup',

    toolbox: {
        name: 'Button Group',
        iconCls: 'icon-buttongroup',
        category: 'Toolbar',
        groups: ['Buttons','Views', 'Containers']
    },
    fullscreenAtTopLevel: false,

    ignoreCfgs: [
        'autoScroll',
        'defaultType',
        'tpl'
    ],

    cfgs: [{
        name: 'layout',
        merge: false,
        type: 'string',
        defaultValue: 'table',
        hidden: true,
        canSetValue: false
    }],

    inlineEdit: [{
        cfg: 'title',
        textEl: '.x-btn-group-header-text',
        align: 'c-c?'
    }],

    init: function() {
        var me = this;

        me.on({
            setup: me.onSetup,
            validparent: me.onValidParent,
            scope: me
        });
    },

    onSetup: function() {
        var me = this;

        var btns = me.createChild(['button', 'button']);
        btns[0].setCfgValue('text', 'Button 1');
        btns[1].setCfgValue('text', 'Button 2');

        me.setCfgValue({
            title: 'Buttons',
            columns: 2,
            width: undefined,
            height: undefined
        });
    },

    onValidParent: function(parent) {
        if (parent && !parent.isType('toolbar')) {
            return false;
        }
    },

    isUiApplicable: function(uiInterface) {
        return this.isBaseUiApplicable(uiInterface.getBaseUi());
    },

    isBaseUiApplicable: function(baseUi) {
        return true;
    },

    getUiInterfaceName: function(uiName) {
        var isFramed = this.getCfgValueOrDefault('frame');

        if (isFramed) {
            uiName = uiName + '-framed';
        }

        return uiName;
    },

    syncConfigWithUiInterface: function(uiInterface) {
        var isFramed = uiInterface.getBaseUi('framed');
        if (isFramed) {
            this.setCfgValue('frame', true);
        } else {
            this.setCfgValue('frame', false);
        }
    },

    canCfgChangeAlterUiInterfaceName: function(cfgName) {
        return cfgName === 'frame';
    }

});