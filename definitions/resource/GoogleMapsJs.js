xds.component.Registry.addDefinition({
    type: 'googlemapsjsresource',
    docClassName: 'Google Maps API',
    autoName: 'GoogleMapsAPI',
    toolbox: {
        name: 'Google Maps API',
        category: 'Resources',
        groups: ['Resources'],
        iconCls: 'icon-gmap-api'
    },
    inherits: 'baseresource',
    resourceType: 'js',

    disableDuplication: true,

    // TODO would be nice to expose all the possible URL parameters as separate configs
    // and build the URL from them, but we'd have to account for the possibility of them
    // changing/adding params in the future.
    cfgs: [{
        name: 'url',
        type: 'uri',
        defaultValue: 'http://maps.google.com/maps/api/js?sensor=true'
    },{
        name: 'id',
        type: 'string'
    }],

    getDisplayName: function() {
        return this.autoName;
    },

    //DSGNR-4898 - band-aid, get maps api working by introducting a new resource type
    //that will go in index.html even on cmd projects. Hopefully this can be removed
    //and a better solution implemented post 3.0
    getCodeConfig: function() {

        var url = this.getCfgValueOrDefault('url'),
            id = this.getCfgValueOrDefault('id');

        return [{
            resourceType: 'js',
            url: url,
            id: id
        },{
            resourceType: 'band-aid-external-js',
            id: id,
            url: url
        }];
    }

});