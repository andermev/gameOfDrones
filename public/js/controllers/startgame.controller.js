'use strict';

angular.module('gameofdronesApp')
    .controller('startGameController', ['$scope','$http','Todos', '$state', function($scope, $http, Todos, $state) {
        
    $scope.gameDrones = {};
        
    Todos.deleteAll();

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createGame = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.gameDrones.player1 && $scope.gameDrones.player2) {
            $scope.loading = true;
            
            var playerOne = {
                name: $scope.gameDrones.player1,
                number: 1
            };
            
            var playerTwo = {
                name: $scope.gameDrones.player2,
                number: 2
            };
            
            var players = [playerOne, playerTwo];
            
            $state.go("roundGame", {"players" : players});            
            
        }
    };
}]);
