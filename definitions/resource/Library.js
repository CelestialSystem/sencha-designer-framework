xds.component.Registry.addDefinition({
    type: 'libraryresource',
    inherits: 'baselibraryresource',

    themes: {
        Neptune: {
            basePath: 'modern/theme-neptune/',
            cssFile: 'resources/theme-neptune-all.css',
            rtlCssFile: 'resources/theme-neptune-all-rtl.css',
            jsFile: 'theme-neptune.js',
            pkgName: 'theme-neptune'
        },
        Triton: {
            basePath: 'modern/theme-triton/',
            cssFile: 'resources/theme-triton-all.css',
            rtlCssFile: 'resources/theme-triton-all-rtl.css',
            jsFile: 'theme-triton.js',
            pkgName: 'theme-triton'
        },
        IOs: {
            basePath: 'modern/theme-ios/',
            cssFile: 'resources/theme-ios-all.css',
            rtlCssFile: 'resources/theme-ios-all-rtl.css',
            jsFile: 'theme-ios.js',
            pkgName: 'theme-ios'
        },
        Material: {
            basePath: 'modern/theme-material/',
            cssFile: 'resources/theme-material-all.css',
            rtlCssFile: 'resources/theme-material-all-rtl.css',
            jsFile: 'theme-material.js',
            pkgName: 'theme-material'
        }
    },

    emptyCss: 'resources/css/empty.css',

    customThemes: {},

    cfgs: [{
        name: 'theme',
        type: 'string',
        defaultValue: 'Triton',
        editor: 'options',
        options: [] //populated in beforeshowcfgoptions event handler
    },{
        name: 'exportAppliedTheme',
        displayName: 'Export Applied Theme',
        type: 'boolean',
        defaultValue: true,
        group: '(Cmd)'
    }],

    init: function() {
        var me = this;
        me.on({
            create: me.onCreate,
            restore: me.onRestore,
            beforeshowcfgoptions: me.onBeforeShowCfgOptions,
            cfgchange: me.onCfgChange,
            scope: me
        });
    },

    onCreate: function() {
        this.updateCanvasThemeResources();
    },

    onRestore: function() {
        this.updateCanvasThemeResources();
    },

    onBeforeShowCfgOptions: function(name, options) {
        if (name === 'theme') {
            // Grab the known theme names from the 'themes' info collection above
            var themes = this.themes;
            Object.keys(themes).sort().forEach(function(name) {
                options.push([name, name]);
            });

            //custom themes
            var customThemes = xds.component.themeVar.Manager.getCustomThemes();
            Object.keys(customThemes).sort().forEach(function(name) {
                options.push([name, name]);
            });
            this.customThemes = customThemes;
        }
    },

    onCfgChange: function(name, value) {
        if (name === 'theme') {
            var project = xds.project;
            this.updateCanvasThemeResources();
            this.publish('project:themechange', [this.getCfgValueOrDefault('theme')], function() {
                return project === xds.project; //don't fire if a new project has started in the meantime
            });
        } else if (name === 'exportAppliedTheme') {
            xds.component.themeVar.Manager.bufferedVerifyExportAndUpdateMessagesForTouch.delay(50);
        }
    },

    updateCanvasThemeResources: function() {
        var manager = xds.ui.canvas.Manager,
            basePath = 'modern76/framework/',
            themes = this.themes,
            themeName = this.getCfgValueOrDefault('theme'),
            themeInfo;


        var customThemes = xds.component.themeVar.Manager.getCustomThemes();

        if (!customThemes[themeName]) {
            // If it's a custom theme, fall back to showing the default theme in the canvas
            if (!themes.hasOwnProperty(themeName)) {
                themeName = this.getCfgDefaultValue('theme');
            }
            themeInfo = themes[themeName];

            if (themeInfo.basePath) {
                basePath += themeInfo.basePath;
            }

            manager.updateResource('xdsLibraryCss', 'path', basePath + themeInfo.cssFile);
        }
    },

    getUpgradePaths: function() {
        return [];
    },

    /**
     * @override
     */
    getLibraryCssUrls: function() {
        var me = this,
            basePath = me.getCfgValueOrDefault('basePath'),
            themes = me.themes,
            themeName = me.getCfgValueOrDefault('theme'),
            themeInfo = themes.hasOwnProperty(themeName) ? themes[themeName] : null,
            customTheme;

        //check if we found default theme info, if not check if we have a custom theme
        //to work with
        if (!themeInfo) {
            //get the custom theme
            customTheme = xds.component.themeVar.Manager.getCustomThemes()[themeName];
        }

        // If they've specified an unknown theme then we won't link to any CSS, and
        // they'll just have to add it as a custom CSS resource.
        if (!themeInfo) {
            return [];
        }

        if (themeInfo.basePath) {
            basePath += themeInfo.basePath;
        }


        return [basePath + themeInfo.cssFile];
    },

    getPkgNameForThemeName: function(name) {
        var themeInfo = this.themes[name];
        return themeInfo ? themeInfo.pkgName : 'theme-triton';
    },

    getPathForTheme: function(themeName) {
        var themeInfo = this.themes[themeName] || this.themes['Triton'];
        return themeInfo.cssFile;
    }
});