(function() {
  'use strict';
  angular
    .module('ThePartiest', ['ui.router'])
    .config(ProfRouter)

  function ProfRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'parties.html',
        controller: 'ProfPartsController',
        controllerAs: 'profVm'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'signin.html',
        controller: 'SignInController',
        controllerAs: 'vm'
      })
  }
}());
