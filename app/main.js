/**
 * Created by huangfeng on 2014/6/17.
 */
'use strict';

require.config({

    baseUrl: "app",

    paths: {
        'text': '../vendor/requirejs/text',
        'domReady': '../vendor/requirejs/domReady',
        'jquery': '../vendor/jquery/jquery-1.11.1',
        'angular': '../vendor/angular/angular',
        'uiRouter': '../vendor/angular-ui/angular-ui-router',
        'ngAnimate': '/vendor/angular/angular-animate.min',
        'jqueryUi': '../vendor/jquery/jquery-ui-1.10.4',
        'twBootstrap': '../vendor/bootstrap/bootstrap',
        'switch': '../vendor/bootstrap/bootstrap-switch',
        'jqueryValidate': '../vendor/validate/jquery.validate',
        'jqueryMetadata': '../vendor/validate/jquery.metadata',
        'jqueryPeity': '../vendor/peity/jquery.peity',
        'jqueryDatatables': '../vendor/datatables/jquery.dataTables',
        'datatablesBootstrap': '../vendor/datatables/DT_bootstrap',
        'dataTableTools': '../vendor/datatables/extras/TableTools.min',
        'jqueryUiWidget': '../vendor/wizard/jquery.ui.widget',
        'jqueryWizard': '../vendor/wizard/jquery.wizard',
        'responsiveTables': '../vendor/responsive-tables/responsive-tables',
        'uiBootstrap': '../vendor/angular-ui/ui-bootstrap-0.11.0',
        'uiBootstrapTpls': '../vendor/angular-ui/ui-bootstrap-tpls-0.11.0',
        'jQueryBootstrap': '../vendor/jquery/jquery.bootstrap',
        'selectBoxIt': '../vendor/selectBoxIt/jquery.selectBoxIt',
        'bootstrapTreeView': '../vendor/bootstrap/bootstrap-treeview',
        'library': '../vendor'
    },

    shim: {
        'jquery': {exports: 'jquery'},
        'angular': {
            exports: "angular"
        },
        'uiRouter': {
            deps: ["angular"],
            exports: "uiRouters"
        },
        'ngAnimate': {
            deps: ['angular']
        },
        'twBootstrap': {
            deps: ['jquery']
        },
        'switch': {
            deps: ['jquery']
        },
        'jqueryUi': {
            deps: ['jquery']
        },
        'jqueryMetadata': {
            deps: ['jquery']
        },
        'jqueryValidate': {
            deps: ['jquery']
        },
        'jqueryPeity': {
            deps: ['jquery']
        },
        'jqueryDatatables': {
            deps: ['jquery']
        },
        'datatablesBootstrap': {
            deps: ['jquery','jqueryDatatables']
        },
        'dataTableTools': {
            deps: ['jquery', 'jqueryDatatables']
        },
        'responsiveTables': {
            deps: ['jquery']
        },
        'jqueryUiWidget': {
            deps: ['jquery']
        },
        'jqueryWizard': {
            deps: ['jquery', 'jqueryUiWidget']
        },
        'uiBootstrap': {
            deps: ['angular']
        },
        'uiBootstrapTpls': {
            deps: [ 'uiBootstrap']
        },
        'jQueryBootstrap': {
            deps: ['jquery', 'twBootstrap']
        },
        'selectBoxIt': {
            deps: ['jquery']
        },
        'bootstrapTreeView': {
            deps: ['jquery']
        }
    },
    priority: [
        "angular"
    ],

    deps: ['./boots']
});
