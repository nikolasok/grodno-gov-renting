function GetMap(lon,lat) {

    map = new OpenLayers.Map("OSMap");
        var mapnik         = new OpenLayers.Layer.OSM();
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        var position       = new OpenLayers.LonLat(lon,lat).transform( fromProjection, toProjection);
        var zoom           = 16;
        map.addLayer  (mapnik);
        map.setCenter (position, zoom );

    var markers = new OpenLayers.Layer.Markers( "Markers" );
        map.addLayer(markers);
        var size           = new OpenLayers.Size(21,25);
        var offset         = new OpenLayers.Pixel(-(size.w/2), -size.h);
        var icon           = new OpenLayers.Icon('img/marker.png', size, offset);
        markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(lon,lat).transform( fromProjection, toProjection),icon));

}