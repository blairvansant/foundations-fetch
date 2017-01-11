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