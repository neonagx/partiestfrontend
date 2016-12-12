(function() {
  'use strict';
  angular.module('ThePartiest')
    .controller('ProfPartsController', ProfPartsController)
    .controller('ProfPartsNewController', ProfPartsNewController)

  ProfPartsController.$inject = ['$http']
  ProfPartsNewController.$inject = ['$http', '$state']

  function ProfPartsController($http){
    var vm = this
    vm.all = []
    vm.getProfParts = getProfParts
    vm.deleteProfParts = deleteProfParts

    getProfParts()
    function getProfParts(){
      $http
        .get('http://localhost:3000/professionals')
        .then(function(res){
          vm.all = res.data.professionals
        })
    }

    function deleteProfParts(professional){
      $http
        .delete('http://localhost:3000/professionals/' + professional._id)
        .then(function(res){
          var index = vm.all.indexOf(professional)
          vm.all.splice(index, 1)
        })
    }
  }

  function ProfPartsNewController($http, $state){
    var vm = this
    vm.addProfPart = addProfPart
    vm.newProfPart = {}

    function addProfPart(){
      $http
        .post('http://localhost:3000/professionals', vm.newProfPart)
        .then(function(res){
          $state.go('index')
        })
        vm.newProfPart = {}
    }
  }
}());
