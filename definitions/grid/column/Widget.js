xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Widget",
    typeAlias: 'widgetcolumn',

    toolbox: {
        name: 'Widget Column',
        iconCls: 'icon-grid-widget', // TODO: may need icon or need new classname
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },

    validChildTypes: ['component', 'widget'],
    singleChildTypes: ['component, widget'],

    // we don't allow editor here as it doesn't meet the intended use case for a widget column
    ignoreCfgs: ['widget', 'editor'],

    init: function() {
        var me = this;

        me.on({
            addchild: me.onAddChild,
            removechild: me.onRemoveChild,
            canvasconfig: me.onCanvasConfig,
            validate: me.onValidate
        });
    },

    onAddChild: function(child) {
        if (child.isType('component') || child.isType('widget')) {
            child.setReference('widget');
        }

        // validate the presence of a component or widget child
        this.validate();
    },

    onRemoveChild: function(child) {
        if (child.isType('component') || child.isType('widget')) {
            child.setReference(); // remove the reference in case this component is being moved / will live on
        }
        this.validate();
    },

    // the component must have a widget config or it will cause a framework error,
    // so we'll add a notice to the user that they need to add a widget.
    onCanvasConfig: function(config) {
        if (!config.widget) {
            config.widget = { xtype: 'container', html: 'add a widget' };
            delete config.dataIndex; // having a dataIndex with no widget will cause framework errors.
        }
        return config;
    },

    onValidate: function() {
        // widget column requires a component or widget as a child and a dataIndex to be set
        if (this.query('>component, >widget').length < 1) {
            return [xds.Resource.get('validation').widgetColumn];
        } else {
            return true;
        }
    }
});
