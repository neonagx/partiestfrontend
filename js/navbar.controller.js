(function() {
  "use strict";

  angular
    .module("ThePartiest")
    .controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$log", "authService", "$mdDialog", "$mdSidenav"];

  function NavbarController($log, authService, $mdDialog, $mdSidenav) {
    var vm = this;

    vm.authService = authService
    vm.showAlert = showAlert
    vm.toggleLeft = buildToggler('left')

    function buildToggler(componentId){
      return function(){
        $mdSidenav(componentId).toggle()
      }
    }

    function showAlert(){
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
         .clickOutsideToClose(true)
         .title('The Partiest')
         .textContent('The Partiest is a full MEAN Stack application that lets you create your own parties for your company.  Without using those boring Microsoft Office or powerpoint, it let you post relevant party information along with pictures and youtube videos to advertise for your sponsors.  With a built in Google API, the address for your party will be directed to you whenever you need!! SO COOL')
         .ariaLabel('NOW GO OUT THERE AND MAKE SOME PARTY or PARTIES!!')
         .ok('Got it!')
         .targetEvent()
       );
    }

    $log.info("NavbarController loaded!");
  }
})();
