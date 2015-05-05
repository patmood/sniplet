app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // Fallback
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // abstract: true
      templateUrl: 'views/home.html'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'views/posts.html',
      controller: 'MainCtrl'
    })
    .state('post', {
      url: '/posts/:_id',
      templateUrl: 'views/post.html',
      controller: 'MainCtrl'
    });

  $locationProvider.html5Mode(true);

})
