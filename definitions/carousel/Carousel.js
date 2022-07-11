xds.component.Registry.addDefinition({
    override: "Ext.carousel.Carousel",
    typeAlias: "carousel",

    "toolbox": {
        "name": "Carousel",
        "iconCls": "icon-carousel",
        "category": "Containers",
        "groups": ["Containers",'Views']
    },

    ignoreCfgs: [
        'scrollable'
    ],

    cfgs: [{
        // This is normally added by Card layout, but since Carousel uses its own internal
        // layouting mechanism we need to expose it here as a special case.
        "name": "activeItem",
        "type": "number",
        "defaultValue": 0
    }, {
        name: "direction",
        merge: true,
        editor: 'options',
        options: ['horizontal', 'vertical']
    }, {
        name: "ui",
        merge: true,
        editor: "combo",
        options: ["dark", "light"]
    }],

    init: function() {
        var me = this;

        // Manage listeners for global instance activation
        me.on({
            create: me.addInstanceActivateListener,
            restore: me.addInstanceActivateListener,
            canvasconfig: me.onCanvasConfig,
            scope: me
        });
    },

    /**
     * When drawing to the canvas, set the initial activeItem to make the current selected
     * instance visible, if applicable.
     */
    onCanvasConfig: function(config) {
        var me = this,
            activeCard = me.getCardForInstance(xds.component.Selection.getInstance());
        if (activeCard) {
            config.activeItem = me.children().filter(me.isCardItem).indexOf(activeCard);
        }
        return config;
    },

    /**
     * Start listening for activation of any instance in the project
     */
    addInstanceActivateListener: function() {
        var me = this;
        me.subscribe('instance:activate', me.onAnyInstanceActivate, me);
    },

    /**
     * Handle the activation of any instance in the project. If the activated intance is within
     * one of this carousel's cards, switch the canvas instance to display that card.
     */
    onAnyInstanceActivate: function(instance) {
        var me = this,
            card = me.getCardForInstance(instance),
            activeItem;

        if (card) {
            activeItem = Math.max(0, me.indexOfCardItem(instance, card));
        } else {
            // Not inside a card, revert to the configured activeItem
            activeItem = instance.getCfgValueOrDefault('activeItem');
            if (Ext4.isNumber(activeItem)) {
                activeItem = Math.min(activeItem, instance.children().filter(me.isCardItem).length - 1);
            }
        }
        me.setCanvasInstanceActiveItem(activeItem);
    },

    /**
     * For a given instance, return the card component that the instance is a descendant of,
     * or null if the instance is not within a card.
     * @param instance
     */
    getCardForInstance: function(instance) {
        var me = this,
            parent;
        while (instance) {
            parent = instance.parent();
            if (parent === me) {
                return me.isCardItem(instance) ? instance : null;
            }
            instance = parent;
        }
        return null;
    },

    /**
     * Determine whether the given instance is capable of being a card within the carousel.
     * Lines up with Ext.Component#isInnerItem in Touch SDK
     */
    isCardItem: function(instance) {
        return !instance.getCfgValueOrDefault('docked') &&
            !instance.getCfgValueOrDefault('centered') &&
            !instance.getCfgValueOrDefault('floating');
    },


    indexOfCardItem: function(item) {
        var card = this.getCardForInstance(item);
        return this.children().filter(this.isCardItem).indexOf(card);
    },


    /**
     * Set the activeItem on the carousel's canvas instance. Does not update the activeItem
     * config, only brings the given item into view visually on the canvas.
     * @param {Number/String} item The index or component id of the item to set as active
     * @return {Promise}
     */
    setCanvasInstanceActiveItem: function(item) {
        return xds.canvas.messaging.call('setActiveItem', this.getId(), item);
    }
});
