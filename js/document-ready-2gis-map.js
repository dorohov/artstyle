var map;


DG.then(function () {

    if(device.mobile() || device.tablet()){
		map = DG.map('map', {
			center: [52.982600, 36.067300],
			zoom: 16
	  	});
	} else {
		map = DG.map('map', {
			center: [52.982072, 36.066919],
			zoom: 17
	  	});
	}



	var iconMap = DG.icon({
		iconUrl: '/img/default/icon-map.png',
		iconRetinaUrl: '/img/default/icon-map.png',
		iconSize: [83, 96],
		iconAnchor: [42, 96],
		popupAnchor: [0, 0]
	});
	DG.marker([52.982398, 36.067203], {icon: iconMap}).addTo(map).bindPopup('Студия дизайна Ирины Корчевой «ArtStyle»');
});