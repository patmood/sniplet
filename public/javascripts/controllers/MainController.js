angular.module('MainController', ['postService']).controller('MainController', function($scope, postService) {

  postService.get(function(data) {
    $scope.posts = data
  })
  $scope.tagline = 'To the moon and back!';

  $scope.createPost = function() {
    var post = {
      title: $scope.post.title,
      body: $scope.post.body,
      author: $scope.post.author
    }
    postService.create(post)
  }

});
