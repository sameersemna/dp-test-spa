/**
 * Created by Sameer Shemna <sameer@shemna.com> on 1/31/2015.
 */
'use strict';

var defaultDependencies = [],
    customDependencies = [],
    enabledDependencies = [];
var PATH_DIR_MODULES = '../scripts/modules/';
var PATH_DIR_PARTIALS = '../partials/';

defaultDependencies.push('ui.router');
defaultDependencies.push('restangular');

customDependencies.push('app.home');

enabledDependencies = defaultDependencies.concat(customDependencies);


define([
        'angular',
        'angular-ui-router',
        'angular-restangular',
        PATH_DIR_MODULES + 'home/home-module'
    ],
    function (angular) {
        var $scope, $location;

        var app = angular.module('app', enabledDependencies);

        app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, RestangularProvider, $httpProvider) {
                $urlRouterProvider.otherwise('/');
                RestangularProvider.setBaseUrl('/api');

            }
        ]);

        app.run(function () {

        });

        return app;
    });