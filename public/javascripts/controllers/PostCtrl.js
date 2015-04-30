angular.module('PostCtrl', ['postService']).controller('PostCtrl', function($scope, $routeParams, postService) {

  // Setup
  postService.get(function(data) {
    console.log($routeParams)
    $scope.post = data[0]
  })

  // Define
  $scope.destroyPost = function(index) {
    var post = $scope.posts[index]
    postService.delete(post._id)

    $scope.posts.splice(index, 1)
  }

});
