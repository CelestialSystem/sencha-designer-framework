xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Panel",
    typeAlias: 'calendar',

    autoName: 'MyCalendar',
    initialTitle: null,

    toolbox: {
        name: 'Calendar Panel',
        iconCls: 'icon-calendar-panel',
        category: 'Calendar',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'views',
        merge: true,
        type: 'refgroup',
        refSelector: 'calendarbase',
        createTypes: ['calendarday', 'calendardays', 'calendarmonth', 'calendarweek', 'calendarweeks']
    }, {
        name: 'calendarList',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendarlist',
        createTypes: ['calendarlist'],
        max: 1,
        bindable: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'createButton',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendarcreatebutton',
        createTypes: ['calendarcreatebutton'],
        max: 1,
        bindable: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'nextButton',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendarnextbutton',
        createTypes: ['calendarnextbutton'],
        max: 1,
        bindable: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'previousButton',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendarpreviousbutton',
        createTypes: ['calendarpreviousbutton'],
        max: 1,
        bindable: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'todayButton',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendartodaybutton',
        createTypes: ['calendartodaybutton'],
        max: 1,
        bindable: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'dateTitle',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendardatetitle',
        createTypes: ['calendardatetitle'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'sideBar',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendarsidebar',
        createTypes: ['calendarsidebar'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'switcher',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendarswitcher',
        createTypes: ['calendarswitcher'],
        max: 1,
        bindable: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'titleBar',
        merge: false,
        type: 'refgroup',
        refSelector: 'calendartitlebar',
        createTypes: ['calendartitlebar'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'createButtonPosition',
        merge: true,
        editor: 'options',
        options: ['sideBar', 'titleBar']
    }, {
        name: 'store',
        merge: false,
        type: 'store',
        noneStore: '(calendars-none)',
        storeSelector: 'calendars',
        codeValueConfigName: 'designer|userClassName'
    }, {
        name: 'switcherPosition',
        merge: true,
        editor: 'options',
        options: ['sideBar', 'titleBar']
    }],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;

        if (!me.hasWidthFromParentLayout()) {
            me.setCfgValue('width', 700);
            me.setCfgValue('height', 400);
        }
    }
});
