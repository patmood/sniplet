angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })

    .when('/posts/:id', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })

    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })

  $locationProvider.html5Mode(true);

}]);
