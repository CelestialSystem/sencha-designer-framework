xds.component.Registry.addDefinition({
    type: 'libraryresource',
    inherits: 'baselibraryresource',

    themes: {
        aria: {
            basePath: 'classic/theme-aria/',
            cssFile: 'resources/theme-aria-all.css',
            rtlCssFile: 'resources/theme-aria-all-rtl.css',
            jsFile: 'theme-aria.js',
            pkgName: 'theme-aria'
        },
        triton: {
            basePath: 'classic/theme-triton/',
            cssFile: 'resources/theme-triton-all.css',
            rtlCssFile: 'resources/theme-triton-all-rtl.css',
            jsFile: 'theme-triton.js',
            pkgName: 'theme-triton'
        },
        classic: {
            basePath: 'classic/theme-classic/',
            cssFile: 'resources/theme-classic-all.css',
            rtlCssFile: 'resources/theme-classic-all-rtl.css',
            jsFile: 'theme-classic.js',
            pkgName: 'theme-classic'
        },
        crisp: {
            basePath: 'classic/theme-crisp/',
            cssFile: 'resources/theme-crisp-all.css',
            rtlCssFile: 'resources/theme-crisp-all-rtl.css',
            jsFile: 'theme-crisp.js',
            pkgName: 'theme-crisp'
        },
        'crisp-touch': {
            basePath: 'classic/theme-crisp-touch/',
            cssFile: 'resources/theme-crisp-touch-all.css',
            rtlCssFile: 'resources/theme-crisp-touch-all-rtl.css',
            jsFile: 'theme-crisp-touch.js',
            pkgName: 'theme-crisp-touch'
        },
        gray: {
            basePath: 'classic/theme-gray/',
            cssFile: 'resources/theme-gray-all.css',
            rtlCssFile: 'resources/theme-gray-all-rtl.css',
            jsFile: 'theme-gray.js',
            pkgName: 'theme-gray'
        },
        neptune: {
            basePath: 'classic/theme-neptune/',
            cssFile: 'resources/theme-neptune-all.css',
            rtlCssFile: 'resources/theme-neptune-all-rtl.css',
            jsFile: 'theme-neptune.js',
            pkgName: 'theme-neptune'
        },
        'neptune-touch': {
            basePath: 'classic/theme-neptune-touch/',
            cssFile: 'resources/theme-neptune-touch-all.css',
            rtlCssFile: 'resources/theme-neptune-touch-all-rtl.css',
            jsFile: 'theme-neptune-touch.js',
            pkgName: 'theme-neptune-touch'
        },
        graphite: {
            basePath: 'classic/theme-graphite/',
            cssFile: 'resources/theme-graphite-all.css',
            rtlCssFile: 'resources/theme-graphite-all-rtl.css',
            jsFile: 'theme-graphite.js',
            pkgName: 'theme-graphite'
        },
        'theme-material': {
            basePath: 'classic/theme-material/',
            cssFile: 'resources/theme-material-all.css',
            rtlCssFile: 'resources/theme-material-all-rtl.css',
            jsFile: 'theme-material.js',
            pkgName: 'theme-material'
        }
    },

    customThemes: {},

    cfgs: [{
        name: 'theme',
        type: 'string',
        defaultValue: 'triton',
        editor: 'options',
        options: [] //populated in beforeshowcfgoptions event handler
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
        }
    },

    updateCanvasThemeResources: function() {
        var manager = xds.ui.canvas.Manager,
            basePath = 'ext75/framework/',
            themes = this.themes,
            themeName = this.getCfgValueOrDefault('theme'),
            themeInfo;

        var customThemes = xds.component.themeVar.Manager.getCustomThemes();

        //if it is a custom known theme
        if (!customThemes[themeName]) {
            //if uknown fall back to showing the default theme in the canvas
            if (!themes.hasOwnProperty(themeName)) {
                themeName = this.getCfgDefaultValue('theme');
            }

            themeInfo = themes[themeName];

            if (themeInfo.basePath) {
                basePath += themeInfo.basePath;
            }

            manager.updateResource('xdsLibraryCss', 'path', basePath + themeInfo.rtlCssFile); //always use the rtl css in the canvas
            manager.updateResource('xdsThemeJs', 'path', themeInfo.jsFile ? basePath + themeInfo.jsFile : 'about:blank');
        }
    },

    getUpgradePaths: function() {
        return [];
    },



    /**
     * @override
     * Overridden to handle including the -rtl file, and to add the supplementary JS
     * file for the chosen theme if there is one.
     */
    getLibraryJsUrls: function() {
        var me = this,
            frameworkInfo = xds.frameworkInfo,
            basePath = me.getCfgValueOrDefault('basePath'),
            themes = me.themes,
            themeName = me.getCfgValueOrDefault('theme'),
            themeInfo = themes.hasOwnProperty(themeName) ? themes[themeName] : null,
            rtl = xds.project.usesRtl(),
            urls = [],
            customTheme;

        // Add the main library JS
        urls.push(basePath + (
            me.getCfgValue('debug') === true ?
                (rtl ? frameworkInfo.rtlDebugJsFile : frameworkInfo.debugJsFile) :
                (rtl ? frameworkInfo.rtlJsFile : frameworkInfo.jsFile)
        ));

        //check if we found default theme info, if not check if we have a custom theme
        //to work with
        if (!themeInfo) {
            //get the custom theme
            customTheme = xds.component.themeVar.Manager.getCustomThemes()[themeName];
            if (customTheme) {
                //if we found custom theme
                //set the themeInfo to the parent/origin of the custom theme (if any)
                //since we don't handle JS files in the custom theme directly
                themeInfo = themes[customTheme.theme.originThemeName];
            }
        }

        // Add the theme JS if the current theme has one
        if (themeInfo && themeInfo.jsFile && !xds.app.Builder.projectHasCMD(xds.project)) {
            if (themeInfo.basePath) {
                basePath += themeInfo.basePath;
            }
            urls.push(basePath + themeInfo.jsFile);
        }

        return urls;
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

        if (xds.app.Builder.projectHasCMD(xds.project)) {
            //cmd we handle through sencha.cfg or bootstrap.css on preview
            return [];
        }

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

        return [basePath + (xds.project.usesRtl() ? themeInfo.rtlCssFile : themeInfo.cssFile)];
    },

    getPkgNameForThemeName: function(name) {


        var themeInfo = this.themes[name];

        if (!themeInfo) {
            return 'theme-triton';
        }

        return themeInfo.pkgName;

    },

    getPathForTheme: function(themeName) {
        var themeInfo = this.themes[themeName] || this.themes['triton'];
        return themeInfo.rtlCssFile;
    }

});
