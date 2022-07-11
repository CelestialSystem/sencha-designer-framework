// To make the framework's theme-specific config overrides work, we have to define
// Ext.theme.name before the main library JS file is loaded, because platformConfig
// is applied at class definition time. Since the theme stylesheet element is added
// first we can derive the theme name from the CSS file name.
(function(global) {
    var mapping = {
            'sencha-touch': 'Default',
            'bb10': 'Blackberry',
            'wp': 'Windows'
        },
        cssMatch = document.getElementById('xdsLibraryCss').href.match(/\/([^\.\/]+)\.css/),
        cssFileName = cssMatch ? cssMatch[1] : 'sencha-touch',
        themeName = mapping.hasOwnProperty(cssFileName) ? mapping[cssFileName] : 'Default',
        searchThemeName = false;


    function getSearchVar(name) {
        var varStrings = window.location.search.replace(/^\?/,'').split('&'),
            parts;
        for (var i = 0; i < varStrings.length; i++) {
            parts = varStrings[i].split('=');
            if (parts.length !== 2) {
                continue;
            }
            if (decodeURIComponent(parts[0]) === name) {
                return decodeURIComponent(parts[1]);
            }
        }
        return false;
    }

    //check for any theme info we might have passed
    if (location.search) {
        searchThemeName = getSearchVar('themename');
        if (searchThemeName) {
            themeName = searchThemeName;
        }
    }

    global.Ext = global.Ext || {};
    Ext.theme = {
        name: themeName
    };
})(this);
