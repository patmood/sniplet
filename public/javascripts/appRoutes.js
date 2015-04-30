angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })

    .when('/posts/:_id', {
      templateUrl: 'views/post.html',
      controller: 'MainCtrl'
    })

    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'MainCtrl'
    })

  $locationProvider.html5Mode(true);

}]);
