<?php
if($_POST["nombre"]=="57"){
	$archivo1 = "inf_edf/".$_POST["nombre"]."A-B.txt";	
	for ($i=2; $i <4 ; $i++) { 
		# code...
		if(file_exists($archivo1)){
			$fp = fopen($archivo1, "r");
			$linea = fgets($fp);
			echo "<div class='resultado' id='resultado".$i."' role='dialog'>";
			echo "<img id='resultado".$i."' src='edificioEjemplo.jpg' alt='Edificio X'>";
			echo "<label id='nombreEd'>".$linea."</label>";
			echo "</div>";
			fclose($fp);
		}
		$archivo1 = "inf_edf/".$_POST["nombre"]."C.txt";
	}
}else{
	if($_POST["nombre"] == "54"){
		$archivo = "inf_edf/".$_POST["nombre"]."H-I.txt";	
	}else{
		$archivo = "inf_edf/".$_POST["nombre"].".txt";
	}
	if(file_exists($archivo)){
		$fp = fopen($archivo, "r");
		$linea = fgets($fp);
		echo "<div class='resultado' id='resultado1' role='dialog'>";
		echo "<img id='resultado1' src='edificioEjemplo.jpg' alt='Edificio X'>";
		echo "<label id='nombreEd'  >".$linea."</label>";
		echo "</div>";
		fclose($fp);
	}else{
		echo"<h1 class='modal-titl' id='infoDetalladaTitulo' style='color: #396;'>No Registro</h1>";
	}
}
?>