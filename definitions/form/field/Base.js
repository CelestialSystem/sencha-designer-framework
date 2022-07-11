xds.component.Registry.addDefinition({
    override: "Ext.form.field.Base",
    typeAlias: 'basefield',

    transformGroup: 'fields',
    fullscreenAtTopLevel: false,

    // setting to empty array so that basiceventbinding is added to valid child types
    validChildTypes: [],

    obscureCfgs: ['checkChangeEvents', 'dirtyCls', 'fieldCls', 'focusCls', 'readOnlyCls'],
    ignoreCfgs: [
        'autoEl',
        'autoScroll',
        'componentLayout',
        'data',
        'html',
        'tpl',
        'tplWriteMode'
    ],

    cfgs: [{
        name: 'inputType',
        merge: true,
        editor: 'combo',
        options: [
            'text',
            'password',
            'radio',
            'file',
            'url',
            'email',
            'button',
            'checkbox',
            'color',
            'date',
            'datetime',
            'datetime-local',
            'hidden',
            'image',
            'month',
            'number',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'time',
            'week'
        ]
    }, {
        name: 'name',
        merge: true,
        regex: xds.Resource.get('validName').regex,
        regexText: xds.Resource.get('validName').regexText
    }],

    inlineEdit: [{
        cfg: 'fieldLabel',
        textEl: '.x-form-item-label'
    }],


    init: function() {
        var me = this;

        me.ex('setup');
        me.on('setup', me.onSetup, me);
        me.on('resizehandles', me.onResizeHandles, me);
    },

    onSetup: function() {

        var me = this,
            parent = me.parent(),
            resources = xds.app.Resource.get('fields');

        // Set default label for fields
        me.setCfgValue('fieldLabel', resources.labelDefaultValue);

        // Set default box label for checkbox fields
        if (me.isType('checkboxfield')) {
            // Leave empty if grid column editor
            if (parent && !parent.isType('gridcolumn') || !parent) {
                me.setCfgValue('boxLabel', resources.boxLabelDefaultValue);
            }
        }

        if (parent) {
            var layout = parent.getCfgValue('layout') || parent.getCfgDefaultValue('layout');
            if ((layout == 'form' || layout == 'anchor') && !me.isCfgSet('width')) {
                me.setCfgValue('layout|anchor', '100%');
            }
        }

    },

    onResizeHandles: function(side) {
        var me = this;

        var parent = me.parent();
        if (parent && parent.isType('gridcolumn')) {
            return false;
        }

        if (side != 'Right') {
            return false;
        }
    }
});