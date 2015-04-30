angular.module('PostsCtrl', ['postService']).controller('PostsCtrl', function($scope, postService) {

  // Setup
  postService.get(function(data) {
    $scope.posts = data
  })

  // Define
  $scope.destroyPost = function(index) {
    var post = $scope.posts[index]
    postService.delete(post._id)

    $scope.posts.splice(index, 1)
  }

});
