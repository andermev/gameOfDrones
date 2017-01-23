'use strict';

angular.module('gameofdronesApp')
    .controller('roundGameController', ['$scope','$http','Todos', 'Util', function($scope, $http, Todos, Util) {
        
        $scope.gameDrones = {};
        $scope.round = {};
        
        var setRound = function(player){
            $scope.round.numberPlayer = Util.getNumberPlayer();
            $scope.round.namePlayer = Util.getNamePlayer();
            $scope.round.limitMovements = Util.getLimitMovements();
            $scope.round.moveType = Util.getMoveType();
            $scope.round.numberRound = Util.getNumberRound();
        };
        
        Util.setMoveType($scope.gameDrones.selectMove);
        
        var initRound = function(){
            if(!Util.getStarting()){
                Todos.get().success(function(dataPlayer) {
                    
                    dataPlayer.forEach(function (player) {
                        if(player.number == 1){
                            Util.setNumberPlayer(player.number);
                            Util.setNamePlayer(player.name);
                            Util.setLimitMovements(3);
                            Util.setNumberRound(1);
                            Util.setStarting(true);
                            setRound(Util);
                        }
                    });
                });
            }else{
                setRound(Util);
            }
            
            $scope.loading = false;
        }
        
        initRound();
        
}]);
