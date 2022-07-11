xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.ItemHighlight",
    typeAlias: 'itemhighlightinteraction',

    toolbox: {
        name: 'Item Highlight Interaction',
        iconCls: 'icon-interaction-itemhighlight',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyItemHighlightInteraction"
});
