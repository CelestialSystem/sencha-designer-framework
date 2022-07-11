xds.component.Registry.addDefinition({
    type: 'themerthemeresource',
    inherits: 'customthemeresource',

    // TODO: removed from toolbox for now, its needed to investigate how show dialog after themer theme resource added into project
    toolbox: {
        //name: 'Themer Theme Resource',
        //category: 'Resources',
        //groups: ['Resources'],
        iconCls: 'icon-external-theme'
    },

    autoName: 'MyThemerTheme'

});