xds.component.Registry.addDefinition({
    override: "Ext.app.Controller",
    typeAlias: ['abstractcontroller','controller'],

    mixin: ['basecontroller', 'controllerbehavior'],

    validChildTypes: ['controlleraction', 'basicfunction', 'controllerref', '!customevent'],

    toolbox: {
        name: 'Controller',
        iconCls: 'icon-controller',
        category: 'Behaviors',
        groups: ['Behaviors']
    },

    ignoreCfgs: [
        'eventsRefGroup',
        'customEventsRefGroup'
    ],

    cfgs: [{
        name: 'init',
        type: 'function',
        params: [{
            name: 'application',
            type: 'Ext.app.Application'
        }]
    },{
        name: 'models',
        merge: false,
        type: 'typedarray',
        memberConfig: {
            type: 'model',
            confirmDelete: false
        }
    },{
        name: 'onLaunch',
        type: 'function',
        params: [{
            name: 'application',
            type: 'Ext.app.Application'
        }]
    },{
        name: 'refs',
        merge: false,
        displayName: 'References',
        type: 'refgroup',
        refSelector: 'controllerref',
        createTypes: ['controllerref']
    },{
        name: 'stores',
        merge: false,
        type: 'typedarray',
        memberConfig: {
            type: 'store',
            // controllers allow for all store types
            storeSelector: '',
            codeValueConfigName: 'designer|userClassName',
            confirmDelete: false
        }
    },{
        name: 'views',
        merge: false,
        type: 'typedarray',
        memberConfig: {
            type: 'view',
            confirmDelete: false
        }
    }],

    modifyInitMethod: function(method) {
        if (method.fnName === "init") {
            var me = this,
                appListenersHash = me.getAppListenersHash(),
                hasAppListeners = !!Ext4.Object.getSize(appListenersHash),
                codeGen = xds.component.CodeGeneration,
                templateHelpers = codeGen.templateHelpers,
                code;

            if (hasAppListeners) {
                xds.util.LineTracker.resetLineTracker();

                // Run the incoming fn code through formatting so the line counter accounts for it
                code = templateHelpers.getIndentedBlock(method.fnHandler || '', 2);

                if (hasAppListeners) {
                    if (code) {
                        code += templateHelpers.newline() + templateHelpers.newline();
                    }
                    code += templateHelpers.encodeAppListeners(appListenersHash);
                }

                method.fnHandler = code;

                // to maintain lineTracker state as modifyMethod is called before generateCode
                method.lineTracker = xds.util.LineTracker.getLineTracker(); // note: getLineTracker clones the tracker object
            }
        }
        return method;
    }
});
