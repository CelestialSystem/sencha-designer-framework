xds.component.Registry.addDefinition({
    override: "Ext.window.Window",
    typeAlias: 'window',

    canvasAlias: 'widget.xdwindow',
    toolbox: {
        name: 'Window',
        iconCls: 'icon-window',
        category: 'Containers',
        groups: ['Views', 'Containers']
    },

    obscureCfgs: ['!focusOnToFront', '!shadow'],
    cfgs: [{
        name: 'defaultFocus',
        merge: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'hideMode',
        merge: true,
        editor: 'options',
        options: ['display', 'offsets', 'visibility']
    }],


    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.ex('validparent', me.onValidParent, me);
        me.on('beforecfgchange', me.onBeforeCfgChange, me);
        me.on('cfgchange', me.onCfgChange, me);
    },

    onSetup: function() {
        this.setCfgValue({
            title: 'My Window',
            width: 400,
            height: 250
        });
    },

    onValidParent: function(parent) {
        return parent.is('viewcategory');
    },

    onBeforeCfgChange: function(name, value) {
        // The framework throws an error with maximizable:true and header:false, so
        // prevent those from being set together.
        var me = this;
        if ((name === 'maximizable' && value === true && me.getCfgValue('header') === false) ||
            (name === 'header' && value === false && me.getCfgValue('maximizable') === true)) {
            xds.ui.Ack.display(xds.Resource.get('validation').window.maximizableWithHeaderFalse);
            return false;
        }
    },

    onCfgChange: function(name, value, oldValue) {
        if ((name === 'designer|initialView') && (value)) {
            this.setCfgValue('autoShow', true);
        }
    }
});
