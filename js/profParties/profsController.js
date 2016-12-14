(function() {
  'use strict';
  angular.module('ThePartiest')
    .controller('ProfPartsController', ProfPartsController)
    .controller('ProfPartsNewController', ProfPartsNewController)
    .controller('ProfPartsShowController', ProfPartsShowController)
    .controller('ProfPartsEditController', ProfPartsEditController)

  ProfPartsController.$inject = ['ProfPartResource', 'authService']
  ProfPartsNewController.$inject = ['ProfPartResource', '$state']
  ProfPartsShowController.$inject = ['ProfPartResource', '$stateParams']
  ProfPartsEditController.$inject = ['ProfPartResource', '$state', '$stateParams']

  function ProfPartsController(ProfPartResource, authService){
    var vm = this
    vm.all = []
    vm.deleteProfParts = deleteProfParts
    vm.currentUser = authService.currentUser()

    ProfPartResource.query().$promise.then(function(data){
      vm.all = data
    })

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
      vm.part = jsonParty
    })
  };

  function ProfPartsEditController(ProfPartResource, $state, $stateParams){
    var vm = this
    vm.part = {}
    vm.updatePart = updatePart

    ProfPartResource.get({id: $stateParams.id}).$promise.then(function(jsonParty){
      vm.part = jsonParty
    })

    function updatePart(){
      ProfPartResource.update(vm.part).$promise.then(function(editedParty){
        vm.part = editedParty
        $state.go('index')
      })
    }
  }
})();
