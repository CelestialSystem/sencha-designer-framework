xds.component.Registry.addDefinition({
    override: "Ext.data.field.Field",
    typeAlias: ['datafield', 'data.field.auto'],
    mixin: ['basedata', 'datafieldbehavior'],

    fieldType: 'auto', // value for the 'type' config

    // typeMap is a mapping from fieldType shortcuts to full classNames used
    // for transforming using the existing "type" config
    typeMap: {
        auto: 'Ext.data.field.Field',
        'boolean': 'Ext.data.field.Boolean',
        'date': 'Ext.data.field.Date',
        'float': 'Ext.data.field.Number',
        'int': 'Ext.data.field.Integer',
        number: 'Ext.data.field.Number',
        string: 'Ext.data.field.String'
    },

    toolbox: {
        name: 'Field',
        iconCls: 'icon-data-field',
        category: 'Data Models',
        groups: ['Data','Models']
    },

    transformGroup: 'datafields',

    validParentTypes: ['storebase', 'datamodel'],
    validChildTypes: ['abstractvalidation', 'basicfunction', 'datavalidation'],

    duplicateIgnoreCfgs: ['name'],

    // Default priorities put 'reference' before 'name' which isn't appropriate here
    displayNamePriorities: [
        'designer|displayName',
        'name'
    ],

    cfgs: [{
        name: 'calculate',
        merge: true,
        params: [{
            name: 'data',
            type: 'Object'
        }]
    }, {
        name: 'convert',
        merge: true,
        params: [
            {
                "name": "v",
                "type": "Object"
            },
            {
                "name": "rec",
                "type": "Ext.data.Model"
            }
        ],
        injectInCanvas: true
    }, {
        name: 'mapping',
        merge: true,
        alternates: [{
            type: 'function',
            params: [{
                name: 'data'
            }]
        }]
    }, {
        name: 'reference',
        merge: false,
        type: 'model',
        alternates: [{
            type: 'object'
        }, {
            type: 'string'
        }]
    }, {
        name: 'serialize',
        merge: true,
        params: [{
            name: 'value',
            type: 'Object'
        }, {
            name: 'record',
            type: 'Ext.data.Model'
        }]
    }, {
        name: 'sortType',
        merge: false,
        type: 'string',
        editor: 'options',
        options: [
            'asDate',
            'asFloat',
            'asInt',
            'asText',
            'asUCString',
            'asUCText'
        ],
        alternates: [{
            type: 'function',
            params: [{
                name: 'value',
                type: 'Object'
            }]
        }]
    }, {
        // We include a type cfg as a convenience for transforming between field classes
        name: 'type',
        group: '(Architect)',
        type: 'string',
        includeInCodeGen: false,
        includeInSnapshot: false,
        changeEventOptions: {
            disableHistory: true // we don't want undo/redo stack to be affected by this config
        },
        editor: 'options',
        options: [
            'auto',
            'boolean',
            'date',
            'float',
            'int',
            'string'
        ]
    }, {
        name: 'validators',
        merge: false,
        displayName: 'Validations',
        type: 'refgroup',
        refSelector: 'datavalidation',
        createTypes: ['emailvalidation', 'exclusionvalidation', 'formatvalidation', 'inclusionvalidation',
            'lengthvalidation', 'presencevalidation', 'rangevalidation', 'cidrv4validation', 'cidrv6validation',
            'currencyusvalidation', 'datevalidation', 'datetimevalidation', 'ipaddressvalidation', 'numbervalidation',
            'phonevalidation', 'timevalidation', 'urlvalidation', 'notnullvalidation']
    }, {
        name: "persist",
        type: "boolean",
        defaultValue: "true",
        merge: false
    }],

    init: function() {
        var me = this;
        me.on('afterinit', me.onAfterInit, me);
        me.on('beforecfgchange', me.onBeforeCfgChange, me);
        me.on('cfgchange', me.onCfgChange, me);
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);
        me.on('restore', me.onRestore, me);
    },

    onAfterInit: function() {
        // set the default value for the 'type' pseudo-config to match the current derived field type
        this.setCfgDefaultValue('type', this.fieldType);
    },

    onBeforeCfgChange: function(name, value, oldValue) {
        // if name is "mapping", let's make sure that mapping is safe to execute as javascript
        // to avoid causing an exception.
        if (name === 'mapping') {
            var re = /[\[\.]/,
                i = String(value).search(re),
                errFound = false,
                valueTest;
            if (i >= 0) {
                try {
                    // This call checks to see if that mapping will be valid. It mimics / is culled straight
                    // from the Ext source in the createAccessor function.
                    valueTest = Ext4.functionFactory('obj', 'return obj' + (i > 0 ? '.' : '') + value);
                } catch(e) {
                    errFound = true;
                    xds.ui.Ack.display(xds.Resource.store.modelManager.errors.exceptionEncounteredOnFieldMapping);
                }
            }
            if (errFound) {
                return false;
            }
        } 
    },

    onCfgChange: function(name, value, oldValue) {
        if (name === 'type' && value) {
            this.updateClassName(value);
        }
    },

    onRestore: function() {
        var type = this.getCfgValue('type');
        if (type) {
            this.updateClassName(type);
        }
    },

    onCanvasConfig: function(config) {
        // Add the type property
        config.type = this.fieldType;
        return config;
    },

    onCodeConfig: function(config) {
        var fieldType = this.getCreateAlias() || this.fieldType;

        config.configs.forEach(function(cfg) {
            var val, model, schema, ns;

            // The 'reference' config must use the fully-qualified class name of the associated model
            if (cfg.name === 'reference' && this.flyCfg('reference').getType() === 'model') {
                val = xds.project.getAppName() + '.model.' + cfg.rawValue;

                // In Ext5+, there might be a custom schema associated with the model, which might
                // define a namespace for resolving short names; if that's present then we want to
                // strip that namespace off the beginning of the fully-qualified model reference
                // so it can be resolved properly.
                model = this.up('datamodel');
                if (model && model.hasCfg('schema')) {
                    schema = model.flyCfg('schema').getValueInstance();
                    if (schema) {
                        ns = schema.getCfgValue('namespace');
                        if (ns && val.indexOf(ns + '.') === 0) {
                            val = val.substring(ns.length + 1);
                        }
                    }
                }

                cfg.value = cfg.rawValue = val;
            }
        }, this);

        // Add the type property
        if (fieldType !== 'auto') {
            config.configs.unshift({
                name: 'type',
                type: 'string',
                value: fieldType,
                rawValue: fieldType
            });
        }

        return config;
    },

    updateClassName: function(type) {
        // perform a transform to the appropriate type.
        if (!this.typeMap[type]) {
            //<debug>
            console.error('Error: no typemap present for ' + type + ' - skipping transform.');
            //</debug>
        } else if (this.typeMap[type] !== this.getType()) {
            // if there's a type change, perform a transform.
            this.transform(this.typeMap[type]);
        }
    }

});