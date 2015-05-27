var myIcon = L.icon({
    iconUrl: '../img/map_marker.png',
    iconSize: [20, 24],
    iconAnchor: [20, 35],
    popupAnchor: [-3, -76],
});
        var map = L.map('map').setView([10.22844, 116.14746], 5);
        var marker = L.marker([14.54637, 121.03088], {icon: myIcon}).addTo(map);
        var marker1 = L.marker([13.64065, 100.56885], {icon: myIcon}).addTo(map);
        var marker2 = L.marker([10.69839, 106.77612], {icon: myIcon}).addTo(map);
        var marker3 = L.marker([2.94304, 102.04102], {icon: myIcon}).addTo(map);
        var marker4 = L.marker([6.83917, 100.37109], {icon: myIcon}).addTo(map);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'examples.map-i875mjb7'
        }).addTo(map);



        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }

        map.on('click', onMapClick);


