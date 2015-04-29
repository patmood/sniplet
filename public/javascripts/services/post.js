angular.module('post', []).factory('post', ['$http', function($http) {
  return {
    get: function(cb) {
      return $http.get('/api/posts')
        .success(cb)
        .error(function(err) { console.error(err); }
      );
    },

    create: function(data) {
      return $http.post('/api/posts', data);
    },

    delete: function(id) {
      return $http.delete('/api/posts/' + id)
    }

  }
}]);
