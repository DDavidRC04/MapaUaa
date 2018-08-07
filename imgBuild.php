<?php 
$archivo = "inf_edf/".$_POST["nombre"].".txt";
if(file_exists($archivo)){
$fp = fopen($archivo, "r");
$s = 1;
$linea = fgets($fp);
	echo "<div class='item active'>";
		echo "<img src='edX-1.jpg' alt='...'>";
		echo "<div class='carousel-caption'>";
	      echo"<h1 class='modal-titl' id='infoDetalladaTitulo'>".$linea."</h1>";
		echo "</div>";
	echo "</div>";
	echo "<div class='item'>";
		echo  "<img src='edX-2.jpg' alt='...'>";
	echo "</div>";
	echo "<div class='item'>";
		echo "<img src='edX-3.jpg' alt='...'>";
	echo "</div>";
fclose($fp);
}
?>
	