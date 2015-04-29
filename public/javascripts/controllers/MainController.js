angular.module('MainController', ['postService']).controller('MainController', function($scope, postService) {

  postService.get(function(data) {
    $scope.posts = data
  })

  $scope.createPost = function() {
    var post = {
      title: $scope.post.title,
      body: $scope.post.body,
      author: $scope.post.author
    }
    postService.create(post)
    $scope.posts.push(post)
  }

  $scope.destroyPost = function(index) {
    var post = $scope.posts[index]
    postService.delete(post._id)

    $scope.posts.splice(index, 1)
  }

});
