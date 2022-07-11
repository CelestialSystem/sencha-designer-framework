Ext4.ns('xds.types.deploy');

/**
 * Configs related to Packaging apps for iOS and Android using Sencha CMD
 */
xds.types.deploy.Package = {
    type: 'packagesetting',
    inherits: 'baseutil',
    disableDeletion: true,
    disableDuplication: true,
    iconCls: 'icon-package',

    docClassName: 'Package.Settings',
    autoName: 'packager',

    validAsTopInstance: true,
    validParentTypes: ['resourcecategory'],

    disablePromoteToClass: true,

    // Disables Transform menu from inspector
    disableTransform: true,
    // Disable Export to file
    disableExport: true,

    defaultActionId: 'viewCode',
    editorMode: 'json',

    validChildTypes: ['!basicfunction'],
    // we don't want to show any configs in the pane
    showConfigs: [],

    ignoreCfgs: ['designer|userAlias', 'alternateClassName', 'mixins', 'requires', 'singleton', 'staticsRefGroup', 'uses', 'designer|displayName'],
    cfgs: [
        {
            name: 'applicationName',
            type: 'string',
            required: true
        },
        {
            name: 'applicationId',
            type: 'string'
        },
        {
            name: 'bundleSeedId',
            type: 'string',
            group: 'Package.Settings.iOS'
        },
        {
            name: 'versionString',
            type: 'string'
        },
        {
            name: 'versionCode',
            type: 'string',
            group: 'Package.Settings.Android'
        },
        {
            name: 'icon',
            type: 'object'
        },
        {
            name: 'inputPath',
            type: 'string',
            required: true
        },
        {
            name: 'outputPath',
            type: 'string'
        },
        {
            name: 'configuration',
            type: 'string',
            editor: 'options',
            options: ['Debug', 'Release']
        },
        {
            name: 'platform',
            type: 'string',
            editor: 'options',
            options: ['iOSSimulator', 'iOS', 'Android', 'AndroidEmulator']
        },
        {
            name: 'deviceType',
            group: 'Package.Settings.iOS',
            type: 'string',
            editor: 'options',
            options: ['Universal', 'iPhone', 'iPad']
        },
        {
            name: 'certificatePath',
            type: 'string',
            defaultValue: '/path/to/certificate.file'
        },
        {
            name: 'certificateAlias',
            type: 'string'
        },
        {
            name: 'certificatePassword',
            type: 'string'
        },
        {
            name: 'provisionProfile',
            group: 'Package.Settings.iOS',
            type: 'string'
        },
        {
            name: 'sdkPath',
            type: 'string',
            defaultValue: '/path/to/android-sdk',
            group: 'Package.Settings.Android'
        },
        {
            name: 'androidAPILevel',
            type: 'string',
            group: 'Package.Settings.Android'
        },
        {
            name: 'permissions',
            type: 'typedarray',
            memberConfig: {
                editor: 'options',
                options: [
                    "INTERNET",
                    "ACCESS_NETWORK_STATE",
                    "CAMERA",
                    "VIBRATE",
                    "ACCESS_FINE_LOCATION",
                    "ACCESS_COARSE_LOCATION",
                    "CALL_PHONE"
                ]
            },
            group: 'Package.Settings.Android'
        },
        {
            name: 'orientations',
            type: 'typedarray',
            memberConfig: {
                editor: 'options',
                options: ['portrait', 'landscapeLeft', 'landscapeRight', 'portraitUpsideDown']
            }
        }
    ],

    init: function() {
        var me = this;

        me.on({
            setup: me.onSetup,
            codeconfig: me.onCodeConfig,
            actionmenu: me.onActionMenu,
            scope: me
        });
    },


    onActionMenu: function() {
        var i8n = xds.app.Resource.get('contextMenu');
        return [{
            cls: 'xds-default-action',
            itemId: 'viewCode',
            text: i8n.viewCode,
            handler: function() {
                xds.actions.codeView.execute();
            }
        }];
    },

    onSetup: function() {
        var me = this;

        // if the project is saved we'll use the project name
        me.setCfgValue('applicationName', xds.project.name ? xds.project.name : 'My Application');

        me.setCfgValue('applicationId', 'com.mycompany.myAppID');
        me.setCfgValue('versionString', '1.0');
        me.setCfgValue('versionCode', 1);
        me.setCfgValue('icon', {
                "57":"resources/icons/Icon.png",
                "72":"resources/icons/Icon~ipad.png",
                "114":"resources/icons/Icon@2x.png",
                "144":"resources/icons/Icon~ipad@2x.png"
        });
        me.setCfgValue('inputPath', './');
        me.setCfgValue('outputPath', '../build/');
        me.setCfgValue('configuration', 'Debug');
        me.setCfgValue('platform', 'iOSSimulator');
        me.setCfgValue('deviceType', 'Universal');

        me.setCfgValue('androidAPILevel', '8');
        me.setCfgValue('permissions', [
            "INTERNET",
            "ACCESS_NETWORK_STATE",
            "CAMERA",
            "VIBRATE",
            "ACCESS_FINE_LOCATION",
            "ACCESS_COARSE_LOCATION",
            "CALL_PHONE"
        ]);
        me.setCfgValue('orientations', [
            "portrait",
            "landscapeLeft",
            "landscapeRight",
            "portraitUpsideDown"
        ]);
    },

    onCodeConfig: function(config) {
        var helpMap = xds.app.Help.getHelpJson(),
            configs,
            map = {};

        configs = Ext4.Array.merge(helpMap['Package.Settings.iOS'].configs, helpMap['Package.Settings.Android'].configs, helpMap['Package.Settings'].configs);
        Ext4.Array.each(configs, function(config) {
            map[config.name] = config;
        });
        config.helpMap = map;


        return config;
    },

    isResourceDefinition: function() {
        return true;
    },

    isOverridePossible: function() {
        return false;
    }
};

xds.component.Registry.addDefinition(xds.types.deploy.Package);
