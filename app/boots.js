/**
 * Created by huangfeng on 2014/6/19.
 */
define([
    "require",
    "angular",
    "jquery",
    "twBootstrap",
    "switch",
    "jqueryUi",
    "jqueryMetadata",
    "jqueryValidate",
    "jqueryPeity",
    "jqueryDatatables",
    "datatablesBootstrap",
    "dataTableTools",
    "responsiveTables",
    "jqueryUiWidget",
    "jqueryWizard",
    "uiBootstrap",
    "uiBootstrapTpls",
    "jQueryBootstrap",
    "selectBoxIt",
    'bootstrapTreeView',
    "app",
    "routes"
], function (require, ng) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});

