Ext4.override(xds.app.Project, {

    themingInfo: {
        customThemeSupport: true,
        updateExtAppJsonTheme: true,
        appJsonCssResourcesCopyOnly: false,
        updateBootstrapCssOnPreview: true
    },

    getResourceItems: function(){
        return ['classicthemeresource', 'neptunethemeresource', 'crispthemeresource', 'tritonthemeresource'];
    },

    deploy: function() {
        this.publishApp();
    },

    getPackageActions: function() {
        if (!xds.actions.publishProject) {
            xds.actions.publishProject = new Ext.Action({
                itemText: 'Publish',
                disabled: true,
                handler: function(item, cfg, source) {
                    var show = xds.settings.getSetting('xds-dirty-on-deploy'),
                        resource = xds.app.Resource.get('dirtyDialog').deploy,
                        dlg;

                    if (xds.project && xds.project.isDirty() && show) {
                        dlg = xds.actions.createDirtyDialog(resource.title, resource.msg, 'xds-dirty-on-deploy', xds.project.publishApp, xds.project);
                        dlg.show();
                    } else {
                        xds.project.publishApp();
                    }
                    xds.mixpanel.TrackerManager.publish('waypoint', ['Deploy Project', {input: source || 'Toolbar'}]);
                }
            });
        }
        return [xds.actions.publishProject];
    },

    getProjectActions: function() {
        var me = this,
            buildAction,
            getBuildOptions = function() {
                var items =[];

                 items.push(new Ext.menu.CheckItem({
                    name: 'webBuild',
                    cls: 'build-check-item',
                    checked: true,
                    itemText: 'Build web app',
                    handler: function(item, cfg, source) {
                        me.registerBuildSelection(item);
                    },
                    scope: me
                }));

                items.push({
                    xtype: 'menuseparator'
                });

                 items.push(new Ext.menu.Item({
                    name: 'buildSettings',
                    itemText: 'Build Settings...',
                    handler: function(item, cfg, source) {
                        me.build.selectProfile(item);
                    },
                    scope: me
                }));

                 return items;
            };

        buildAction = new Ext.ButtonGroup({
            cls: 'xds-build-group',
            ref: 'buildBtnGroup',
            text: '',
            items: [{
                xtype: 'button',
                iconCls: 'menu-simulate',
                tooltip: xds.app.Resource.get('toolbarTips').generate,
                disabled: true,
                handler: function() {
                    me.fireLastSelectedBuild();
                },
                scope: me
            },{
                xtype: 'button',
                text: 'Build web app',
                disabled: true,
                menu: {
                    cls: 'xds-menu',
                    items: getBuildOptions()
                }
            }]
        });

        me.build = Ext4.create("xds.app.Build");

        me.actions = [buildAction];

        // Pre-populate the build menu with the last option selected
        me.populateBuildMenuDisplay(buildAction);

        return me.actions;
    },

    cleanupProjectActions: function() {
        var me = this;

        delete me.actions;
    },

    enableProjectActions: function() {
        Ext4.Array.each(this.actions, function enable(action) {
            if (action.isXType('buttongroup')) {
                action.items.each(enable);
            } else {
                action.enable();
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
