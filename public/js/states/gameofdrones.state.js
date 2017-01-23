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
            });
    });
