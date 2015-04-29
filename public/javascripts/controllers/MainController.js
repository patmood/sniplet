angular.module('MainController', ['post']).controller('MainController', function($scope, post) {

  post.get(function(data) {
    $scope.posts = data
  })
  $scope.tagline = 'To the moon and back!';

});
