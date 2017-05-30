document.addEventListener("DOMContentLoaded", function(event) { //Ждём полной загрузки HTML и построения DOM дерева  

    var div_txt = document.getElementsByClassName('txt');
        var table                    = div_txt[0].getElementsByTagName('table')[0];
        addElemToParent('td','<div align="center">На карте</div>',table.rows[0]);
        table.rows[0].cells[6].width = '50px';

    for(var i=1;i<table.rows.length;i++)
    {
        var table_tr=table.rows[i];
        if(table_tr.cells.length==7)
        {
            addElemToParent('td','<img class="img_map_proj" onclick="openmap(this)" width="24" height="24" style="display: block;margin: auto !important;" src="img/map-icon.svg"/>',table_tr);
        }
        else
        {
            table_tr.cells[0].colSpan="8"; //Корректное отображение рамки
        }
    }

    /*CSS*/
	var wrap=document.getElementById('wrap'); //серый фон
	    wrap.style.display    = "none";
		wrap.style.opacity    = "0.8";
		wrap.style.position   = "fixed";
		wrap.style.left       = "0";
		wrap.style.right      = "0";
		wrap.style.top        = "0";
		wrap.style.bottom     = "0";
		wrap.style.padding    = "16px";
		wrap.style.background = "#666";
		wrap.style.zIndex     = "100";
		wrap.style.overflow   = "auto";
		wrap.onclick          = function() {show_OSMap('none')};

    var windowMap=document.getElementById('window'); //окошко под картой
	    windowMap.style.width      = "600px";
		windowMap.style.height     = "500px";
		windowMap.style.margin     = "50px auto";
		windowMap.style.display    = "none";
		windowMap.style.background = "#fff";
		windowMap.style.zIndex     = "200";
		windowMap.style.position   = "fixed";
		windowMap.style.left       = "0";
		windowMap.style.right      = "0";
		windowMap.style.top        = "0";
		windowMap.style.bottom     = "0";
		/*windowMap.style.padding=" 16px";*/

    var backgroundCloseMap=document.getElementById('backgroundCloseMap');
        backgroundCloseMap.style.display         = "none";
        backgroundCloseMap.style.position        = "absolute";
        backgroundCloseMap.style.zIndex          = "299";
        backgroundCloseMap.style.top             = "8px";
        backgroundCloseMap.style.right           = "8px";
        backgroundCloseMap.style.backgroundColor = "rgba(255,255,255,0.4)";
        backgroundCloseMap.style.height          = "26px";
        backgroundCloseMap.style.width           = "26px";
        backgroundCloseMap.style.borderRadius    = "4px 4px 4px 4px";

    var closeMap=document.getElementById('closeMap'); //окошко с картой
	    closeMap.style.margin          = "2px";
        closeMap.style.display         = "none";
        closeMap.style.position        = "absolute";
        closeMap.style.zIndex          = "300";
        closeMap.style.color           = "white";
        closeMap.style.borderRadius    = "4px 4px 4px 4px";
        closeMap.style.padding         = "0";
        closeMap.style.backgroundColor = "#130085";
        closeMap.style.backgroundColor = "rgba(0, 60, 136, 0.5)";
        closeMap.style.fontSize        = "18px";
        closeMap.style.textAlign       = "center";
        closeMap.style.height          = "22px";
        closeMap.style.width           = "22px";
        closeMap.style.cursor          = "pointer";
        closeMap.onclick               = function() {show_OSMap('none')};
});

    function addElemToParent(createElement,data,parent) //Добавляет createElement с данными data в конец дочерних элементов parent
    {
	    var elem=document.createElement(createElement);
	    elem.innerHTML=data;
	    parent.appendChild(elem);
    }

