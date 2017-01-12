;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";

    $scope.fetch = () => {
      const initialDate = (new Date()).getTime();
      if ($scope.method == 'GET') {
        console.log('method calls', $scope.method)
        requestService.get($scope.url).then((success) => {
          const receivedDate = (new Date()).getTime();
          const response = new Response(success);
          const responseTime = receivedDate - initialDate;
          response.responseTime = responseTime;
          console.log("responseTime", responseTime);
          $scope.responses.push(response);
          console.log($scope.method)
        }, (error) => {
                // debugger
              })
      } else if ($scope.method == 'POST'){
        requestService.post($scope.url).then((success) => {
          const receivedDate = (new Date()).getTime();
          const response = new Response(success);
          const responseTime = receivedDate - initialDate;
          response.responseTime = responseTime;
          // const response = new Response(success);
          $scope.responses.push(response);
          console.log($scope.method)
        }, (error) => {
                // debugger
              })
      } else if ($scope.method == 'OPTIONS') {
        requestService.options($scope.url).then((success) => {
           const response = new Response(success);
           $scope.responses.push(response);
            console.log($scope.method)
        }, (error) => {
                //     debugger
              })
      } else if ($scope.method = 'HEAD') {
        requestService.head($scope.url).then((success) => {
            const response = new Response(success);
            const receivedDate = (new Date()).getTime();
            // const response = new Response(success);
            const responseTime = receivedDate - initialDate;
            response.responseTime = responseTime;
            $scope.responses.push(response);
            console.log($scope.method)
          }, (error) => {
                // debugger
              })
           } else {
          }
        };
      });
})();