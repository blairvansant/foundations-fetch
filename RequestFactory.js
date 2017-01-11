;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
      this.methodName = responseData.config.method;
      this.urlName = responseData.config.url;
      console.log("responseData", responseData);
    };

    return Response;
  });
})();