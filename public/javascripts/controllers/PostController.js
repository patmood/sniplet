angular.module('PostController', ['PostService']).controller('PostController', function($scope, PostService) {

  PostService.get()
    .success(function(data) {
      $scope.posts = data
    })

});
