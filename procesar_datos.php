<?php	
	//echo $_POST["nombre"]."</td></tr>";
	$archivo = "inf_edf/".$_POST["nombre"].".txt";
	if(file_exists($archivo)){
		$fp = fopen($archivo, "r");
		$con = 0;
		while(!feof($fp)) {
			if($con == 0){
				echo "<div class='panel-heading' role='tab' id='Titulo1' data-toggle='collapse' data-parent='#Departamentos' href='#acordeon1' aria-expanded='true' aria-controls='acordeon1'>";
				echo "<h4 class='panel-title'>";
				$linea = fgets($fp);
				echo $linea;
				echo "<span class='glyphicon glyphicon-triangle-bottom' style='float: right;'></span>";
				echo "</h4>";
				echo "</div>";
				echo "<div id='acordeon1' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='Titulo1'>";
				echo "<div class='panel-body'>";		
			}
			if($con == 2){ 
				$linea = fgets($fp);
				echo $linea."<br>";	
			}
			$con=2;
		}
		echo "</div>";
		echo "</div>";
		fclose($fp);
	}

	
?>   	
