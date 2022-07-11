xds.component.Registry.addDefinition({
    override: "Ext.chart.CartesianChart",
    typeAlias: 'cartesian',

    toolbox: {
        // name and iconCls omitted so it does not appear as its own toolbox item, but still defines
        // a category so the BuiltIn chart types can use it as default when saving back to the toolbox
        category: 'Charts'
    },

    init: function() {
        var me = this;
        me.on('cfgchange', me.onCfgChange, me);
    },

    onCfgChange: function(name, value, oldValue) {
        var me = this,
            axis, tmp;

        // If flipXY has been switched, we can find the two child axis
        // and swap their positions.
        if (name === 'flipXY') {
            axis = me.query('axis');
            if (axis.length != 2) {
                return;
            }
            tmp = axis[0].getCfgValueOrDefault('position');
            axis[0].setCfgValue('position', axis[1].getCfgValueOrDefault('position'));
            axis[1].setCfgValue('position', tmp);
        }
    }
});
