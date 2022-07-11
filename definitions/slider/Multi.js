xds.component.Registry.addDefinition({
    override: "Ext.slider.Multi",
    typeAlias: 'multislider',

    toolbox: {
        name: 'Multi Slider',
        iconCls: 'icon-slider-multi',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyMultiSlider',

    ignoreCfgs: [
        'componentLayout',
        'inputType'
    ],

    cfgs: [{
        name: 'animate',
        merge: true,
        type: 'boolean',
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'decimalPrecision',
        merge: true,
        type: 'number',
        alternates: [{
            type: 'boolean'
        }]
    }, {
        name: 'useTips',
        merge: true,
        type: 'boolean',
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.clearListenersByEvent('flyout');
        me.on('resizehandles', me.onResizeHandles, me);
        me.on('cfgchange', me.onCfgChange, me);
        me.ex('transform', me.onTransform, me);
    },

    onTransform: function(from, toType, snapshot) {

        // ensure "values" array property is set
        // attempt to use incoming value if number
        var value = from.getCfgValue("value"),
            values = from.getCfgValue("values");
        if (!values) {
            if (value === null || value === undefined) {
                value = 40;
            }
            else if (!Ext.isNumber(value)) {
                value = parseInt(value);
                if (!Ext.isNumber(value)) {
                    value = 40;
                }
            }
            this.setCfgValue("values", [10, value]);
        }

    },

    onCfgChange: function(name, value, oldValue) {
        var me = this;

        switch (name) {
            case 'minValue':
                if (!me.isCfgSet('value')) {
                    me.setCfgDefaultValue('value', value || 0);
                }
                break;
            case 'vertical':
                var width = me.getCfgValue('width');
                var height = me.getCfgValue('height');

                if (value && width) {
                    me.setCfgValue({
                        width: undefined,
                        height: width
                    });
                } else if (height) {
                    me.setCfgValue({
                        width: height,
                        height: undefined
                    });
                }
                break;
        }
    },

    onSetup: function() {
        var me = this,
            parent = me.parent(),
            cfg = {
                values: [10, 40]
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

    onResizeHandles: function(side) {
        if (side == 'Corner' || side == 'Bottom'){
            return false;
        } else {
            return true;
        }
    }
});