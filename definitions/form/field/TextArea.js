xds.component.Registry.addDefinition({
    override: "Ext.form.field.TextArea",
    typeAlias: 'textareafield',

    toolbox: {
        name: 'Text Area',
        iconCls: 'icon-textarea',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    obscureCfgs: ['enterIsSpecial'],
    ignoreCfgs: [
        'componentLayout',
        'inputType'
    ],


    init: function() {
        var me = this;

        me.clearListenersByEvent('resizehandles');
        me.ex('resizehandles', me.onResizeHandles, me);
    },

    onResizeHandles: function(side) {
        var me = this,
            parent = me.parent(),

            checkLayout = function(layout) {
                return parent.hasCfgValue('layout', layout);
            };

        if (parent && ['form', 'anchor', 'absolute'].some(checkLayout) && me.isCfgSet('layout|anchor')){
            return false;
        }
    }
});