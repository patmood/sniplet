angular.module('MainController', ['postService']).controller('MainController', function($scope, postService) {

  // Setup
  postService.get(function(data) {
    $scope.posts = data
  })

  // Define
  $scope.createPost = function(post) {
    postService.create(post)
    $scope.posts.push(post)
  }

  $scope.destroyPost = function(index) {
    var post = $scope.posts[index]
    postService.delete(post._id)

    $scope.posts.splice(index, 1)
  }

});
