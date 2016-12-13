(function MapController(){
    var vm = this
    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(40.000, -98.0000),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions)
  })()
 console.log('ajsfdksa;')
