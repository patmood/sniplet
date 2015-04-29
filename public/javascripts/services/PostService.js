angular.module('PostService', []).factory('Post', ['$http', function($http) {
  return {
    get: function() {
      return $http.get('/api/posts');
    },

    create: function(data) {
      return $http.post('/api/posts', data);
    },

    delete: function(id) {
      return $http.delete('/api/nerds/' + id)
    }

  }
}]);
