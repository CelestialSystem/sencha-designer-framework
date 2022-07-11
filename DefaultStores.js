/*
 * This file defines default data stores to be made available to canvas components. They
 * are defined as plain configs and injected into the framework's StoreManager once the Touch
 * framework is loaded into the canvas iframe.
 */

xds.DefaultStores = [
    {
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        },
        storeId: '(none)',
        fields: [{
            name: 'string',
            type: 'string'
        }, {
            name: 'number',
            type: 'float'
        }, {
            name: 'date',
            type: 'date'
        },{
            name: 'bool',
            type: 'boolean'
        }],
        data: [
            { string: 'One', number: 12345, bool: true, date: new Date(2016, 6, 28) },
            { string: 'Two', number: 67890, bool: false, date: new Date(2016, 6, 27) },
            { string: 'Three', number: 59371, bool: true, date: new Date(2016, 6, 26) }
        ],
        grouper: {
            groupFn: function(record) {
                return record.get('string');
            }
        }
    },

    {
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        },
        storeId: '(chart-none)',
        fields: ['x', 'y', 'date', 'y1', 'y2', 'y3', 'open', 'low', 'high', 'close'],
        data: (function() {
            var y, y1, y2, y3;
            for (var data = [], i = 0; i < 8; i++) {
                y = +(('' + Math.PI).substr(3 + i, 2)); //repeatable random-ish series of numbers
                y1 = +(('' + Math.PI).substr(4 + i, 2));
                y2 = +(('' + Math.PI).substr(5 + i, 2));
                y3 = +(('' + Math.PI).substr(6 + i, 2));
                data.push({
                    x: 'Data ' + (i + 1),
                    y: y,
                    y1: y1,
                    y2: y2,
                    y3: y3,
                    date: new Date().add(Date.DAY, i).clearTime(),
                    // for candlestick:
                    open: y2 * 2,
                    low: y2 * 2 + y1 - y2,
                    high: y2 * 2 + y2 - y3,
                    close: y2 * 2 + y3 - y1
                });
            }
            return data;
        })()
    },

    {
        type: 'tree',
        storeId: '(tree-none)',
        fields: ['text', 'value'],
        // Use default proxy due to touch framework error otherwise
        proxy: {
            type: 'memory'
        },
        root: {
            text: 'Root',
            value: 14,
            expanded: true,
            children: [
                { text: "Node 1", leaf: true, value: 3},
                { text: "Node 2", expanded: true, value: 9, children: [
                    { text: "Node 2.a", leaf: true, value: 4},
                    { text: "Node 2.b", leaf: true, value: 5}
                ] },
                { text: "Node 3", leaf: true, value: 1 }
            ]
        }
    },

    {
        type: 'tree',
        storeId: '(hierarchy-none)',
        fields: ['text', 'value'],
        data: [
            { text: 'IT', expanded: true, value: 1, children: [
                { leaf: true, text: 'Norrin Radd', value: 2 },
                { leaf: true, text: 'Adam Warlock', value: 3 }
            ]},
            { text: 'Engineering', expanded: true, value: 4, children: [
                { leaf: true, text: 'Mathew Murdoch', value: 5 },
                { leaf: true, text: 'Lucas Cage', value: 6 }
            ]},
            { text: 'Support', expanded: true, value: 7, children: [
                { leaf: true, text: 'Peter Quill', value: 8 }
            ]}
            ]
    },

    {
        storeId: '(heatmap-none)',
        fields: [
            { name: 'date', type: 'date', dateFormat: 'Y-m-d' },
            'bucket',
            'count'
        ],
        data: [
            { date: "2012-07-20", bucket: 800, count: 119 },
            { date: "2012-07-20", bucket: 900, count: 123 },
            { date: "2012-07-20", bucket: 1000, count: 173 },
            { date: "2012-07-20", bucket: 1100, count: 226 },
            { date: "2012-07-20", bucket: 1200, count: 284 },
            { date: "2012-07-21", bucket: 800, count: 123 },
            { date: "2012-07-21", bucket: 900, count: 165 },
            { date: "2012-07-21", bucket: 1000, count: 237 },
            { date: "2012-07-21", bucket: 1100, count: 278 },
            { date: "2012-07-21", bucket: 1200, count: 338 },
            { date: "2012-07-22", bucket: 900, count: 154 },
            { date: "2012-07-22", bucket: 1000, count: 241 },
            { date: "2012-07-22", bucket: 1100, count: 246 },
            { date: "2012-07-22", bucket: 1200, count: 300 },
            { date: "2012-07-22", bucket: 1300, count: 305 },
            { date: "2012-07-23", bucket: 800, count: 120 },
            { date: "2012-07-23", bucket: 900, count: 156 },
            { date: "2012-07-23", bucket: 1000, count: 209 },
            { date: "2012-07-23", bucket: 1100, count: 267 },
            { date: "2012-07-23", bucket: 1200, count: 299 }
        ]
    },

    {
        type: 'calendar-calendars',
        storeId: '(calendars-none)'
    },

    {
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        },
        storeId: '(treegrouped-none)',
        fields: [{
            name: 'string',
            type: 'string'
        }, {
            name: 'number',
            type: 'float'
        }, {
            name: 'date',
            type: 'date'
        },{
            name: 'bool',
            type: 'boolean'
        }],
        data: [
            { string: 'One', number: 12345, bool: true, date: new Date(2016, 6, 28) },
            { string: 'Two', number: 67890, bool: false, date: new Date(2016, 6, 27) },
            { string: 'Three', number: 59371, bool: true, date: new Date(2016, 6, 26) }
        ],
        groupers: [
            'string'
        ]
    }
];