document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');

  const murrayfield = {lat: 55.9422, lng: -3.2408};
  const twickenham = {lat: 51.4559, lng: 0.3415};

  const mainMap = new MapWrapper(mapContainer, murrayfield, 10);

  const contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Murrayfield</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Murrayfield Stadium</b> is a sports stadium located in ' +
    'the west end of Edinburgh, the capital of Scotland. Its all-seater capacity ' +
    'is 67,144 which makes it the largest stadium in Scotland and the fifth ' +
    'largest in the United Kingdom. The stadium is the home of the Scottish ' +
    'Rugby Union (SRU), and is primarily used as a venue for rugby union and ' +
    'hosts most of Scotland\'s home test matches, as well as Pro14 and ' +
    'European Rugby Champions and Challenge Cup matches.</p>'+
    '</div>'+
    '</div>';

  mainMap.addMarker(murrayfield, contentString);
  mainMap.addMarker(twickenham);

  mainMap.addClickListener();

  const takeMeToDunedinButton = document.querySelector('#take-me-to-dunedin');
  mainMap.takeMeToDunedin(takeMeToDunedinButton);

  const whereAmIButton = document.querySelector('#where-am-i');
  mainMap.whereAmI(whereAmIButton);

});
