(function() {
  'use strict';
  angular.module('ThePartiest')
    .config(MainRouter)

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider']

  function MainRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'js/profParties/parties.html',
        controller: 'ProfPartsController',
        controllerAs: 'profVm'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'js/profParties/new.html',
        controller: 'ProfPartsNewController',
        controllerAs: 'newVm'
      })
      .state('show', {
        url: '/show/:id',
        templateUrl: 'js/profParties/showparty.html',
        controller: 'ProfPartsShowController',
        controllerAs: 'showVm'
      })
  }
}());
