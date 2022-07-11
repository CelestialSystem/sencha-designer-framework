Ext4.override(xds.component.Definition, {
    /**
     * If configs go in same level as member functions. True for Ext.
     * @return {Boolean}
     */
    areCfgsAppliedAsMembers: function() {
        return true;
    },

    /**
     * Framework specific: Are overridden classes suppose to require their overrides file?
     * @return {Boolean}
     */
    areOverridesRequiredByOverridden: function() {
        return true;
    }
});