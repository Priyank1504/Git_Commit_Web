var app = angular.module('app');

app.factory('viewCommitHistoryService', ['$http','$q', function($http,$q) {
	return {
        getCommitHistory: function(_userName,_projectName) {
            var deferred = $q.defer();
            req = {
                    method: 'GET',
                    url: 'https://api.github.com/repos/'+_userName+'/'+_projectName+'/commits',
                }
                $http(req).success(function(response) {
					deferred.resolve(response);
                });
           return deferred.promise;
		}
	}
}]);

