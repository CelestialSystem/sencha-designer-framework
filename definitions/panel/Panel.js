xds.component.Registry.addDefinition({
    override: "Ext.panel.Panel",
    typeAlias: 'panel',

    canvasAlias: 'xdpanel',
    toolbox: {
        name: 'Panel',
        iconCls: 'icon-panel',
        category: 'Containers',
        groups: ['Views', 'Containers']
    },

    hasFramedUi: false, //DEFAULT
    initialTitle: 'My Panel',

    obscureCfgs: ['collapsedCls'],
    ignoreCfgs: [
        'bbar',
        'buttonAlign', // only used with 'fbar' config
        'buttons',
        'collapseMode', // added by border layout
        'dockedItems',
        'fbar',
        'floatable', // added by border layout
        'lbar',
        'minButtonWidth', // only used with 'buttons' config
        'rbar',
        'tbar'
    ],

    cfgs: [{
        name: 'collapsed',
        merge: true,
        defaultValue: null // collapsed should only be false if user explicitly sets it to false
    }, {
        name: 'closeAction',
        merge: true,
        editor: 'options',
        options: ['destroy', 'hide']
    }, {
        name: 'collapseDirection',
        merge: true,
        editor: 'options',
        options: ['top', 'bottom', 'left', 'right']
    }, {
        name: 'header',
        merge: true,
        // The header cfg technically has no default, but the framework only accepts `false`
        // and errors if `true` is passed, so we fake a defaultValue to prevent true in the code.
        defaultValue: true
        // TODO this should become a child reference to a Header definition, but it will
        // have to handle being set to false as well.
    }, {
        name: 'placeholderCollapseHideMode',
        merge: true,
        editor: 'options',
        options: [
            ['ASCLASS', 4],
            ['DISPLAY', 2],
            ['OFFSETS', 3],
            ['VISIBILITY', 1]
        ]
    }, {
        // TODO remove it when DSGNR-7219 is done
        "name": "titleRotation",
        merge: false,
        "type": "string",
        "bindable": true,
        "alternates": [
            {
                type: 'number',
                "editor": "options",
                "options": [0, 1, 2]
            }
        ]
    }, {
        name: 'tools',
        merge: false,
        displayName: 'Tools',
        type: 'refgroup',
        refSelector: 'tool',
        createTypes: ['tool'],
        alternates: [
            {
                displayName: 'tools',
                name: 'tools',
                type: 'array'
            },
            {
                displayName: 'tools',
                name: 'tools',
                type: 'object'
            }
        ]
    },{
        name: 'glyph',
        merge: true,
        allowHexadecimal: true // allow also numbers in hexadecimal formats
    }],

    inlineEdit: [{
        cfg: 'title',
        textEl: '.x-header-text',
        dblClickEl: '.x-header'
    }],


    init: function() {
        var me = this;

        me.on('addchild', me.onAddChild, me);
        me.on('removechild', me.onRemoveChild, me);
        me.on('restorechild', me.onRestoreChild, me);
        me.ex('setup', me.onSetup, me);
        me.on('cfgchange', me.onCfgChange, me);
        me.on('restore', me.onRestore, me);

    },

    onAddChild: function(child) {
        this.addAndRestore(child);
        if (child.isType('component') && ['items', 'dockedItems'].contains(child.getReference().name)) {
            // only set default dock on add (not on restore)
            if (child.defaultDock && !child.isCfgSet('dock')) {
                child.setCfgValue('dock', child.defaultDock);
            }
        }
    },

    onRestoreChild: function(child) {
        this.addAndRestore(child);
    },

    onRestore: function() {
        //initiate hasFramedUi

        if (!this.getCfgValue('designer|uiInterfaceName')) {
            this.hasFramedUi = false;
        } else {
            this.hasFramedUi = this.isCurrentUiNameFramed(this.getCfgValue('designer|uiInterfaceName'));
        }
    },

    addAndRestore: function(child) {
        // Any component that is destined to be a child of the panel, or is already marked as being
        // a docked item, should get the dock config
        if (child.isType('component') && ['items', 'dockedItems'].contains(child.getReference().name)) {
            if (!child.hasCfg('dock')) {
                child.addCfg({
                    type: 'string',
                    name: 'dock',
                    group: 'Ext.layout.component.Dock',
                    editor: 'options',
                    options: [
                        'bottom',
                        'left',
                        'right',
                        'top'
                    ]
                });
            }

            if (!child.hasCfg('weight')) {
                child.addCfg({
                    type: 'number',
                    name: 'weight',
                    group: 'Ext.layout.component.Dock'
                });
            }

            child.on('cfgchange', this.onChildCfgChange, this, {child: child});
            this.onChildCfgChange('dock', child.getCfgValue('dock'), null, null, {child: child});

        }
    },

    onChildCfgChange: function(name, value, oldValue, configOpts, opts) {
        if (name === 'dock') {
            var child = opts.child,
                undef;

            // if it has a value set dockedItems
            if (value !== null && value !== undefined) {
                child.setReference({
                    name: 'dockedItems',
                    type: 'array'
                });
                child.setSuffix(value);
            } else {
                child.setReference(undef);
                child.setSuffix(undef);
            }
        }
    },

    onCfgChange: function(name, value, oldValue) {

        var currentUiName, newUiName;

        if (name === 'designer|uiInterfaceName') {
            if (value) {
                this.hasFramedUi = (value.indexOf('-framed') > -1);
            } else {
                this.hasFramedUi = false;
            }
        }

        if (name === 'frame') {
            if ((this.hasFramedUi && value) || (!this.hasFramedUi && !value)) {
                return;
            } else {
                if(this.isCurrentUiFramework()) {
                    currentUiName = this.getCfgValue('designer|uiInterfaceName');
                    if (currentUiName === undefined) {
                        currentUiName = 'default'; //default
                    }
                    if (this.isCurrentUiNameFramed()) {
                        newUiName = currentUiName.substring(0, currentUiName.indexOf('-framed'));
                        this.setCfgValue('designer|uiInterfaceName', newUiName);
                    } else {
                        newUiName = currentUiName + '-framed';
                        this.setCfgValue('designer|uiInterfaceName', newUiName);
                    }
                } else {
                    //output to log that current UI mismatches with the frame setting
                    xds.app.Log.info("UI " + this.getCfgValue('designer|uiInterfaceName') + " for " + this.getCfgValue('designer|userClassName') + " works only for " + (value ? 'unframed' : 'framed') + ' Panels. Select a different UI or modify "frame" config.');
                }
            }
        }
    },

    //Hacky but we need to know if the UI is a framework UI or not
    //Config actually is not linked with uiInterface, so we can't query
    //frameworkUis just like that
    //Panel has only default and light (and undefined)
    isCurrentUiFramework: function() {
        var uiName = this.getCfgValue('designer|uiInterfaceName');
        if (uiName && ((uiName.indexOf('light') > -1) || ((uiName.indexOf('default') > -1)))) {
            return true;
        }
        if (!uiName) {
            return true;
        }
        return false;
    },

    isCurrentUiNameFramed: function() {
        var uiName = this.getCfgValue('designer|uiInterfaceName');
        if (uiName) {
            return (uiName.indexOf('-framed') > -1);
        } else {
            return false; //default
        }
    },


    onRemoveChild: function(child) {
        if (child.isType('component')) {
            if (child.hasCfg('dock')) {
                child.setReference();
                child.removeCfg('dock');
            }
            if (child.hasCfg('weight')) {
                child.removeCfg('weight');
            }
        }
    },

    onSetup: function() {
        var me = this,
            parent = me.parent(),
            initialTitle = me.initialTitle;

        if (initialTitle) {
            me.setCfgValue('title', initialTitle);
        }
        if (!parent) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }
    },


    isUiApplicable: function(uiInterface) {
        return this.isBaseUiApplicable(uiInterface.getBaseUi());
    },

    isBaseUiApplicable: function(baseUi) {
        return true;
    },

    getUiInterfaceName: function(uiName) {
        var isFramed = this.getCfgValueOrDefault('frame'),
            suffixRe = /-framed$/,
            hasSuffix = suffixRe.test(uiName);

        if (isFramed && !hasSuffix) {
            uiName = uiName + '-framed';
        } else if (!isFramed && hasSuffix) {
            uiName = uiName.replace(suffixRe, '');
        }

        return uiName;
    },

    syncConfigWithUiInterface: function(uiInterface) {
        var isFramed = uiInterface.isFrameworkUi() ? /-framed$/.test(uiInterface.get('name')) : uiInterface.getBaseUi('framed');
        if (isFramed) {
            this.setCfgValue('frame', true);
        } else {
            this.setCfgValue('frame', false);
        }
    },

    canCfgChangeAlterUiInterfaceName: function(cfgName) {
        return false;
    }

});
