'use strict';

angular.module('gameofdronesApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('startGame', {
                url: '/',                
                views: {
                    'content@': {
                        templateUrl: 'startgame.html',
                        controller: 'startGameController',
                    }
                }
            })
            .state('roundGame', {
                params : {
                    players:[]
                },
                views: {
                    'content@': {
                        templateUrl: 'roundgame.html',
                        controller: 'roundGameController',
                    }
                }
            });
    });
