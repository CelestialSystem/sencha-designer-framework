xds.component.Registry.addDefinition({
    type: 'ariathemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-aria.json",
    themePkgName: 'theme-aria',
    originThemeName: 'aria',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-aria.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-aria/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-aria/resources/theme-aria-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-aria/resources/theme-aria-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-aria/theme-aria.js'
    },

    autoName: 'MyAriaTheme',

    toolbox: {
        name: 'Aria',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'classicthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-classic.json",
    themePkgName: 'theme-classic',
    originThemeName: 'classic',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-classic.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-classic/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-classic/resources/theme-classic-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-classic/resources/theme-classic-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-classic/theme-classic.js'
    },

    autoName: 'MyClassicTheme',

    toolbox: {
        name: 'Classic',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'neptunethemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-neptune.json",
    themePkgName: 'theme-neptune',

    originThemeName: 'neptune',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-neptune.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-neptune/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-neptune/resources/theme-neptune-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-neptune/resources/theme-neptune-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-neptune/theme-neptune.js'
    },

    // docClassName: 'Theme Override',
    autoName: 'MyNeptuneTheme',

    toolbox: {
        name: 'Neptune',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'neptunetouchthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-neptune-touch.json",
    themePkgName: 'theme-neptune-touch',

    originThemeName: 'neptune-touch',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-neptune-touch.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-neptune-touch/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-neptune-touch/resources/theme-neptune-touch-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-neptune-touch/resources/theme-neptune-touch-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-neptune-touch/theme-neptune-touch.js'
    },

    autoName: 'MyNeptuneTouchTheme',

    toolbox: {
        name: 'Neptune Touch',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'crispthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-crisp.json",
    themePkgName: 'theme-crisp',

    originThemeName: 'crisp',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-crisp.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-crisp/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-crisp/resources/theme-crisp-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-crisp/resources/theme-crisp-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-crisp/theme-crisp.js'
    },

    autoName: 'MyCrispTheme',

    toolbox: {
        name: 'Crisp',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'crisptouchthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-crisp-touch.json",
    themePkgName: 'theme-crisp-touch',

    originThemeName: 'crisp-touch',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-crisp-touch.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-crisp-touch/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-crisp-touch/resources/theme-crisp-touch-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-crisp-touch/resources/theme-crisp-touch-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-crisp-touch/theme-crisp-touch.js'
    },

    autoName: 'MyCrispTouchTheme',

    toolbox: {
        name: 'Crisp Touch',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'graythemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-gray.json",
    themePkgName: 'theme-gray',

    originThemeName: 'gray',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-gray.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    themeImgPath: 'theme-gray/resources/images',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-gray/resources/theme-gray-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-gray/resources/theme-gray-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-gray/theme-gray.js'
    },

    autoName: 'MyGrayTheme',

    toolbox: {
        name: 'Gray',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }

});

xds.component.Registry.addDefinition({
    type: 'tritonthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-triton.json",
    themePkgName: 'theme-triton',

    originThemeName: 'triton',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-triton.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-triton/resources/theme-triton-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-triton/resources/theme-triton-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-triton/theme-triton.js'
    },

    autoName: 'MyTritonTheme',

    toolbox: {
        name: 'Triton',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }
});

xds.component.Registry.addDefinition({
    type: 'graphitethemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-graphite.json",
    themePkgName: 'theme-graphite',

    originThemeName: 'graphite',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-graphite.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-graphite/resources/theme-graphite-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-graphite/resources/theme-graphite-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-graphite/theme-graphite.js'
    },

    autoName: 'MyGraphiteTheme',

    toolbox: {
        name: 'Graphite',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }
});

xds.component.Registry.addDefinition({
    type: 'materialthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/ext75-material.json",
    themePkgName: 'theme-material',

    originThemeName: 'material',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/ext75-material.css',
    themeResourcePath: 'resources/themer/resources/ext75',
    extractorPackage: 'ext75-compile',
    isSlicable: true,

    originData: {
        cssFile: 'ext75/framework/classic/theme-material/resources/theme-material-all.css',
        rtlCssFile: 'ext75/framework/classic/theme-material/resources/theme-material-all-rtl.css',
        jsFile: 'ext75/framework/classic/theme-material/theme-material.js'
    },

    autoName: 'MyMaterialTheme',

    toolbox: {
        name: 'Material',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }
});

