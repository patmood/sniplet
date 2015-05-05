angular.module('MainCtrl', ['postService']).controller('MainCtrl', function($scope, $stateParams, postService) {

  // Setup
  postService.get(function(data) {
    $scope.posts = data

    var _id = $stateParams._id
    if (_id) {
      $scope.singlePost = _.find(data, { _id: _id })
    }
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
