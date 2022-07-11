Ext.define('xds.dtypes.ActionSheet', {
    extend: 'Ext.ActionSheet',
    alias: 'widget.xdactionsheet',

    // Have to define a config object or platformConfig won't apply (maybe a SDK bug?)
    config: {}

    // platformConfig: {
    //     theme: ['Blackberry'],
    //     // The bb10 theme defines actionsheet (aka crosscut menu) without an initial width
    //     // and then applies the width during the showAnimation. However, since we override
    //     // things in a way which skips animation, we end up with no width unless we set it.
    //     width: 250
    // }

});