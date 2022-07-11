xds.layouts.HBox = {
    type:'hbox',
    xcls:'Ext.layout.container.HBox',
    text: 'HBox Layout',

    cfgs: [{
        name: 'flex',
        type: 'number'
    },{
        name: 'margins',
        type: 'string'
    }],
    
    "eventDefs": [],

    layoutCfgs : [{
        name: 'align',
        type: 'string',
        editor: 'options',
        options:['top', 'middle', 'bottom', 'stretch', 'stretchmax'],
        defaultValue: 'top'
    },{
        name: 'pack',
        type: 'string',
        editor: 'options',
        options:['start', 'center', 'end'],
        defaultValue: 'start'
    },{
        name: 'padding',
        type: 'auto',
        defaultValue: 0
    },{
        name: 'stretchMaxPartner',
        type: 'string'
    }],

    onBeforeAdd: function(parentInstance, childInstance) {
        var width = childInstance.isCfgSet('width'),
            flex  = childInstance.getCfgValue('layout|flex'),
            dock  = childInstance.isCfgSet('dock');

        // explicitly check undefined here, because null means
        // the user has checked I don't ever want this value.
        if (!(width || dock) && (flex === undefined) && !childInstance.is('splitter')) {
            childInstance.setCfgValue('layout|flex', 1);
        }
    },

    onInit: function(ct, isRestoring) {
        // Ext's default of 'top' doesn't make much sense
        // lets default designers align to stretch.
        var alignCfg = 'container|align';
        if (!isRestoring && !ct.isCfgSet(alignCfg) && !ct.is('toolbar')) {
            ct.setCfgValue(alignCfg, 'stretch');
        }
    }
};
xds.component.Registry.addLayout(xds.layouts.HBox);