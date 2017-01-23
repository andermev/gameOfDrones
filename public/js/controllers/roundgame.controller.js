'use strict';

angular.module('gameofdronesApp')
    .controller('roundGameController', ['$scope','$http','Todos', function($scope, $http, Todos) {

        Todos.get().success(function(data) {
            $scope.todos = data;
            $scope.loading = false;
        });
        
}]);
