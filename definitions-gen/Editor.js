xds.component.Registry.addDefinition({
    "type": "Ext.Editor",
    "className": "Ext.Editor",
    "classAlias": "widget.editor",
    "inherits": "Ext.container.Container",
    "autoName": "MyEditor",
    "cfgs": [
        {
            "name": "alignment",
            "type": "string",
            "defaultValue": "c-c?"
        },
        {
            "name": "allowBlur",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoSize",
            "type": "boolean",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "cancelOnEsc",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "completeOnEnter",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "constrain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "field",
            "type": "object"
        },
        {
            "name": "hideEl",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "ignoreNoChange",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "offsets",
            "type": "array",
            "defaultValue": [
                0,
                0
            ]
        },
        {
            "name": "parentEl",
            "type": "string",
            "defaultValue": "document.body"
        },
        {
            "name": "revertInvalid",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "shadow",
            "type": "boolean",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "swallowKeys",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "updateEl",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "value",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforecomplete",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.Editor",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "startValue",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "beforestartedit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.Editor",
                    "optional": true
                },
                {
                    "name": "boundEl",
                    "type": "Ext.dom.Element",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "canceledit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.Editor",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "startValue",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "complete",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.Editor",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "startValue",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "specialkey",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.Editor",
                    "optional": true
                },
                {
                    "name": "field",
                    "type": "Ext.form.field.Field",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "startedit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.Editor",
                    "optional": true
                },
                {
                    "name": "boundEl",
                    "type": "Ext.dom.Element",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
