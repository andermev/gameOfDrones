'use strict';

angular.module('gameofdronesApp')
    .controller('roundGameController', ['$scope','$http','Todos', 'Utility', '$stateParams', '$state', function($scope, $http, Todos, Utility,                                                                                  $stateParams, $state) {
        
        $scope.gameDrones = {};
        $scope.round = {};
        
        var setRound = function(player){            
            $scope.round.limitMovements = Utility.getLimitMovements();
            $scope.round.moveType = Utility.getMoveType();
            $scope.round.numberRound = Utility.getNumberRound();
            $scope.round.numberPlayer = Utility.getNumberPlayer();
            $scope.round.namePlayer = Utility.getNamePlayer();
        };
        
        $scope.selectMoveType = function(){
            Utility.setMoveType($scope.gameDrones.selectMove);
        }        
        
        var initRound = function(){
            if(!Utility.getStarting()){                    
                    $stateParams.players.forEach(function (player) {
                        Utility.setPlayers(player.number, player.name, "", 1, "create");
                        if(player.number == 1){
                            $scope.round.numberPlayer = player.number;
                            $scope.round.namePlayer = player.name;
                            Utility.setStarting(true);
                            setRound(Utility);
                        }
                    });
            }else{                
                setRound(Utility);
            }
            
            $scope.loading = false;
        }
        
        initRound();
        
        var checkMovementWinner = function(moveFirstPlayer, selectCurrentMove){
            switch(selectCurrentMove){
                case "paper":
                    if(moveFirstPlayer.move == "rock"){
                        setCountVictoriesFirstPlayer();
                    }
                    break;
                case "rock":
                    if(moveFirstPlayer.move == "scissors"){
                        setCountVictoriesFirstPlayer();
                    }
                    break;
                case "scissors":
                    if(moveFirstPlayer.move == "paper"){
                        setCountVictoriesFirstPlayer();
                    }
                    break;
            }
            switch(moveFirstPlayer.move){
                case "paper":
                    if(moveFirstPlayer.move == "rock"){
                        setCountVictoriesSecondPlayer();
                    }
                    break;
                case "rock":
                    if(moveFirstPlayer.move == "scissors"){
                        setCountVictoriesSecondPlayer();
                    }
                    break;
                case "scissors":
                    if(moveFirstPlayer.move == "paper"){
                        setCountVictoriesSecondPlayer();
                    }
                    break;
            }
        }
        
        var checkMove = function(move, moveNumber){
            if(moveNumber <= $scope.round.limitMovements){
                
                if($scope.round.numberPlayer == 2){
                    
                    $scope.round.numberPlayer = 1;
                    
                    Utility.setPlayers(2, Utility.getNamePlayer(), $scope.gameDrones.selectMove, moveNumber++, "update");
                    
                    var moveFirstPlayer = Utility.getPlayers(1);
                    checkMovementWinner(moveFirstPlayer, $scope.gameDrones.selectMove);
                    
                    if(Utility.getCountVictoriesFirstPlayer() == 2 || Utility.getCountVictoriesFirstPlayer() == 3){
                        $scope.message = "The first player is the winner";
                    }else if(Utility.getCountVictoriesSecondPlayer() == 2 || Utility.getCountVictoriesSecondPlayer() == 3){
                        $scope.message = "The second player is the winner";
                    }else {
                        setRound(Utility.getPlayers(1));
                    }
                }else{
                    Utility.setPlayers(1, Utility.getNamePlayer(), $scope.gameDrones.selectMove, moveNumber++, "update");
                    var player = Utility.getPlayers(2);
                    setRound(player);
                    $scope.round.numberPlayer = 2;
                }
            }else{
                $scope.error = "Invalid Movement, you have passed the allowed limit."
            }
        }
        
        $scope.playMove = function(){
            var moveNumber = Utility.getNumberRound();
            checkMove($scope.gameDrones.selectMove, moveNumber);
        }
        
}]);
