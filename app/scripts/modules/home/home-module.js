/**
 * Created by Sameer Shemna <sameer@shemna.com> on 1/31/2015.
 */
'use strict';
define([
        'modules/home/home-controllers',
        'modules/home/home-services',
        'angular-deckgrid',
        'highcharts-ng'
    ],
    function () {
        /**
        * Define Angular Module for Home
        */
        var module = angular.module('app.home', ['app.home.controllers', 'app.home.services',
            'akoenig.deckgrid', 'highcharts-ng'
        ]);
        
        /**
        * Define State Providers for Home
        */
        module.config(['$stateProvider', function ($stateProvider) {

            $stateProvider
                .state('home', {
                    abstract: true,
                    url: '/home',
                    template: '<ui-view/>'
                })
                .state('home.main', {
                    url: '/main',
                    templateUrl: PATH_DIR_PARTIALS + 'home/main.html',
                    params: {
                        cards: null
                    }
                })
                .state('home.instructions', {
                    url: '/instructions',
                    templateUrl: PATH_DIR_PARTIALS + 'home/instructions.html'
                })
                .state('home.information', {
                    url: '/information',
                    templateUrl: PATH_DIR_PARTIALS + 'home/information.html'
                })
                .state('home.chart', {
                    url: '/chart/{chartId}',
                    templateUrl: PATH_DIR_PARTIALS + 'home/chart.html',
                    controller: 'HomeChartController',
                    params: {
                        cards: null,
                        card_selected: null,
                        chartId: null
                    }
                });
        }]);
    });