xds.component.Registry.addDefinition({
    override: "Ext.field.Field",
    typeAlias: "field",

    "transformGroup": "fields",
    "toolbox": null,

    "fullscreenAtTopLevel": false,

    obscureCfgs: ['component', 'requiredCls'],
    ignoreCfgs: ["tpl", "tplWriteMode", "data"],

    inlineEdit: [{
        cfg: 'label',
        textEl: '.x-form-label > span',
        dblClickEl: '.x-form-label'
    }],

    cfgs: [{
        name: 'validators',
        merge: true,
        type: 'string',
        alternates: [{
            type: 'regex'
        }, {
            type: 'function',
            params: ['value']
        }, {
            type: 'array'
        }, {
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.on({
            flyout: me.onFlyout,
            beforetransform: me.onBeforeTransform,
            linkedinstance: me.onLinkedInstance,
            scope: me
        });
    },

    onSetup: function() {
        // Set default label
        if (this.hasCfg('label') && !this.isCfgSet('label')) {
            this.setCfgValue('label', 'Field');
        }
    },

    onFlyout: function() {
        var flyoutFields = [{
            xtype: 'flyoutcombo',
            fieldLabel: 'Name for submit',
            data: this.getFieldNameOptions(),
            bindTo: {
                name: 'name',
                event: ['change', 'select']
            }
        }];

        if (this.hasCfg('labelAlign')) {
            flyoutFields.unshift({
                xtype: 'flyoutselect',
                fieldLabel: 'Label Alignment',
                data: ['bottom', 'left', 'right', 'top'],
                bindTo: {
                    name: 'labelAlign',
                    event: 'select'
                }
            });
        }

        return flyoutFields;
    },

    onBeforeTransform: function(toType, snapshot) {
        // we need to clear out certain fields of the input, since there is a chance that they will be an invalid value
        var userConfig = snapshot.userConfig;
        if (userConfig) {
            delete userConfig.value;
            delete userConfig.placeHolder;
        }
    },

    onLinkedInstance: function(linkedInstance) {
        // Copy our custom methods over
        linkedInstance.getFieldNameOptions = this.getFieldNameOptions;
        linkedInstance.normalizeForFieldName = this.normalizeForFieldName;
    },

    /**
     * Return an array of options for the field flyout's 'name' combo.
     * Default implementation provides a normalized version of the field label.
     */
    getFieldNameOptions: function() {
        return [this.normalizeForFieldName(this.getCfgValue('label') || this.getName())];
    },

    normalizeForFieldName: function(name) {
        return name.replace(/\W/g, '-').toLowerCase();
    },

    isBaseUiApplicable: function(baseUi) {
        return true;
    }
});
