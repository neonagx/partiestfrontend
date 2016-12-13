(function() {
  'use strict';
  angular
    .module('ThePartiest', ['ui.router', 'ngResource', 'ngMap'])
    .config(ProfRouter)

  ProfRouter.$inject = ['$stateProvider', '$urlRouterProvider']

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
