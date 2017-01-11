;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
      console.log("responseData", responseData);
    };

    return Response;
  });
})();