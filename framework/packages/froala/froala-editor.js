Ext.define('Ext.froala.Mixin', {
    extend: 'Ext.Mixin',
    twoWayBindable: ['value'],
    defaultBindProperty: 'value',
    config: {
        activationKey: undefined,
        defaultEditor: {
            iconsTemplate: 'font_awesome_5'
        },
        value: '',
        editor: {}
    },
    isFroalaEditor: !0,
    isReady: !1,
    applyEditor: function (c) {
        var a = this,
            b;
        if (c === null) {
            b = a.getEditor();
            b.destroy();
            a.getFroalaEditorDomElement().innerHTML = '';
            return null
        }
        return a.createFroalaEditor(c)
    },
    createFroalaEditor: function (h) {
        var a = this,
            g = a.getDefaultEditor(),
            d, b, c = Ext.manifest.froala,
            e = a.getFroalaEditorDomElement(),
            f = Ext.Function.createBuffered(a.onFroalaContentChanged, 50, a);
        d = Ext.merge(h, g);
        c = a.getActivationKey() || (c && c['activation-key']);
        if (c) {
            d.key = c
        }
        b = new FroalaEditor(e, d, function () {
            b.component = a;
            a.monitorConfiguredListeners();
            b.isReady = !0;
            a.fireEvent('ready', a, b);
            b.events.on('contentChanged', f);
            b.html.set(a.getValue())
        });
        b.isReady = !1;
        return b
    },
    onFroalaContentChanged: function () {
        this.setValue(this.getEditor().html.get())
    },
    updateValue: function (b) {
        var d = this,
            a = this.getEditor(),
            c;
        if (a && a.isReady) {
            c = a.html.get();
            d.fireEvent('change', d, b);
            if (b !== c) {
                a.html.set(b)
            }
        }
    },
    updateDisabled: function (a) {
        var b = this.getEditor();
        this.callParent([a]);
        if (b) {
            b.edit[a ? 'off' : 'on']()
        }
    },
    privates: {
        monitorConfiguredListeners: function (c) {
            var a = this,
                b = Object.keys(a.hasListeners);
            b.forEach(function (b) {
                a.setupListener(b)
            })
        },
        froalaNamePrefixRe: /froala\./,
        isFroalaEvent: function (a) {
            return !!a.match(this.froalaNamePrefixRe)
        },
        translateFroalaEventName: function (a) {
            return a.replace(this.froalaNamePrefixRe, '')
        },
        setupListener: function (b) {
            var a = this,
                e = a.getEditor(),
                d, c;
            if (!a.isFroalaEvent(b)) {
                return
            }
            c = a.getFroalaEventsBeingMonitored();
            if (!c[b]) {
                d = a.translateFroalaEventName(b);
                e.events.on(d, createHandler(b, a));
                c[b] = !0
            }

            function createHandler(c) {
                return function () {
                    var d = Array.prototype.slice.call(arguments);
                    d.unshift(a);
                    a.fireEventArgs(c, d)
                }
            }
        },
        handleAddListener: function (c) {
            var b = this,
                a = b.getEditor();
            if (a && a.isReady) {
                b.setupListener(c)
            }
        },
        handleRemoveListener: function (b) {
            var a = this,
                c = a.getEditor();
            if (!(c && c.isReady)) {
                return
            }
            if (a.isFroalaEvent(b)) {
                if (!a.hasListeners[b]) {
                    delete a.getFroalaEventsBeingMonitored()[b]
                }
            }
        },
        getFroalaEventsBeingMonitored: function () {
            return (this.froalaEventsBeingMonitored = this.froalaEventsBeingMonitored || {})
        }
    },
    getFroalaEditorDomElement: function () {
        Ext.raise('getFroalaEditorDomElement must be overridden in the class using froala/Mixins')
    }
});
Ext.define('Ext.froala.Editor', {
    extend: 'Ext.Component',
    xtype: 'froalaeditor',
    mixins: {
        froalaeditor: 'Ext.froala.Mixin'
    },
    element: {
        reference: 'element',
        children: [{
            reference: 'editorElement',
            classList: [Ext.baseCSSPrefix + 'froala']
        }]
    },
    twoWayBindable: ['value'],
    defaultBindProperty: 'value',
    getFroalaEditorDomElement: function () {
        return this.editorElement.dom
    },
    doDestroy: function () {
        var a = this;
        a.setEditor(null);
        a.callParent()
    },
    updateValue: function (a) {
        this.mixins.froalaeditor.updateValue.call(this, a)
    },
    updateDisabled: function (a) {
        this.mixins.froalaeditor.updateDisabled.call(this, a)
    },
    privates: {
        doAddListener: function (b) {
            var c = this,
                a;
            a = c.callParent(arguments);
            this.mixins.froalaeditor.handleAddListener.call(this, b);
            return a
        },
        doRemoveListener: function (b) {
            var c = this,
                a;
            a = c.callParent(arguments);
            this.mixins.froalaeditor.handleRemoveListener.call(this, b);
            return a
        }
    }
});
Ext.define('Ext.froala.EditorField', {
    extend: 'Ext.field.Container',
    alias: 'widget.froalaeditorfield',
    requires: ['Ext.layout.Fit'],
    mixins: {
        froalaeditor: 'Ext.froala.Mixin'
    },
    xtype: 'froalaeditorfield',
    isField: !0,
    twoWayBindable: ['value'],
    defaultBindProperty: 'value',
    layout: 'fit',
    items: [{
        xtype: 'component',
        itemId: 'froalaComponent',
        cls: Ext.baseCSSPrefix + 'froala'
    }],
    getFroalaEditorDomElement: function () {
        return this.down('#froalaComponent').element.dom
    },
    doDestroy: function () {
        var a = this;
        a.setEditor(null);
        a.callParent()
    },
    updateValue: function (a) {
        this.mixins.froalaeditor.updateValue.call(this, a)
    },
    updateDisabled: function (a) {
        this.mixins.froalaeditor.updateDisabled.call(this, a)
    },
    privates: {
        doAddListener: function (b) {
            var c = this,
                a;
            a = c.callParent(arguments);
            this.mixins.froalaeditor.handleAddListener.call(this, b);
            return a
        },
        doRemoveListener: function (b) {
            var c = this,
                a;
            a = c.callParent(arguments);
            this.mixins.froalaeditor.handleRemoveListener.call(this, b);
            return a
        }
    }
});
