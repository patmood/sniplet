app.directive('postsList', function() {
  return {
    restrict: 'E',
    scope: {
      posts: "=",
      destroy: "&"
    },
    templateUrl: 'javascripts/directives/postsList.html'
  }
})
