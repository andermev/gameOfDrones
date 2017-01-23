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
            
            Todos.create(playerOne);
            
            var playerTwo = {
                name: $scope.gameDrones.player2,
                number: 2
            };
            
            Todos.create(playerTwo)

            // call the create function from our service (returns a promise object)
            //Todos.create($scope.gameDrones)

                // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.loading = false;
                    $scope.gameDrones = {}; // clear the form so our user is ready to enter another
                    $scope.todos = data; // assign our new list of todos
                    $state.go("roundGame");
                });
        }
    };
}]);
