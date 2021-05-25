<?php
	$destino = "jeaustin.rdz@gmail.com";
	$nombre = $_Post['name'];
	$email = $_Post['email'];
	$phone = $_Post['phone'];
	$people = $_Post['people'];
	$message = $_Post['message'];
	$contenido = "Nombre: " . $nombre . "\nEmail" . $email . "\nTelefono: " . $phone . "\nPeople: " . $people . "\nMessage: " . $message;
	mail($detino,"Reserva", $contenido);
	header("Location:index.html");
?>