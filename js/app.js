(function() {
  'use strict';
  angular
    .module('ThePartiest', ['ui.router', 'ngResource'])
    .config(ProfRouter)

  function ProfRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('signin', {
        url: '/signin',
        templateUrl: 'signin.html',
        controller: 'SignInController',
        controllerAs: 'vm'
      })
  }
}());
