(function MapController(){
    var vm = this
    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(40.000, -98.0000),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var infoWindow = new google.maps.InfoWindow()
    var cities = [
      {
        city: 'Los Angeles',
        desc: 'This is the party location',
        lat: 34.0500,
        long: -118.2500
      }
    ]

    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions)
    vm.markers = []

    function createMarker(info){
      var marker = new google.maps.Marker({
        map: vm.map,
        position: new google.maps.LatLng(info.lat, info.long),
        title: info.city
      })
      marker.content = '<div class="infoWindowContent">' + info.desc + '</div>'
      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content)
        infoWindow.open(vm.map, marker)
      })
      vm.markers.push(marker)
    }
    for(var i = 0; i < cities.length; i++){
      createMarker(cities[i])
    }
    vm.openInfoWindow = function(e, selectedMarker){
      e.preventDefault()
      google.maps.event.trigger(selectedMarker, 'click')
    }
  })()
