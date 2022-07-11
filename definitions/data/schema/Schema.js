xds.component.Registry.addDefinition({
    override: "Ext.data.schema.Schema",
    typeAlias: 'dataschema',
    mixin: ['baseutil', 'managedbehavior'],

    validParentTypes: ['modelcategory'],
    validAsTopInstance: true,
    validChildTypes: [],

    toolbox: {
        name: 'Schema',
        iconCls: 'icon-schema',
        category: 'Data Models',
        groups: ['Data','Models']
    },

    cfgs: [
        // NOTE: Ideally we would override `proxy` here as a refgroup to allow configuration
        // using the proxy/reader/writer toolbox definitions as children. However, `proxy`
        // within a Schema allows object templates for all of its sub properties, which
        // would likely require changes to the validation for all proxy-related configs.
        // For now we'll just leave it as an object and perhaps revisit later.
    ],


    init: function() {
        var me = this;
        me.on({
            create: me.onCreate,
            restore: me.onRestore,
            'delete': me.onDelete,
            beforecfgchange: me.onBeforeCfgChange,
            cfgchange: me.onCfgChange,
            duplicate: me.onDuplicate,
            setup: me.onSetup,
            scope: me
        });
    },

    onCreate: function() {
        xds.app.manager.Schema.onInstanceCreate(this);
    },

    onRestore: function() {
        xds.app.manager.Schema.onInstanceCreate(this);
    },

    onDelete: function() {
        xds.app.manager.Schema.onInstanceRemove(this);
    },

    onBeforeCfgChange: function(name, value, oldValue) {
        // alias is required
        if (name === 'designer|userAlias' && !value) {
            return false;
        }
    },

    onCfgChange: function(name, value, oldValue) {
        if (name === 'designer|userAlias') {
            this.setUserAlias(value);
            xds.app.manager.Schema.onInstanceRename(this, name, oldValue);
        }
    },

    onDuplicate: function() {
        this.assignUniqueUserAlias();
    },

    onSetup: function() {
        this.assignUniqueUserAlias();
    },

    assignUniqueUserAlias: function() {
        var userAlias = xds.component.Definition.getUniqueName(this.getDefaultUserAlias());
        this.setUserAlias(userAlias);
    }

});
