
;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    	this.get = (url) => $http.get(url);
    	this.post = (url) => $http.post(url);
    	this.options = (url) => $http({
    		method: 'OPTIONS',
    		url: url
    	});
	 		this.head = (url) => $http.head(url);
  	});
})();