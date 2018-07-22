var myApp=angular.module('myApp');

myApp.controller('ParController', function($scope) {
  $scope.ids = [1, 2, 3];
  $scope.Del = function(index) {
    $scope.ids.splice(index, 1);
  };
});

myApp.controller('ChildController', function($scope) {
  $scope.ids;
});