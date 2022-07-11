xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.RowExpander",
    typeAlias: 'gridrowexpander',
    ptype: 'rowexpander',

    validParentTypes: ['tablepanel'],

    toolbox: {
        name: 'Row Expander Plugin',
        iconCls: 'icon-grid-rowexpander',
        category: ['Grid Plugins'],
        groups: ['Grids']
    },
    autoName: 'MyRowExpanderPlugin',


    // RowExpander plugin is different than all other plugins in that it gets
    // added to the gridpanel, but it fires its events on the gridview. Our
    // normal eventsFiredOnParent mechanism doesn't handle that asymmetry, so
    // for now we'll handle it here as a one-off. If in the future we have
    // other plugins with a similar pattern we can look into abstracting it.
    eventsFiredOnGridView: ['expandbody', 'collapsebody'],

    init: function() {
        this.on({
            setup: this.onSetup,
            create: this.onCreateOrRestore,
            restore: this.onCreateOrRestore,
            remove: this.onRemove,
            scope: this
        });

        // Remove the grid view events so they don't show up on this instance
        this.eventsFiredOnGridView.forEach(this.removeEventDef, this);
    },

    onSetup: function() {
        // Add the rowBodyTpl
        var rowBodyTplCfg = this.getCfg('rowBodyTpl');
        if (!rowBodyTplCfg.hasInstance()) {
            rowBodyTplCfg.setTemplateValue('rowBodyTpl');
        }
    },

    onCreateOrRestore: function() {
        var parentGrid = this.parent(),
            existingView = parentGrid.child('tableview');
        if (existingView) {
            this.addEventsToGridView(existingView);
        }
        parentGrid.on({
            addChild: this.onParentGridAddChild,
            removechild: this.onParentGridRemoveChild,
            scope: this
        });
    },

    onRemove: function(parentGrid) {
        var existingView = parentGrid.child('tableview');
        if (existingView) {
            this.removeEventsFromGridView(existingView);
        }
        parentGrid.un({
            addChild: this.onParentGridAddChild,
            removechild: this.onParentGridRemoveChild,
            scope: this
        });
    },

    onParentGridAddChild: function(child) {
        if (child.isType('tableview')) {
            this.addEventsToGridView(child);
        }
    },

    onParentGridRemoveChild: function(child) {
        if (child.isType('tableview')) {
            this.removeEventsFromGridView(child);
        }
    },

    addEventsToGridView: function(gridView) {
        this.eventsFiredOnGridView.forEach(function(eventName) {
            gridView.addEventDef(this.xeventDefs[eventName]);
        }, this);
    },

    removeEventsFromGridView: function(gridView) {
        this.eventsFiredOnGridView.forEach(gridView.removeEventDef, gridView);
    }
});
