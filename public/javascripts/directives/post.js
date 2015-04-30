app.directive('post', function() {
  return {
    restrict: 'E',
    scope: {
      post: "="
    },
    templateUrl: 'javascripts/directives/post.html'
  }
})
