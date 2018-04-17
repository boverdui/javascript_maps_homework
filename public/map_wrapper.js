const MapWrapper = function (container, center, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
}

MapWrapper.prototype.addMarker = function (coords, contentString) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });
  marker.addListener('click', function () {
    infowindow.open(this.googlemap, marker);
  });
}

MapWrapper.prototype.addClickListener = function () {
  google.maps.event.addListener(this.googleMap, 'click', (evt) => {
    const lat = evt.latLng.lat();
    const lng = evt.latLng.lng();
    this.addMarker({lat: lat, lng: lng});
  });
}

MapWrapper.prototype.takeMeToDunedin = function (takeMeToDunedinButton) {
  takeMeToDunedinButton.addEventListener('click', () => {
    this.googleMap.setCenter(new google.maps.LatLng(-45.8788, 170.5028));
  });
}

MapWrapper.prototype.whereAmI = function (whereAmIButton) {
  whereAmIButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.googleMap.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    });
  });
}
