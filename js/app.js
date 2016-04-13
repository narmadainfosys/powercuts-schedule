var app = angular.module("PowerCut", []);

app.controller("ScheduleCtrl", function($scope, $http) {
	$http.get('js/data.json').
	success(function(data, status, headers, config) {
		$scope.schedule = data[0];
		$scope.singledayschedule = [];

		angular.forEach($scope.schedule, function(value, key) {
 			angular.forEach(value, function(value, key) {
 				$scope.singledayschedule.push(value);
			});
		});
	console.log($scope.singledayschedule);
	}).
	error(function(data, status, headers, config) {
	// log error
	});
});