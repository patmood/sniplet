app.directive('createPost', function() {
  return {
    restrict: 'E',
    scope: {
      create: '&'
    },
    templateUrl: 'javascripts/directives/createPost.html'
  }
})
