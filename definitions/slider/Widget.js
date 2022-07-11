xds.component.Registry.addDefinition({
    override: "Ext.slider.Widget",
    typeAlias: 'sliderwidget',
    mixin: ['baseview'],

    toolbox: {
        name: 'Slider Widget',
        iconCls: 'icon-slider',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    autoName: 'MySliderWidget'
});