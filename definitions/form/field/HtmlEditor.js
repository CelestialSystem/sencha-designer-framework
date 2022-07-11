xds.component.Registry.addDefinition({
    override: "Ext.form.field.HtmlEditor",
    typeAlias: 'htmleditor',

    canvasAlias: 'widget.xdhtmleditor',
    toolbox: {
        name: 'HTML Editor',
        iconCls: 'icon-html-editor',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    transformGroup: 'fields',
    validChildTypes: [],

    ignoreCfgs: [
        'allowDomMove',
        'applyTo',
        'autoCreate',
        'autoEl',
        'autoScroll',
        'componentLayout',
        'data',
        'fieldCls',
        'html',
        'inputType',
        'invalidText',
        'msgFx',
        'readOnly',
        'tpl',
        'tplWriteMode',
        'layout'
    ],


    init: function() {
        var me = this;

        me.clearListenersByEvent('resizehandles');
        me.ex('resizehandles', me.onResizeHandles, me);
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            'layout|anchor': '100%',
            height: 150,
            fieldLabel: 'Label'
        });
    },

    onResizeHandles: function(side) {
        var me = this,
            parent = me.parent(),

            checkLayout = function(layout) {
                return parent.hasCfgValue('layout', layout);
            };

        if (parent && ['form', 'anchor', 'absolute'].some(checkLayout) && me.isCfgSet('layout|anchor')) {
            return false;
        }
    }
});
