Ext4.override(xds.app.Project, {

    themingInfo: {
        customThemeSupport: true,
        touchAppJson: false, // false - modern should work more like classic than like touch. This allow save theme package into app.json
        updateExtAppJsonTheme: true, // true - same reason as touchAppJson property above
        useInternalThemeForBuild: true,
        disableImagePane: false
    },

    getResourceItems: function() {
        return ['googlemapsjsresource', 'tritonthemeresource', 'iosthemeresource', 'materialthemeresource'];
    },

    deploy: function() {
        this.publishApp();
    },

    getNativeItems: function() {
        var me = this,
            selectedItem = this.settings.lastNativeBuildSelection,
            checkSelected = function(name, isDefault) {
                if (!selectedItem) {
                    return !!isDefault;
                }

                return selectedItem.value === name;
            },
            nativeItems = [
                new Ext.menu.Item({
                    name: 'addPackager',
                    itemText: 'Add Packager',
                    menu: {
                        items: [
                            new Ext.menu.CheckItem({
                                name: 'initCordova',
                                cls: 'build-check-item',
                                checked: false,
                                itemText: 'Cordova',
                                disabled: me.hideCordovaOption,
                                handler: function(item, cfg, source) {
                                    me.addCordovaOrPhoneGap('Cordova');
                                },
                                scope: me
                            }),
                            new Ext.menu.CheckItem({
                                name: 'initPhoneGap',
                                cls: 'build-check-item',
                                checked: false,
                                itemText: 'PhoneGap',
                                disabled: me.hidePhoneGapOption,
                                handler: function(item, cfg, source) {
                                    me.addCordovaOrPhoneGap('PhoneGap');
                                },
                                scope: me
                            })
                        ]
                    }
                }),
                new Ext.menu.Item({
                    name: 'buildAndRun',
                    itemText: 'Build and Run',
                    menu: {
                        items: [
                            new Ext.menu.Item({
                                name: 'buildNative',
                                itemText: 'Build Native',
                                menu: {
                                    items: [
                                        new Ext.menu.CheckItem({
                                            name: 'nativeBuild',
                                            cls: 'build-check-item',
                                            checked: checkSelected('nativeBuild', true),
                                            itemText: 'Build',
                                            disabled: !me.hasCordovaOrPhoneGap(),
                                            insertPosition: 1,
                                            nativeBuild: true,
                                            handler: function (item, cfg, source) {
                                                me.registerBuildSelection(item);
                                            },
                                            scope: me
                                        }),
                                        new Ext.menu.CheckItem({
                                            name: 'nativeBuildIOs',
                                            cls: 'build-check-item',
                                            checked: checkSelected('nativeBuildIOs'),
                                            itemText: 'IOs',
                                            disabled: !me.hasCordovaOrPhoneGap(),
                                            insertPosition: 1,
                                            nativeBuild: true,
                                            buildPlatform: 'ios',
                                            handler: function (item, cfg, source) {
                                                me.registerBuildSelection(item);
                                            },
                                            scope: me
                                        }),
                                        new Ext.menu.CheckItem({
                                            name: 'nativeBuildAndroid',
                                            cls: 'build-check-item',
                                            checked: checkSelected('nativeBuildAndroid'),
                                            itemText: 'Android',
                                            disabled: !me.hasCordovaOrPhoneGap(),
                                            insertPosition: 1,
                                            nativeBuild: true,
                                            buildPlatform: 'android',
                                            handler: function (item, cfg, source) {
                                                me.registerBuildSelection(item);
                                            },
                                            scope: me
                                        })
                                    ]
                                }
                            }),
                            new Ext.menu.Item({
                                name: 'emulateNative',
                                itemText: 'Build Native & Emulate',
                                menu: {
                                    items: [
                                        new Ext.menu.CheckItem({
                                            name: 'emulate',
                                            cls: 'build-check-item',
                                            checked: checkSelected('emulate'),
                                            itemText: 'Build & Emulate',
                                            disabled: !me.hasCordovaOrPhoneGap(),
                                            insertPosition: 2,
                                            nativeBuild: true,
                                            handler: function (item, cfg, source) {
                                                me.registerBuildSelection(item);
                                            },
                                            scope: me
                                        }),
                                        new Ext.menu.CheckItem({
                                            name: 'emulateIOs',
                                            cls: 'build-check-item',
                                            checked: checkSelected('emulateIOs'),
                                            itemText: 'IOs',
                                            disabled: !me.hasCordovaOrPhoneGap(),
                                            insertPosition: 1,
                                            nativeBuild: true,
                                            buildPlatform: 'ios',
                                            handler: function (item, cfg, source) {
                                                me.registerBuildSelection(item);
                                            },
                                            scope: me
                                        }),
                                        new Ext.menu.CheckItem({
                                            name: 'emulateAndroid',
                                            cls: 'build-check-item',
                                            checked: checkSelected('emulateAndroid'),
                                            itemText: 'Android',
                                            disabled: !me.hasCordovaOrPhoneGap(),
                                            insertPosition: 1,
                                            nativeBuild: true,
                                            buildPlatform: 'android',
                                            handler: function (item, cfg, source) {
                                                me.registerBuildSelection(item);
                                            },
                                            scope: me
                                        })
                                    ]
                                }
                            })
                        ]
                    }
                })];

        return nativeItems;
    },

    getWebActions: function() {
        var me = this,
            webActions = [new Ext.menu.CheckItem({
                name: 'webBuild',
                cls: 'build-check-item',
                checked: true,
                itemText: 'Build web app',
                nativeBuild: false,
                handler: function(item, cfg, source) {
                    me.registerBuildSelection(item);
                },
                scope: me
            })];

        return webActions;
    },

    getSettingsActions: function() {
        var me = this,
            settingsActions = [new Ext.menu.Item({
                name: 'buildSettings',
                itemText: 'Build Settings...',
                handler: function(item, cfg, source) {
                    me.build.selectProfile(item);
                },
                scope: me
            })];

        return settingsActions;
    },

    getProjectActions: function() {
        var me = this,
            buildWebAction, buildNativeAction,
            getWebBuildOptions = function() {
                var items =[];

                items.push(me.getWebActions());
                items.push(me.getSettingsActions());

                return items;
            },
            getNativeBuildOptions = function() {
                var items =[];

                items.push(me.getNativeItems());

                return items;
            };

        buildWebAction = new Ext.ButtonGroup({
            cls: 'xds-build-group',
            ref: 'buildBtnGroup',
            text: '',
            items: [{
                xtype: 'button',
                iconCls: 'menu-simulate',
                tooltip: xds.app.Resource.get('toolbarTips').generate,
                disabled: true,
                handler: function() {
                    me.fireLastSelectedBuild(null, false);
                }
            },{
                xtype: 'button',
                text: 'Build web app',
                disabled: true,
                menu: {
                    cls: 'xds-menu',
                    items: getWebBuildOptions(),
                    listeners: {
                        beforeshow: function () {
                            var menu = this,
                                newMenuOptions = [];

                            // clear all the menu options so we can re-add them with new settings
                            menu.removeAll();

                            newMenuOptions.push(me.getWebActions());
                            // push the refactored menu states
                            newMenuOptions.push(me.getSettingsActions());

                            menu.add(newMenuOptions);

                            // if we're adding cordova or phonegap for the first time, lets
                            // update the bit on the menu object so we don't keep running
                            // this menu update code.
                            //menu.projectHasCordovaOrPhoneGap = me.hasCordovaOrPhoneGap();

                        }
                    }
                }
            }]
        });

        buildNativeAction = new Ext.ButtonGroup({
            cls: 'xds-build-group',
            ref: 'buildBtnGroup',
            text: '',
            items: [{
                xtype: 'button',
                iconCls: 'menu-build-native',
                tooltip: xds.app.Resource.get('toolbarTips').generateNative,
                disabled: !me.hideCordovaOption,
                handler: function() {
                    me.fireLastSelectedBuild(null, true);
                }
            },{
                xtype: 'button',
                text: 'Build native app',
                disabled: true,
                menu: {
                    cls: 'xds-menu',
                    items: getNativeBuildOptions(),
                    listeners: {
                        beforeshow: function () {
                            var menu = this,
                                newMenuOptions = [];

                            // clear all the menu options so we can re-add them with new settings
                            menu.removeAll();

                            //newMenuOptions.push(me.getWebActions());
                            // push the refactored menu states
                            newMenuOptions.push(me.getNativeItems());

                            menu.add(newMenuOptions);

                            // if we're adding cordova or phonegap for the first time, lets
                            // update the bit on the menu object so we don't keep running
                            // this menu update code.
                            menu.projectHasCordovaOrPhoneGap = me.hasCordovaOrPhoneGap();
                        }
                    }
                }
            }]
        });

        me.build = Ext4.create("xds.app.Build");

        me.actions = [buildWebAction, buildNativeAction];

        // Pre-populate the build menu with the last option selected
        me.populateBuildMenuDisplay(buildWebAction, false);
        me.populateBuildMenuDisplay(buildNativeAction, true);

        return me.actions;
    },

    // when we setup the menu options we'll want to know if the user has  cordova
    // and/or phonegap installed on their machine.
    checkNativeBuildAssets: function() {
        var me = this,
            resource = xds.app.Resource.get("CMD"),
            buildToolsToCheck = [{
                type: 'cordovaVersion',
                friendlyName: 'Cordova',
                varName: 'hideCordovaOption'
            },{
                type: 'phonegapVersion',
                friendlyName: 'PhoneGap',
                varName: 'hidePhoneGapOption'
            }];

        // if the project already has cordova or phonegap initialized, then
        // we don't want the user to be able to see the option to do so again.
        // we also don't want to have to run the serive layer calls again.
        if (me.hasCordovaOrPhoneGap()) {
            me.hideCordovaOption = true;
            me.hidePhoneGapOption = true;
        } else {
            Ext4.Array.each(buildToolsToCheck, function(buildTool) {
                // check to see if we should hide the native build tool init options.
                me.hideInitBuildOptions(buildTool.type).then(function(hideBuildTool) {
                    me[buildTool.varName] = hideBuildTool;

                    // If we need to hide the native build tool option; log it out and let the user know.
                    if (hideBuildTool) {
                        xds.app.Log.warning(String.format(resource.nativeToolsNotInstalled, buildTool.friendlyName), "Cmd");
                    }
                });
            });
        }
    },

    cleanupProjectActions: function() {
        var me = this;

        delete me.actions;
    },

    enableProjectActions: function() {
        var me = this;

        Ext4.Array.each(this.actions, function enable(action) {
            if (action.isXType('buttongroup')) {
                action.items.each(enable);
            } else {
                if (action.tooltip === xds.app.Resource.get('toolbarTips').generateNative) {
                    if (me.hasCordovaOrPhoneGap()) {
                        action.enable();
                    }
                    else {
                        action.disable();
                    }
                }
                else {
                    action.enable();
                }
            }
        });
    },

    disableProjectActions: function() {
        Ext4.Array.each(this.actions, function disable(action) {
            if (action.isXType('buttongroup')) {
                action.items.each(disable);
            } else {
                action.disable();
            }
        });
    }
});
