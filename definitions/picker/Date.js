xds.component.Registry.addDefinition({
    override: "Ext.picker.Date",
    typeAlias: "datepicker",
    canvasAlias: "xddatepicker",

    autoName: "MyDatePicker",

    toolbox: {
        name: "Date Picker",
        iconCls: "icon-datepicker",
        category: "Pickers",
        groups: ["Containers", "Views"]
    },

    validChildTypes : ["button", "toolbar", "titlebar"],

    cfgs: [
        {
            name: "value",
            merge: true,
            type: "date",
            encodeType: "object",
            formatter: function(v) {
                return Ext4.encode({
                    year: v.getFullYear(),
                    month: v.getMonth() + 1,
                    day: v.getDate()
                });
            },
            alternates: [{
                type: 'object',
                encodeType: 'raw'
            }]
        }, {
            name: 'doneButton',
            merge: true,
            type: 'auto',
            allowBoolean: true,
            allowNumber: false,
            alternates: [{
                type: 'refgroup',
                refSelector: 'datepickerdonebutton',
                createTypes: ['datepickerdonebutton'],
                max: 1
            }]
        }
    ]
});
