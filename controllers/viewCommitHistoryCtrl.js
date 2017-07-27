var app = angular.module('app');

app.controller('viewCommitHistoryCtrl', function($scope, viewCommitHistoryService) {
    var commit = {
        gitUser: "Priyank1504",
        gitProjectName: "Git_Commit_Web",
        commitList: []
    };
    $scope.commit = angular.copy(commit);
	// Function to serach Commit History for provided userName and projectName.
    $scope.getCommitHistory = function() {
        if ($scope.isDefined($scope.commit.gitUser) && $scope.isDefined($scope.commit.gitProjectName)) {
            viewCommitHistoryService.getCommitHistory($scope.commit.gitUser, $scope.commit.gitProjectName).then(function(data) {
                $scope.commit.commitList = data;
            });
		}
    }
	// function to check if value is not undefined.
    $scope.isDefined = function(val) {
        var result = true;
        if (val == undefined || val == null || val.trim() == "") {
            result = false;
        }
        return result;
    }
	// function to refresh the content.
    $scope.refresh = function() {
        $scope.commit = angular.copy(commit);
        $scope.commit.gitUser = "";
        $scope.commit.gitProjectName = "";
    }
	// function to default.
    $scope.default = function() {
        $scope.commit = angular.copy(commit);
        $scope.getCommitHistory();
    }
    $scope.default();
});