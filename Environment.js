xds.helpDocQuery = '{0}.html';
xds.helpDocMethod = xds.helpDocQuery + '#method-{1}';

// an array of the help docs to load for this framework
xds.helpDocs = [
    'resources/help/doc_common.json',
    'resources/help/doc_ext74_modern.json'
];

xds.frameworkInfo = {
    basePath: 'http://cdn.sencha.com/ext/commercial/7.5.0/build/',
    jsFile: 'ext-modern-all.js',
    debugJsFile: 'ext-modern-all-debug.js',
    // rtl files are not avaliable for Modern build, leaving the ext classic files
    rtlJsFile: 'ext-all-rtl.js',
    rtlDebugJsFile: 'ext-all-rtl-debug.js'
};
