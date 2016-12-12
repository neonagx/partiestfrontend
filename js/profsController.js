(function() {
  'use strict';
  angular.module('ThePartiest')
    .controller('ProfPartsController', ProfPartsController)

  ProfPartsController.$inject = ['$http']

  function ProfPartsController($http){
    var vm = this
    vm.all = []
    vm.getProfParts = getProfParts

    getProfParts()
    function getProfParts(){
      $http
        .get('http://localhost:3000/profParts')
        .then(function(res){
          vm.all = res.data.profParts
        })
    }

  }
}());
