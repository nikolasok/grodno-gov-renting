//функция при нажатии на карту в табоице
function openmap(el)
{
    //формируем url
    console.log(el.parentNode.parentNode);
	var tr=el.parentNode.parentNode;
        var country="Беларусь";
        var city="Гродно";
	    var streetName=tr.cells[1].getElementsByTagName('div')[0].innerHTML;
	    var streetNumber=tr.cells[2].getElementsByTagName('div')[0].innerHTML;

	    //http://nominatim.openstreetmap.org/search?city=Гродно&street=45+ул.Кабяка&format=json
        var url="http://nominatim.openstreetmap.org/search/?" +
            "country="
                     +country+
            "&city="+
                     city+
            "&street="+
                       streetNumber+
            "+"+
                streetName+
            "&format=json&addressdetails=1&limit=1";

    var y=0;
    var z=1;
    getLocationOSM(y,z,url);

    var windowMapClear=document.getElementById('OSMap');
    windowMapClear.innerHTML = '';
    show_OSMap("block");
}

    //Смена состояния отображения (display:block,none)
    function show_OSMap(state)
    {
	    document.getElementById('window').style.display = state;
		document.getElementById('wrap').style.display = state;
		document.getElementById('OSMap').style.display = state;
        document.getElementById('closeMap').style.display = state;
        document.getElementById('backgroundCloseMap').style.display = state;
    }