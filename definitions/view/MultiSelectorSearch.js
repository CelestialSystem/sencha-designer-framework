xds.component.Registry.addDefinition({
    override: "Ext.view.MultiSelectorSearch",
    typeAlias: 'multiselector-search',
    iconCls: 'icon-multiselector-search',

    validParentTypes: ['multiselector'],

    ignoreCfgs: ['title'],

    cfgs: [{
        name: 'store',
        merge: false,
        type: 'store',
        required: true
    },{
        name: 'field',
        merge: false,
        type: 'datafield',
        required: true
    }],

    init: function() {
        this.on('validate', this.onValidate);
    },

    onValidate: function() {
        if (!this.isCfgSet('store') || !this.isCfgSet('field')) {
            return xds.Resource.get('validation').multiSelectorSearch;
        }
        return true;
    }
});