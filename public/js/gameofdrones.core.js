'use strict';

angular.module('gameofdronesApp', ['ui.router'])

.run(function ($rootScope, $location, $window, $http, $state) {

    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;
    });

    $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
        var titleKey = 'global.title' ;

        // Remember previous state unless we've been redirected to login or we've just
        // reset the state memory after logout. If we're redirected to login, our
        // previousState is already set in the authExpiredInterceptor. If we're going
        // to login directly, we don't want to be sent to some previous state anyway
        if (toState.name != 'login' && $rootScope.previousStateName) {
          $rootScope.previousStateName = fromState.name;
          $rootScope.previousStateParams = fromParams;
        }
    });
})
 .config(function ($urlRouterProvider) {

     $urlRouterProvider.otherwise('/');

 });

