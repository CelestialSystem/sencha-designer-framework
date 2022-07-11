xds.component.Registry.addDefinition({
    override: "Ext.form.Panel",
    typeAlias: 'form',

    // Mix in basic form since all its configs and events are passed through
    mixin: ['Ext.form.Basic'],

    toolbox: {
        name: 'Form Panel',
        iconCls: 'icon-form',
        category: 'Containers',
        groups: ['Forms','Views']
    },
    autoName: 'MyForm',

    cfgs: [{
        name: 'layout',
        merge: true,
        editor: 'options',
        options: xds.component.Registry.getAllVisibleLayouts(),
        alternates: null
    }],

    init: function() {
        var me = this;
        me.on('actionmenu', me.onActionMenu, me);
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            title: 'My Form',
            bodyPadding: 10
        });
    },

    onActionMenu: function() {
        var me = this;

        if (!me.actions) {
            me.actions = [
                new Ext.Action({
                    text: 'Form Builder',
                    iconCls: 'icon-auto-columns',
                    order: -3,
                    handler: function() {
                        xds.helpers.Manager.openHelper('Form', {
                            values: {
                                instance: me
                            }
                        });
                    },
                    hideWhen: function(instance) {
                        return instance.is('propertygrid');
                    },
                    scope: me
                })
            ];
        }

        return me.actions;
    }

});
