;(function () {
  const app = angular.module('fetchApp', []);
})();

;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";

    $scope.fetch = () => {
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push(response);
      }, (error) => {
        // debugger
        //do something else
      });
    };
  });
})();

;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    this.get = (url) => $http.get(url);
  });
})();

;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
    };

    return Response;
  });
})();


