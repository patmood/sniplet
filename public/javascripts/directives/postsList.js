app.directive('postsList', function() {
  return {
    restrict: 'E',
    scope: '=posts',
    templateUrl: 'javascripts/directives/postsList.html'
  }
})
