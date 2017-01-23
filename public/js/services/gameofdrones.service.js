angular.module('gameofdronesApp')

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
            deleteAll : function() {
				return $http.delete('/api/todos');
			},
            getRound : function() {
				return $http.get('/api/todos/round');
			},
			createRound : function(todoData) {
				return $http.post('/api/todos/round', todoData);
			},
			deleteRound : function(id) {
				return $http.delete('/api/todos/round/' + id);
			}
		}
	}])
    .factory('Utility', function() {
    
        var numberPlayer = 1;
        var namePlayer = "";
        var limitMovements = 3;
        var moveType = "";
        var numberRound = 1;
        var starting = false;
        var victoriesFirstPlayer = 0;
        var victoriesSecondPlayer = 0;
        var movementFirstPlayer = {};
        var moveFirstPlayer = 0;
        var moveNumberFirstPlayer = 0;
        var players = [];

        var setNumberPlayer = function(numbPlayer){
            numberPlayer = numbPlayer;
        }

        var getNumberPlayer = function(){
            return numberPlayer;
        }

        var setNamePlayer = function(namePlay){
            namePlayer = namePlay;
        }

        var getNamePlayer = function(){
            return namePlayer;
        }

        var setLimitMovements = function(limitMoves){
            limitMovements = limitMoves;
        }

        var getLimitMovements = function(){
            return limitMovements;
        }
        
        var setMoveType = function(moveT){
            moveType = moveT;
        }

        var getMoveType = function(){
            return moveType;
        }

        var setNumberRound = function(numbRound){
            numberRound = numbRound;
        }

        var getNumberRound = function(){
            return numberRound;
        }
        
        var setStarting = function(start){
            starting = start;
        }

        var getStarting = function(){
            return starting;
        }
        
        var setCountVictoriesFirstPlayer = function(victoryFirstPlayer){
            victoriesFirstPlayer = victoryFirstPlayer;
        }
        
        var getCountVictoriesFirstPlayer = function(){
            return victoriesFirstPlayer;
        }
        
        var setCountVictoriesSecondPlayer = function(victorySecondPlayer){
            victoriesSecondPlayer = victorySecondPlayer;
        }
        
        var getCountVictoriesSecondPlayer = function(){
            return victoriesSecondPlayer;
        }
        
        var setPlayers = function(newNumberPlayer, newNamePlayer, newMove, newMoveNumber, operation){            
            
            var play = [];
            
            switch(operation){
                case "create":
                    var obj = {moveType : newMove, numberRound : newMoveNumber, 
                            numberPlayer : newNumberPlayer, namePlayer : newNamePlayer, limitMovements : 3}
                    players.push(obj);
                    break;
                case "update":
                    play = players[numberPlayer - 1];
                    play.moveType = newMove;
                    play.numberRound = newMoveNumber;
                    play.numberPlayer = newNumberPlayer;
                    play.namePlayer = newNamePlayer;
                    play.limitMovements = 3;
                    players[numberPlayer - 1] = play;
            }
            
        }
        
        var getPlayers = function(indexPlayer) {
            return players[indexPlayer - 1];
        }
    
		return {
			setNumberPlayer : setNumberPlayer,
			getNumberPlayer : getNumberPlayer,
            setNamePlayer : setNamePlayer,
            getNamePlayer : getNamePlayer,
            setLimitMovements : setLimitMovements,
            getLimitMovements : getLimitMovements,
            setMoveType : setMoveType,
            getMoveType : getMoveType,
            setNumberRound : setNumberRound,
            getNumberRound : getNumberRound,
            setStarting : setStarting,
            getStarting : getStarting,
            setCountVictoriesFirstPlayer : setCountVictoriesFirstPlayer,
            getCountVictoriesFirstPlayer : getCountVictoriesFirstPlayer,
            setCountVictoriesSecondPlayer : setCountVictoriesSecondPlayer,
            getCountVictoriesSecondPlayer : getCountVictoriesSecondPlayer,
            setPlayers : setPlayers,
            getPlayers : getPlayers
		}
	});