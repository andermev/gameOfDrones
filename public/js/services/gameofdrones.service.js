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
    .factory('Util', function() {
    
        var numberPlayer = 1;
        var namePlayer = null;
        var limitMovements = 3;
        var moveType = null;
        var numberRound = 1;
        var starting = false;

        var setNumberPlayer = function(numberPlayer){
            numberPlayer = numberPlayer;
        }

        var getNumberPlayer = function(){
            return numberPlayer;
        }

        var setNamePlayer = function(namePlayer){
            namePlayer = namePlayer;
        }

        var getNamePlayer = function(){
            return namePlayer;
        }

        var setLimitMovements = function(limitMovements){
            limitMovements = limitMovements;
        }

        var getLimitMovements = function(){
            return limitMovements;
        }
        
        var setMoveType = function(moveType){
            moveType = moveType;
        }

        var getMoveType = function(){
            return moveType;
        }

        var setNumberRound = function(numberRound){
            numberRound = numberRound;
        }

        var getNumberRound = function(){
            return numberRound;
        }
        
        var setStarting = function(starting){
            starting = starting;
        }

        var getStarting = function(){
            return starting;
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
            getStarting : getStarting
		}
	});