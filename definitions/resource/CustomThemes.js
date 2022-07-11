xds.component.Registry.addDefinition({
    type: 'neptunethemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/modern75-neptune.json",
    themePkgName: 'theme-neptune',
    originThemeName: 'neptune',
    sdkThemeName: 'Neptune',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/modern75-neptune.css',
    themeResourcePath: 'resources/themer/resources/ext74',
    themeImgPath: 'theme-neptune/resources/images',
    extractorPackage: 'ext74-compile',

    startScssFileContent: "@import 'sencha-modern/default';\n@import 'sencha-modern/default/all';\n",

    originData: {
        cssFile: 'modern75/framework/modern/theme-neptune/resources/theme-neptune-all.css',
        rtlCssFile: 'modern75/framework/modern/theme-neptune/resources/theme-neptune-all-rtl.css',
        jsFile: 'modern75/framework/modern/theme-neptune/theme-neptune.js'
    },

    autoName: 'MyNeptuneTheme',

    toolbox: {
        name: 'Neptune',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }
});

xds.component.Registry.addDefinition({
    type: 'tritonthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/modern75-triton.json",
    themePkgName: 'theme-triton',
    originThemeName: 'triton',
    sdkThemeName: 'Triton',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/modern75-triton.css',
    themeResourcePath: 'resources/themer/resources/ext74',
    themeImgPath: 'theme-triton/resources/images',
    extractorPackage: 'ext74-compile',

    startScssFileContent: "@import 'sencha-modern/default';\n@import 'sencha-modern/default/all';\n",

    originData: {
        cssFile: 'modern75/framework/modern/theme-triton/resources/theme-triton-all.css',
        rtlCssFile: 'modern75/framework/modern/theme-triton/resources/theme-triton-all-rtl.css',
        jsFile: 'modern75/framework/modern/theme-triton/theme-triton.js'
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
    type: 'iosthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/modern75-ios.json",
    themePkgName: 'theme-ios',
    originThemeName: 'ios',
    sdkThemeName: 'iOS',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/modern75-ios.css',
    themeResourcePath: 'resources/themer/resources/ext74',
    themeImgPath: 'theme-ios/resources/images',
    extractorPackage: 'ext74-compile',

    startScssFileContent: "@import 'sencha-modern/default';\n@import 'sencha-modern/default/all';\n",

    originData: {
        cssFile: 'modern75/framework/modern/theme-ios/resources/theme-ios-all.css',
        rtlCssFile: 'modern75/framework/modern/theme-ios/resources/theme-ios-all-rtl.css',
        jsFile: 'modern75/framework/modern/theme-ios/theme-ios.js'
    },

    autoName: 'MyIosTheme',

    toolbox: {
        name: 'iOS',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }
});

xds.component.Registry.addDefinition({
    type: 'materialthemeresource',
    inherits: 'customthemeresource',

    templateDataPath: "resources/themer/template-data/modern75-material.json",
    themePkgName: 'theme-material',
    originThemeName: 'material',
    sdkThemeName: 'Material',
    themePrecompiledCssPath: 'resources/themer/precompiled-css/modern75-material.css',
    themeResourcePath: 'resources/themer/resources/ext74',
    themeImgPath: 'theme-material/resources/images',
    extractorPackage: 'ext74-compile',

    startScssFileContent: "@import 'sencha-modern/default';\n@import 'sencha-modern/default/all';\n",

    originData: {
        cssFile: 'modern75/framework/modern/theme-material/resources/theme-material-all.css',
        rtlCssFile: 'modern75/framework/modern/theme-material/resources/theme-material-all-rtl.css',
        jsFile: 'modern75/framework/modern/theme-material/theme-material.js'
    },

    autoName: 'MyMaterialTheme',

    toolbox: {
        name: 'Material',
        category: 'Themes',
        groups: ['Themes'],
        iconCls: 'icon-custom-theme'
    }
});
