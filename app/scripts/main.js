/*global require*/
'use strict';

require.config({
    paths: {
        'jQuery': '../bower_components/jquery/jquery',
        //backbone: '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'angular': '../bower_components/angularjs/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-restangular': '../bower_components/restangular/dist/restangular.min',
        'angular-deckgrid': '../bower_components/angular-deckgrid/angular-deckgrid',

        'highcharts': '../bower_components/highcharts-release/highcharts-all',
        'highcharts-more': '../bower_components/highcharts-release/highcharts-more',
        'highcharts-ng': '../bower_components/highcharts-ng/src/highcharts-ng',

        'less': '../bower_components/less/dist/less.min',

        'app': 'app',
        'app.functions': 'functions'
    },
    shim: {
        'underscore': {
            'exports': '_'
        },
        /*backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },*/
        'jQuery': {
            'exports': 'jQuery'
        },
        'angular': {
            'deps': [
                'jQuery'
            ],
            'exports': 'angular'
        },
        'angular-route': {
            'deps': [
                'angular'
            ]
        },
        'angular-ui-router': {
            'deps': [
                'angular'
            ]
        },
        'angular-restangular': {
            'deps': [
                'angular',
                'underscore'
            ]
        },
        'angular-deckgrid': {
            'deps': [
                'angular',
                'jQuery'
            ]
        },
        'highcharts': {
            'deps': [
                'jQuery'
            ]
        },
        'highcharts-more': {
            'deps': [
                'highcharts'
            ]
        },
        'highcharts-ng': {
            'deps': [
                'jQuery',
                'angular',
                'highcharts',
                'highcharts-more'
            ]
        },
        'less': {},
        'app': {
            'deps': [
                'angular',
                'app.functions',
                'less'
            ],
            'exports': 'app'
        },
        'app.functions': {
            'deps': [
                'angular',
                'jQuery'
            ]
        }
    },
    priority: [
        'angular'
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";
require([
    'jQuery',
    'angular',
    'app'
], function (jQuery, angular, app) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function () {
        angular.bootstrap(document, ['app']);
    });

});