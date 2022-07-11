xds.component.Registry.addDefinition({
    override: "Ext.ProgressBar",
    typeAlias: 'progressbar',

    toolbox: {
        name: 'ProgressBar',
        iconCls: 'icon-progressbar',
        category: 'Standard',
        groups: ['Forms','Views']
    },

    ignoreCfgs: [
        // Component
        'autoEl',
        'autoScroll',
        'componentLayout',
        'data',
        'html',
        'renderTpl',
        'tpl',
        'tplWriteMode'
    ],

    init: function() {
        var me = this;
        me.on('cfgchange', me.onCfgChange, me);
        me.ex('setup', me.onSetup, me);
        me.on('resizehandles', me.onResizeHandles, me);
    },

    onCfgChange: function(name, value) {
        switch (name) {
            case 'value':
                var orig = value;
                value = parseFloat(value);
                var changed = false;

                if (value > 1.0) {
                    value = 1.0;
                } else if (value < 0.0) {
                    value = 0.0;
                }
                if (orig != value) {
                    this.setCfgValue('value', value);
                }
                break;
        }
    },

    onSetup: function() {
        var me = this;
        me.setCfgValue('value', 0.4);
        if (!me.parent()) {
            me.setCfgValue('width', 200);
        }
    },

    onResizeHandles: function(side){
        if (side == 'Corner' || side == 'Bottom') {
            return false;
        } else {
            return true;
        }
    }
});
