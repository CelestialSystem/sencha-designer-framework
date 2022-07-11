xds.component.Registry.addDefinition({
    override: "Ext.slider.Single",
    typeAlias: 'slider',

    toolbox: {
        name: 'Slider',
        iconCls: 'icon-slider',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MySlider',

    ignoreCfgs: [
        'values'
    ],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.on('canvasclick', me.onCanvasClick, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent(),
            cfg = {
                value: 40
            },
            defaultWidth = 400;

        if (parent) {
            var layout = parent.getCfgValue('layout') || parent.getCfgDefaultValue('layout');
            if ((layout !== 'form' && layout !== 'anchor') && !me.isCfgSet('width')) {
                cfg.width = parent.getCfgValue('width') || defaultWidth;
            }
        } else {
            cfg.width = defaultWidth;
        }
        me.setCfgValue(cfg);
    },

    onCanvasClick: function(e) {
        var me = this;
        e = e.browserEvent;
        xds.canvas.messaging.call('getSliderValueForPoint', me.getId(), e.originalX, e.originalY).then(function(value) {
            if (Ext4.isNumber(value)) {
                me.setCfgValue('value', value);
            }
        });
    }
});