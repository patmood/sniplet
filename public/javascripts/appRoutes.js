angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'PostController'
    })

  $locationProvider.html5Mode(true);

}]);
