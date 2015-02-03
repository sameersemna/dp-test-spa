/**
 * Created by Sameer Shemna <sameer@shemna.com> on 1/31/2015.
 */
'use strict';
/**
* Static data array for display cards
*/
var data_cards = [{
    id: '1',
    'title': 'Dynamic Line/Bar',
    src: "./images/charts/1.png"
}, {
    id: '2',
    'title': 'Series',
    src: "./images/charts/2.png"
}, {
    id: '3',
    'title': 'AAPL Stock Price',
    src: "./images/charts/3.png"
}, {
    id: '4',
    'title': 'Temp variation',
    src: "./images/charts/4.png"
}, {
    id: '5',
    'title': 'Browser market',
    src: "./images/charts/5.png"
}, {
    id: '6',
    'title': 'Multi',
    src: "./images/charts/6.png"
}];

var module = angular.module('app.home.controllers', []);
/**
* Define Angular Controllers for Home
*/
module.controller('HomeController', ['$scope', '$state', '$stateParams', '$timeout',
    function ($scope, $state, $stateParams, $timeout) {



        if ($stateParams.cards == null) {
            $scope.cards = data_cards;
        } else {
            $scope.cards = $stateParams.cards;
        }
            
            /**
            * Summary: Function to be called for closing this Chart
            */
        $scope.cardClose = function (card) {
            $scope.cards = $scope.cards.filter(function (el) {
                return el.id !== card.id;
            });
        };
        
            /**
            * Summary: Function to be called for Maximizing Chart
            */
        $scope.cardMaximize = function (card) {
            $state.go('home.chart', {
                cards: $scope.cards,
                card_selected: card,
                chartId: card.id
            });
        };
        
            /**
            * Summary: Function to be called for adding new Chart
            */
        $scope.addNewChart = function () {
            console.log('new');
            var maxId = $scope.cards.reduce(function (prev, current) {
                if (+current.id > +prev.id) {
                    return current;
                } else {
                    return prev;
                }
            });

            var newId = parseInt(maxId.id) + 1;

            var newCard = {
                id: newId,
                'title': 'New Card ' + newId,
                src: "./images/charts/1.png"
            };

            $scope.cards.push(newCard);
        };

    }
]);

module.controller('HomeChartController', ['$scope', '$state', '$stateParams', '$timeout', '$q', 'HomeServices',
    function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {

        $scope.showDynamicControls = false;


        if ($stateParams.cards == null) {
            $scope.cards = data_cards;
        } else {
            $scope.cards = $stateParams.cards;
        }

        if ($stateParams.card_selected == null) {
            var cardIndex = $stateParams.chartId - 1;
            $scope.card_selected = data_cards[cardIndex];
        } else {
            $scope.card_selected = $stateParams.card_selected;
        }


            /**
            * Summary: Function to be called for going back to Home Main state
            */
        $scope.chartBack = function () {
            $state.go('home.main', {
                cards: $scope.cards
            });
        };


        if (typeof (window["ChartController" + $scope.card_selected.id]) != 'undefined') {
            if ($scope.card_selected.id == 1) {
                $scope.showDynamicControls = true;
            }

            angular.extend(this, window["ChartController" + $scope.card_selected.id]($scope, $state, $stateParams, $timeout, $q, HomeServices));
        } else {
            $scope.showDynamicControls = true;
            angular.extend(this, new ChartController1($scope, $state, $stateParams, $timeout, $q, HomeServices));
        }



    }
]);

/**
 * Summary: Function to be called for showing Chart 1
 */
var ChartController1 = function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {
    $scope.addPoints = function () {
        var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.highchartsNG.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.options = {
        type: 'line'
    }

    $scope.swapChartType = function () {
        if (this.highchartsNG.options.chart.type === 'line') {
            this.highchartsNG.options.chart.type = 'bar'
        } else {
            this.highchartsNG.options.chart.type = 'line'
        }
    }

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: $scope.card_selected.title
        },
        loading: false
    }
};

/**
 * Summary: Function to be called for showing Chart 2
 */
var ChartController2 = function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {

    $scope.promises = [];

    $scope.chartdata = [];
    var promiseChart2 = HomeServices.getChart2().then(function (responseSuccess) {
            $scope.chartdata = responseSuccess;
        },
        function (responseError) {
            alert('API Call Failed');
        });
    $scope.promises.push(promiseChart2);

    $q.all($scope.promises).then(function () {
        console.log('chart2');
        var chartConfig = {

            chart: {
                renderTo: 'chart1',
                zoomType: 'x'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            series: [{
                data: $scope.chartdata
            }],
            title: {
                text: $scope.card_selected.title
            }

        };
        $scope.highchartsNG = chartConfig;

    });
};

/**
 * Summary: Function to be called for showing Chart 3
 */
var ChartController3 = function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {

    $scope.promises = [];

    $scope.chartdata = [];
    var promiseChart3 = HomeServices.getChart3().then(function (responseSuccess) {
            $scope.chartdata = responseSuccess;
        },
        function (responseError) {
            alert('API Call Failed');
        });
    $scope.promises.push(promiseChart3);

    $q.all($scope.promises).then(function () {
        console.log('chart3');
        var chartConfig = {

            rangeSelector: {
                selected: 1
            },

            series: [{
                name: 'AAPL',
                data: $scope.chartdata,
                tooltip: {
                    valueDecimals: 2
                }
            }],
            title: {
                text: $scope.card_selected.title
            }
        };
        $scope.highchartsNG = chartConfig;

    });
};

/**
 * Summary: Function to be called for showing Chart 4
 */
var ChartController4 = function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {

    $scope.promises = [];

    $scope.chartdata = [];
    var promiseChart4 = HomeServices.getChart4().then(function (responseSuccess) {
            $scope.chartdata = responseSuccess;
        },
        function (responseError) {
            alert('API Call Failed');
        });
    $scope.promises.push(promiseChart4);

    $q.all($scope.promises).then(function () {
        console.log('chart4');
        var chartConfig = {

            chart: {
                type: 'arearange'
            },

            title: {
                text: $scope.card_selected.title
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: $scope.chartdata,
                color: '#FF0000',
                negativeColor: '#0088FF'
            }]
        };
        $scope.highchartsNG = chartConfig;

    });
};

/**
 * Summary: Function to be called for showing Chart 5
 */
var ChartController5 = function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {

    $scope.promises = [];

    $scope.chartdata = [
        ['Firefox', 45.0],
        ['IE', 26.8], {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
    ];

    console.log('chart4');
    var chartConfig = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: $scope.card_selected.title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: $scope.chartdata
        }]

    };
    $scope.highchartsNG = chartConfig;

};

/**
 * Summary: Function to be called for showing Chart 6
 */
var ChartController6 = function ($scope, $state, $stateParams, $timeout, $q, HomeServices) {

    $scope.promises = [];

    $scope.chartdata = [];
    var promiseChart6 = HomeServices.getChart6().then(function (responseSuccess) {
            $scope.chartdata = responseSuccess;
        },
        function (responseError) {
            alert('API Call Failed');
        });
    $scope.promises.push(promiseChart6);

    $q.all($scope.promises).then(function () {
        console.log('chart6');
        var chartConfig = {

            chart: {
                renderTo: 'chart1',
                animation: false
            },

            title: {
                text: $scope.card_selected.title
            },

            xAxis: {
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            plotOptions: {
                series: {
                    cursor: 'ns-resize',
                    point: {
                        events: {

                            drag: function (e) {
                                // Returning false stops the drag and drops. Example:
                                /*
                                if (e.newY > 300) {
                                    this.y = 300;
                                    return false;
                                }
                                */
                                $('#drag').html(
                                    'Dragging <b>' + this.series.name + '</b>, <b>' + this.category + '</b> to <b>' + Highcharts.numberFormat(e.newY, 2) + '</b>');
                            },
                            drop: function () {
                                $('#drop').html(
                                    'In <b>' + this.series.name + '</b>, <b>' + this.category + '</b> was set to <b>' + Highcharts.numberFormat(this.y, 2) + '</b>');
                            }
                        }
                    },
                    stickyTracking: false
                },
                column: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                yDecimals: 2
            },

            series: [{
                data: $scope.chartdata,
                //draggableX: true,
                draggableY: true,
                dragMinY: 0,
                type: 'column',
                minPointLength: 2
            }, {
                data: $scope.chartdata.reverse(),
                draggableY: true,
                dragMinY: 0,
                type: 'column',
                minPointLength: 2
            }, {
                data: $scope.chartdata,
                draggableY: true
            }, {
                type: 'bubble',
                cursor: 'pointer',
                draggableX: true,
                draggableY: true,
                data: [
                    [1, 240, 3],
                    [2, 130, 10],
                    [4.5, 290, 15]
                ]
            }]

        };
        $scope.highchartsNG = chartConfig;

    });
};