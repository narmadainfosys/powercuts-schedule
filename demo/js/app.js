var app = angular.module("PowerCut", []);

app.controller("ScheduleCtrl", function($scope, $http) {
  $http.get('js/data.json').
  success(function(data, status, headers, config) {
    $scope.singledayschedule = data[0];
    delete $scope.singledayschedule.updated;
  }).
  error(function(data, status, headers, config) {
    // log error
  });
});