xds.component.Registry.addDefinition({
    type: 'customthemeresource',
    inherits: 'basecustomthemeresource',

    init: function(config) {

        if (this.isValidationInstance()) {
            return;
        }

        this.on({
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

                packagejson = Eon.cjson.stringify( io.readFile(packageJsonPath), null, 4);
                //packagejson = io.readJSONFile(packageJsonPath);
                
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

    getInternalCssPreviewPath: function() {
        return xds.util.File.buildProjectPath('.arch-internal-preview.css');
    },

    getExternalPreviewCssProjectPath: function() {
        return 'resources/preview-' + this.getUnsuffixedFileName() + '.css';
    },

    getExternalPreviewCssPath: function() {
        return xds.util.File.buildProjectPath(this.getExternalPreviewCssProjectPath());
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
                if (xtype) {
                    manifest.push({
                        ui: uiName,
                        xtype: xtype
                    });
                } else {
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

    }

});
