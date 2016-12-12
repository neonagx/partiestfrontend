(function() {
  'use strict';
  angular.module('ThePartiest')
    .controller('ProfPartsController', ProfPartsController)

  ProfPartsController.$inject = ['$http']

  function ProfPartsController($http){
    var vm = this
    vm.all = []
    vm.getProfParts = getProfParts
  }
}());
