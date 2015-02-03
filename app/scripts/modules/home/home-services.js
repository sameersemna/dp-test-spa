/**
 * Created by Sameer Shemna <sameer@shemna.com> on 1/31/2015.
 */
var module = angular.module('app.home.services', []);

module.factory('HomeServices', ['Restangular', function(Restangular) {
    var HomeServices = {};
    
    HomeServices.resourceUrl = 'home';
    
    HomeServices.getChart2 = function() {
        return Restangular.all(HomeServices.resourceUrl+'/chart2.json').getList();
    };
    
    HomeServices.getChart3 = function() {
        return Restangular.all(HomeServices.resourceUrl+'/chart3.json').getList();
    };
    
    HomeServices.getChart4 = function() {
        return Restangular.all(HomeServices.resourceUrl+'/chart4.json').getList();
    };
    
    HomeServices.getChart6 = function() {
        return Restangular.all(HomeServices.resourceUrl+'/chart6.json').getList();
    };
    
    return HomeServices;
}]);