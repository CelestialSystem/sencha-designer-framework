Ext4.override(xds.component.Definition, {
    /**
     * If configs go in same level as member functions. In Touch configs go in config object and its ok to have same
     *      name for a config and member function name.
     * @return {Boolean}
     */
    areCfgsAppliedAsMembers: function() {
        return false;
    },

    /**
     * Framework specific: Are overridden classes suppose to require their overrides file?
     * @return {Boolean}
     */
    areOverridesRequiredByOverridden: function() {
        return true;
    }
});