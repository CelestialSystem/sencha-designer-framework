xds.component.Registry.addDefinition({
    type: 'customthemeresource',
    inherits: 'basecustomthemeresource',

    cfgs: [
        {
            name: 'shouldExport',
            displayName: 'Always Export',
            type: 'boolean',
            defaultValue: false,
            group: '(Cmd)'
        },
        {
            name: 'platform',
            merge: false,
            type: 'typedarray',
            group: '(Cmd)',
            memberConfig: {
                type: 'string',
                editor: 'combo',
                options: [
                    'phone',
                    'tablet',
                    'desktop',
                    'ios',
                    'android',
                    'blackberry',
                    'safari',
                    'chrome',
                    'ie10',
                    'windows',
                    'tizen',
                    'firefox'
                ]
            }
        }],

    activeManagedMessages: [],

    init: function(config) {

        if (this.isValidationInstance()) {
            return;
        }

        var i8n = xds.Resource.get('theme');

        this.messages = {
            missingPlatform: {
                text: i8n.resourceMissingPlatform,
                iconCls: 'icon-error'
            },
            platformConflict: {
                text: i8n.resourcePlatformConflict,
                iconCls: 'icon-error'
            },
            platformConflicts: {
                text: i8n.resourcePlatformConflicts,
                iconCls: 'icon-error'
            },
            notExported: {
                text: i8n.resourceOnlyPlatformSet,
                iconCls: 'icon-warning'
            },
            mixedExportConflict: {
                text: i8n.resourceMixedExportConflict,
                iconCls: 'icon-error'
            }
        };

        this.on({
            aftercfgchange: this.onAftercfgchange,
            restore: this.onRestore,
            create: this.onCreate,
            activeThemeStatusChanged: this.onActiveThemeStatusChanged,
            shouldDeleteResources: this.onShouldDeleteResources,
            imageStoreCreated: this.onImageStoreCreated,
            storageready: this.onStorageReady,
            actionmenu: this.onActionMenu,
            scope: this
        });

    },

    onStorageReady: function() {

        var path, testPath;

        //upgrade
        //if we get in an older user (3.0 GA)
        //we havne't stored the pkgPath before
        if (!this.storage.simple.pkgVersion) {
            this.storage.simple.pkgVersion = 1;

            //check if we have package existing
            path = 'packages';
            testPath = xds.util.File.buildProjectPath(path + '/' + this.getThemePkgFolderName() + '/package.json');

            if (testPath && Ion.io.pathExists(testPath)) {
                this.storage.simple.pkgPath = path;
            }

        }

    },

    onActionMenu: function() {
        var items = [
            {
                order: 5,
                text: xds.Resource.get('theme').extPkgExportActionText,
                iconCls: 'icon-cmp-export',
                handler: function(instance) {
                    instance.exportExtThemePkg();
                },
                disableWhen: function(instance) {
                    return !(instance.hasThemePkgPath() && Ion.io.pathExists(instance.getThemePkgPath()));
                }
            }
        ];
        return items;
    },

    exportExtThemePkg: function() {

        var io = new xds.util.Io({
                throwOnError: true
            }),
            lastOpenFolder = sencha.io.LocalStorage.getItem('xds-last-open-folder'),
            pkgPath = this.getThemePkgPath(),
            suggestedName = 'my-theme-' + this.originThemeName.toLowerCase(),
            i8n = xds.Resource.get('theme'),
            result, newPkgPath, newPkgName, packageJsonPath, senchaCfgPath, packagejson, cfgText;

        lastOpenFolder = lastOpenFolder || Ion.io.userDocsPath;

        result = Ion.io.browseFiles({
            path: lastOpenFolder,
            defaultValue: suggestedName,
            caption: i8n.extPkgExportDialogCaption
        });

        if (result.success) {
            newPkgPath = result.value;
            newPkgName = xds.util.File.getFileNameFromPath(newPkgPath);

            if (!newPkgName) {
                return;
            }

            packageJsonPath = newPkgPath + '/package.json';
            senchaCfgPath = newPkgPath + '/.sencha/package/sencha.cfg';

            try {
                Eon.fse.copySync(pkgPath, newPkgPath);

                //update package name in package.json
                packagejson = io.readJSONFile(packageJsonPath);
                packagejson.name = newPkgName;
                io.writeJSONIndentedFile(packageJsonPath, packagejson);

                //update package name in sencha.cfg
                cfgText = io.readFile(senchaCfgPath);
                cfgText = cfgText.replace(/^(\s*package.name=).*$/mi, '$1' + newPkgName);
                io.writeFile(senchaCfgPath, cfgText);

            } catch (err) {
                xds.ui.dialog.Warn({
                    title: i8n.extPkgExportFailTitle,
                    msg: Ext4.String.format(i8n.extPkgExportFailText, err)
                });
            }
        }

    },

    onImageStoreCreated: function() {
        this.imageStore.on('imageDelete', this.onImageDelete, this);
    },

    getThemePkgFolderName: function() {
        if (this.isThemerPackage) {
            return this.name;
        }

        return this.themePkgName + '-' +this.getUniqueId();
    },

    getThemePkgPath: function() {

        if (!this.storage.simple.pkgPath) {
            //<debug>
            console.trace();
            console.log(this);
            //</debug>
            throw "missing theme pkg path";
        }
        return xds.util.File.buildProjectPath(this.storage.simple.pkgPath + '/' + this.getThemePkgFolderName());
    },
    hasThemePkgPath: function() {
        return !!this.storage.simple.pkgPath;
    },

    createOrUpdateCmdThemePkg: function() {

        if (!xds.app.Builder.projectHasCMD(xds.project)) {
            return;
        }

        var me = this,
            done, deferred;


        if (!this.hasThemePkgPath() || !Ion.io.pathExists(this.getThemePkgPath())) {
            deferred = this.deferred();
            done = this.createThemePkg();
            done.then(function(){
                me.populateThemePkgScss();
                me.generateSlicingManifest();
                deferred.resolve();
            }).then(null,function(err){
                //<debug>
                console.log('Promise failure ', err);
                //</debug>
                deferred.reject();
            });

            return deferred.promise;
        } else {
            this.populateThemePkgScss();
            this.generateSlicingManifest();
        }
    },

    createThemePkg: function() {

        var promise = xds.app.Builder.runCreateThemePackage(this.getThemePkgFolderName(), this.getThemePkgName()),
            me = this;

        promise = promise.then(function(path){
            me.storage.simple.pkgPath = path;

            // Setting the pkgPath means the metadata is now dirty; since createThemePkg is only called
            // during the project's doSave process, after the metadata is already written, we need to
            // manually flush just this instance's metadata so it isn't left in dirty state.
            me.setDirty(true);
            xds.project.saveMetadata([me], xds.project.appStructure.getMetadataResourcePath());
        });

        return promise;
    },

    populateThemePkgScss: function() {

        if (this.isThemerPackage) {
            this.populateThemerThemePkgScss();
            return;
        }

        const path = this.getThemePkgPath();

        const varPath = Eon.path.join(path, '/sass/var/Component.scss');
        const srcPath = Eon.path.join(path, '/sass/src/Component.scss');

        const context = xds.component.themeVar.Generator.generateContext(this);

        const varScssText = context.varScss.join('\n');
        const srcScssText = context.uiScss.join('\n');

        const io = new xds.util.Io({
            throwOnError: true
        });

        let varFileContent = '',
            srcFileContent = '';

        try {
            varFileContent = Eon.fs.readFileSync(varPath, 'utf8');
            srcFileContent = Eon.fs.readFileSync(srcPath, 'utf8');
        } catch (err) {
            // Swallow exeception. The file may or may not exist. It's not a problem.
        }

        if (varFileContent !== varScssText) {
            io.writeFile(varPath, varScssText);
        }

        if (srcFileContent !== srcScssText) {
            io.writeFile(srcPath, srcScssText);
        }

        //copy over imgaes
        const imgFromPath = xds.util.File.buildProjectPath(this.imageStore.getProjectImageFolderPath());
        const imgToPath = path + '/resources/images';

        if (imgFromPath && Ion.io.pathExists(imgFromPath)) {
            io.copyPath(imgFromPath, imgToPath);
        }

    },

    onImageDelete: function(relPath) {

        var imgPath = this.getThemePkgPath() + '/resources/images/' + relPath;

        var io = new xds.util.Io({
            throwOnError: true
        });
        io.deletePathIfExists(imgPath);

    },

    generateSlicingManifest: function() {
        //find all uis and their x-types!
        //make sure to handle -suffixes

        var manifest = [],
            output, customJsPath, io;

        this.store.forEachCustomUi(function(ui){

            var className = ui.getClassName(),
                def = xds.component.Registry.getDefinition(className),
                xtype = def ? def.$validationInstance.getShortAlias() : '',
                baseUiSuffix = ui.getBaseUi('suffix'),
                uiName = ui.get('name');

            if (baseUiSuffix) {
                uiName = uiName.replace(new RegExp(baseUiSuffix + '$'),'');
            }

            if (!manifest.some(function(man) {return man.ui === uiName;})) {
                manifest.push({
                    ui: uiName,
                    xtype: xtype
                });

                if (!xtype) {
                    console.error(`Cannot find definition for "${className}".`);
                }
            }

        },this);

        output = '/* auto generated by architect */ \nExt.theme.addManifest('+JSON.stringify(manifest, false, '    ')+');';

        customJsPath = xds.util.File.buildProjectPath('sass/example/custom.js');

        if (!customJsPath) {
            return;
        }

        io = new xds.util.Io({
            throwOnError: true
        });
        io.writeFile(customJsPath, output);

    },

    /*
    * Copied from touchcommon CustomTheme.js
    * */

    onCreate: function() {
        this.setCfgValue('platform', ['phone', 'tablet', 'desktop']);
    },

    onRestore: function() {
        xds.component.themeVar.Manager.bufferedVerifyExportAndUpdateMessagesForTouch.delay(200);
    },

    onActiveThemeStatusChanged: function() {
        xds.component.themeVar.Manager.bufferedVerifyExportAndUpdateMessagesForTouch.delay(50);
    },

    onAftercfgchange: function(name, newValue, oldValue) {
        if (name === 'shouldExport' || name === 'platform') {
            xds.component.themeVar.Manager.bufferedVerifyExportAndUpdateMessagesForTouch.delay(50);
        }
    },

    updateMessages: function(info) {
        var platformValue = this.getCfgValue('platform'),
            platforms = platformValue ? platformValue.length : 0,
            platformConflicts,
            errors = [],
            warnings = [];

        this.clearManagedMessages();

        if (!info.hasCmd) {
            return {
                warnings: warnings,
                errors: errors
            };
        }

        if (platforms > 0 && !info.exported) {
            warnings.push(this.addManagedMessage(this.messages.notExported));
        }

        if (info.exported && platforms < 1) {
            errors.push(this.addManagedMessage(this.messages.missingPlatform));
        }

        if (info.platformConflicts) {

            platformConflicts = info.platformConflicts.map(function(platformValue){
                return '"' + platformValue + '"';
            });

            if (platformConflicts.length === 1) {
                errors.push(this.addManagedMessage(this.messages.platformConflict,[platformConflicts[0]]));
            } else {
                errors.push(this.addManagedMessage(this.messages.platformConflicts,[platformConflicts.join(', ')]));
            }

        }

        if (info.exported && !info.isCustomThemeActive) {
            errors.push(this.addManagedMessage(this.messages.mixedExportConflict));
        }

        return {
            warnings: warnings,
            errors: errors
        };

    },


    addManagedMessage: function(message, format) {
        message = Ext4.clone(message);

        if (format) {
            format.unshift(message.text);
            message.text = Ext4.String.format.apply(Ext4.String, format);
        }

        this.activeManagedMessages.push(message);
        this.addMessage(message);

        return message.text;
    },

    clearManagedMessages: function() {

        this.activeManagedMessages.forEach(function(message){
            this.removeMessage(message);
        },this);

        this.activeManagedMessages = [];

    },

    getInternalCssPreviewPath: function() {
        return xds.util.File.buildProjectPath('.arch-internal-preview.css');
    },

    getExternalPreviewCssProjectPath: function() {
        //touch uses app.json/boostrap.json for previews
        //which points to exported css, so we put our preview
        //there as well. This preview will be overwritten
        //by sencha app buil when project is build, so the
        //built project will use css straig from sencha app build
        return this.getExportCssProjectPath();
    },

    getExternalPreviewCssPath: function() {
        return this.getExportCssPath();
    },

    getExportCssProjectPath: function() {
        return 'resources/css/' + this.getUnsuffixedFileName() + '.css';
    },

    getExportCssPath: function() {
        return xds.util.File.buildProjectPath(this.getExportCssProjectPath());
    },

    getExportScssPath: function() {
        return xds.util.File.buildProjectPath('resources/sass/' + this.getUnsuffixedFileName() + '.scss');
    },

    saveTouchScssResource: function() {
        var scssPath = this.getExportScssPath(),
            io, context, varScssText, srcScssText, fileContent;

        if (!scssPath) {
            return;
        }

        context = xds.component.themeVar.Generator.generateContext(this);

        varScssText = context.varScss.join('\n');
        srcScssText = context.uiScss.join('\n');

        fileContent = varScssText + '\n\n' + this.startScssFileContent + '\n\n' + srcScssText;

        io = new xds.util.Io({
            throwOnError: true
        });

        io.writeFile(scssPath, fileContent);
    },

    onShouldDeleteResources: function() {
        var sassPath = this.getExportScssPath(),
            cssPath = this.getExportCssProjectPath(),
            io = new xds.util.Io();

        if (sassPath && cssPath) {
            io.deletePathIfExists(sassPath);
            io.deletePathIfExists(cssPath);
        }
    }
});
