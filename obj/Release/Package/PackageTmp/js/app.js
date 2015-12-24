var app = angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
    })
    .when('/mission', {
        templateUrl: 'views/mission.html',
        controller: 'missionController'
    })
    .when('/surfer', {
        templateUrl: 'views/surfer.html',
        controller: 'surferController',
    })
    .when('/paragliding', {
        templateUrl: 'views/para.html',
        controller: 'paraController',
    })
    .when('/formel', {
        templateUrl: 'views/formel.html',
        controller: 'formelController',
    })
    .when('/massage', {
        templateUrl: 'views/massage.html',
        controller: 'massageController',
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController',
    })
    .otherwise({
        redirectTo: '/'
    });

}]);
app.service("imageService", function ($http) {
    return {
        getImages: function () {
            return $http.get("images.json", { responseType: "json" }).success(function (data) {

            })
        }
    }
})
app.controller('mainController', function ($scope, $sce, imageService) {
    $scope.logoSrc = $sce.trustAsResourceUrl("../images/logo.gif");
    $scope.message = 'Förstasidan';
    imageService.getImages().success(function (result) {
        $scope.images = result;
    })
});





