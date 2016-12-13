(function() {
  'use strict';
  angular.module('ThePartiest')
    .controller('ProfPartsController', ProfPartsController)
    .controller('ProfPartsNewController', ProfPartsNewController)
    .controller('ProfPartsShowController', ProfPartsShowController)
    .controller('ProfPartsEditController', ProfPartsEditController)

  ProfPartsController.$inject = ['ProfPartResource']
  ProfPartsNewController.$inject = ['ProfPartResource', '$state']
  ProfPartsShowController.$inject = ['ProfPartResource', '$stateParams']
  ProfPartsEditController.$inject = ['ProfPartResource', '$state', '$stateParams']

  function ProfPartsController(ProfPartResource){
    var vm = this
    vm.all = []
    vm.deleteProfParts = deleteProfParts

    ProfPartResource.query().$promise.then(function(data){
      vm.all = data
    })
    // getProfParts()
    // function getProfParts(){
    //   $http
    //     .get('http://localhost:3000/professionals')
    //     .then(function(res){
    //       vm.all = res.data.professionals
    //     })
    // }
    function deleteProfParts(deleteParty){
      ProfPartResource.delete({id:deleteParty._id}).$promise.then(function(res){
        if(res.message){
          console.log(res.message)
          vm.all = vm.all.filter(function(party){
            return party != deleteParty
          })
        }
      })
    }
    // function deleteProfParts(professional){
    //   $http
    //     .delete('http://localhost:3000/professionals/' + professional._id)
    //     .then(function(res){
    //       var index = vm.all.indexOf(professional)
    //       vm.all.splice(index, 1)
    //     })
    // }
  }

  function ProfPartsNewController(ProfPartResource, $state){
    var vm = this
    vm.addProfPart = addProfPart
    vm.newProfPart = {}

    function addProfPart(){
      ProfPartResource.save(vm.newProfPart).$promise.then(function(jsonParty){
        vm.newProfPart = {}
        $state.go('index')
      })
    }
  }

  function ProfPartsShowController(ProfPartResource, $stateParams) {
    var vm = this
    vm.part = {}

    ProfPartResource.get({id: $stateParams.id}).$promise.then(function(jsonParty){
      vm.part = jsonParty.professional

    })
  }

  function ProfPartsEditController(ProfPartResource, $state, $stateParams){
    var vm = this
    vm.part = {}
    vm.updatePart = updatePart

    ProfPartResource.get({id: $stateParams.id}).$promise.then(function(jsonParty){
      vm.part = jsonParty.professional
      console.log(jsonParty.professional)
    })

    function updatePart(){
      ProfPartResource.update(vm.part).$promise.then(function(editedParty){
        vm.part = editedParty.professional
        console.log(editedParty.professional)
        $state.go('index')
      })
    }
  }
}());
