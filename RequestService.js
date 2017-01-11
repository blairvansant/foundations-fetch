
;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    this.get = (url) => $http.get(url);
  });
})();