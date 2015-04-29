angular.module('MainController', ['post']).controller('MainController', function($scope, post) {

  post.get(function(data) {
    $scope.posts = data
  })
  $scope.tagline = 'To the moon and back!';

  $scope.createPost = function() {
    var post = {
      title: $scope.post.title,
      body: $scope.post.body,
      author: $scope.post.author
    }
    $scope.posts.push(post)
  }

});
