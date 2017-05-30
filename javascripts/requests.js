
    function getLocationOSM(y,z,url)
    {
	    var mass;
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        var x=new XHR();

        x.open("GET", url, true);
        x.onload = function ()
        {
            mass=x.responseText;
            var jsonEncoded=JSON.parse(x.responseText);
            console.log( jsonEncoded[0]["lon"]);
            GetMap(jsonEncoded[0]["lon"],jsonEncoded[0]["lat"]);
            if(y<z-1)
            {
                y++;
    	        call(y,z);
            }
        }

        x.send(null);
    }
//http://nominatim.openstreetmap.org/search/Unter%20den%20Linden%201%20Berlin?format=json&addressdetails=1&limit=1&polygon_svg=1