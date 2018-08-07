function busqueda_clic(valor){
	var val = String(valor);
	var url="procesar_datos.php";
	//document.getElementById("demo").innerHTML = x;
	//console.log(val);
	$.ajax({
		type:"POST",
		url:url,
		data:{nombre:valor},
		success:function(res){
			$("#mostrar_datos").html(res)
			//console.log(res);
		}
	})
	url = "imgBuild.php";
    $.ajax({
    	type:"POST",
    	url: url,
    	data: {nombre: val},
    	success:function(res){
    		$("#imageBuild").html(res)
    	}
    })
	$('.modal').modal('show');	
}
function areaSizeM(){
	for (var area = 0 ; area < 4; area++) {
		var cds =  document.getElementById("myMap").areas[area].coords;
		//var cs = coords.getAttribute("coords");
		var listCoords = cds.split(",")
		//console.log(listCoords);
		
		//var widthBuild = parseInt(listCoords[2]) - parseInt(listCoords[0]); 
		//var heightBuild = (2*(parseInt(listCoords[3]) - parseInt(listCoords[1])))-10;

		//console.log("ancho: ",String(parseInt(listCoords[2]) - parseInt(listCoords[0])));
		//console.log("alto: ",String(2*(parseInt(listCoords[3]) - parseInt(listCoords[1]))));
		if(area == 0)
		{	listCoords[0] = String(parseInt(listCoords[0])+60);
			listCoords[2] = String(parseInt(listCoords[2])+60);
			listCoords[1] = String(parseInt(listCoords[1])+60);
			listCoords[3] = String(parseInt(listCoords[3])+60);
		}else if(area == 1 ){
			listCoords[0] = String(parseInt(listCoords[0])+90);
			listCoords[2] = String(parseInt(listCoords[2])+90);
			listCoords[1] = String(parseInt(listCoords[1])+50);
			listCoords[3] = String(parseInt(listCoords[3])+50);
		}else if(area == 2 ){
			listCoords[0] = String(parseInt(listCoords[0])+50);
			listCoords[2] = String(parseInt(listCoords[2])+50);
			listCoords[1] = String(parseInt(listCoords[1])+60);
			listCoords[3] = String(parseInt(listCoords[3])+60);
		}else if(area == 3 ){
			listCoords[0] = String(parseInt(listCoords[0])+50);
			listCoords[2] = String(parseInt(listCoords[2])+50);
			listCoords[1] = String(parseInt(listCoords[1])+60);
			listCoords[3] = String(parseInt(listCoords[3])+60);
		}
		var cadena = "";
		for (var i = 0; i < listCoords.length; i++) {
			if(i+1<4)
				cadena += listCoords[i] + ",";
			else 
				cadena += listCoords[i];
		}
		cds2 = document.getElementById("myMap").areas[area];
		cds2.setAttribute("coords", cadena);
		var cds =  document.getElementById("myMap").areas[area].coords;
		//console.log(cds);
	}
	
	
}
function areaSizeL(){
	for (var area = 0; area < 4; area++) {
		//
		var cds =  document.getElementById("myMap").areas[area].coords;
		//var cs = coords.getAttribute("coords");
		var listCoords = cds.split(",")
		//console.log(listCoords);
		if(area == 0){
			listCoords[0] = String(parseInt(listCoords[0])-60);
			listCoords[2] = String(parseInt(listCoords[2])-60);
			listCoords[1] = String(parseInt(listCoords[1])-60);
			listCoords[3] = String(parseInt(listCoords[3])-60);
		}else if(area == 1 ){
			listCoords[0] = String(parseInt(listCoords[0])-90);
			listCoords[2] = String(parseInt(listCoords[2])-90);
			listCoords[1] = String(parseInt(listCoords[1])-50);
			listCoords[3] = String(parseInt(listCoords[3])-50);
		}else if(area == 2 ){
			listCoords[0] = String(parseInt(listCoords[0])-50);
			listCoords[2] = String(parseInt(listCoords[2])-50);
			listCoords[1] = String(parseInt(listCoords[1])-62);
			listCoords[3] = String(parseInt(listCoords[3])-62);
		}else if(area == 3 ){
			listCoords[0] = String(parseInt(listCoords[0])-50);
			listCoords[2] = String(parseInt(listCoords[2])-50);
			listCoords[1] = String(parseInt(listCoords[1])-60);
			listCoords[3] = String(parseInt(listCoords[3])-60);
		}

		var cadena = "";
		for (var i = 0; i < listCoords.length; i++) {
			if(i+1<4)
				cadena += listCoords[i] + ",";
			else 
				cadena += listCoords[i];
		}
		cds2 = document.getElementById("myMap").areas[area];
		cds2.setAttribute("coords", cadena);
		var cds =  document.getElementById("myMap").areas[area].coords;
		//console.log(cds);	
		//

	}
	//
}