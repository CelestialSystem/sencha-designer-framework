xds.component.Registry.addDefinition({
    override: "Ext.draw.Container",
    typeAlias: 'draw',

    toolbox: {
        name: 'Draw Container',
        iconCls: 'icon-component',
        category: 'Standard',
        groups: ['Views', 'Charts']
    },
    autoName: 'MyDrawContainer',

    initialTitle: null,

    ignoreCfgs: [
        'layout',
        'autoScroll'
    ],

    /*
    NOTE: Even though the sencha-charts draw container's class docs show an example using 'items'
    to statically configure a set of rendered sprites, that doesn't actually work as advertised;
    the items are expected to be Surface instances, and/or docked components, not sprites.
    It does appear that using 'sprites' instead of 'items' may result in the desired behavior, but
    'sprites' is marked as private so we shouldn't expose that unless it gets made public. So
    for now we cannot provide a way to statically configure sprites; users will just have to do
    that via procedural code like `drawCt.getSurface().add({type:'circle', ...})`
    */

    init: function() {
        var me = this;
        me.on({
            add: me.onAddOrRestore,
            restore: me.onAddOrRestore,
            addchild: me.onAddChild,
            validate: me.onValidate,
            canvasconfig: me.onCanvasConfig,
            scope: me
        });

        me.on('subtreechange', me.onSubtreeChange, me, {buffer: 100});
    },

    onAddOrRestore: function() {
        xds.app.PackageManager.addFrameworkPackage("sencha-charts");
    },

    onAddChild: function(child) {
        // Default child components to docked, since non-docked children are an error
        if (child.isType('component') && !child.isCfgSet('dock')) {
            child.setCfgValue('dock', 'top');
        }
    },

    onValidate: function() {
        // Draw container allows docked children, but expects its 'items' collection to
        // only contain Surface instances, so warn about non-docked items. We'll also
        // strip them out of the canvasconfig to prevent canvas errors.
        var kids = this.children(),
            i = kids.length;
        while (i--) {
            if (kids[i].getReference().name === 'items' && kids[i].isType('component')) {
                return xds.Resource.get('validation').drawContainer.undockedChild;
            }
        }
    },

    onSubtreeChange: function(instance, event, args) {
        // Re-validate when changing 'dock' of children
        if (event === 'cfgchange' && args[0] === 'dock') {
            this.validate();
        }
    },

    onCanvasConfig: function(config) {
        // Non-docked child items will cause canvas errors because the framework only
        // expects the 'items' collection to contain Surface instances. We'll strip them
        // out here to prevent canvas errors, and warn the user in onValidate.
        delete config.items;
        return config;
    }
});