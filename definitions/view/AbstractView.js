xds.component.Registry.addDefinition({
    override: "Ext.view.AbstractView",
    typeAlias: 'abstractdataview',

    obscureCfgs: ['loadingCls', 'selectedItemCls'],
    cfgs: [{
        name: 'loadingText',
        merge: true,
        alternates:[{
            type: 'boolean'
        }]
    }, {
        name: 'store',
        merge: false,
        type: 'store',
        codeValueConfigName: 'designer|userClassName',
        alternates: [{
            type: 'object'
        }]
    }],


    init: function() {
        var me = this;
        me.subscribe('canvas:dataview:itemcountmismatch', me.onCanvasItemCountMismatch, me);
        me.subscribe('canvas:dataview:itemcountok', me.onCanvasItemCountOk, me);
    },

    onCanvasItemCountMismatch: function(instanceId, elementCount, recordCount) {
        var me = this,
            resource = xds.app.Resource.get('dataviewItemCountMismatch'),
            msg = me.lastItemCountMsg;
        if (instanceId === me.getId()) {
            if (msg) {
                me.removeMessage(msg);
            }
            msg = {
                text: Ext4.String.format(resource.text, elementCount, recordCount),
                iconCls: resource.iconCls
            };
            me.lastItemCountMsg = msg;
            me.addMessage(msg);
        }
    },

    onCanvasItemCountOk: function(instanceId) {
        var me = this,
            lastItemCountMsg = me.lastItemCountMsg;
        if (lastItemCountMsg && instanceId === me.getId()) {
            me.removeMessage(lastItemCountMsg);
        }
    }
});
