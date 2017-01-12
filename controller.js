;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";
      $scope.fetch = () => {
          const initialDate = (new Date()).getTime();
          requestService.get($scope.url).then((success) => {
          const receivedDate = (new Date()).getTime();
          const response = new Response(success);
          const responseTime = receivedDate - initialDate;
          response.responseTime = responseTime;
          console.log("responseTime", responseTime);
          $scope.responses.push(response);
         }, (error) => {
        // debugger
        //do something else
        });
      };
    });
})();