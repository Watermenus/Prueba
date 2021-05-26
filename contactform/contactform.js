
funcion recogerDatos(){
	let nombreCliente = document.getElementById("name").value;
	let emailCliente = document.getElementById("email").value;
	let phoneCliente = document.getElementById("phone").value;
	let peopleCliente = document.getElementById("people").value;
	let messageCliente = document.getElementById("message").value;
	let mensaje = "Nombre: " + nombreCliente + "\n" + "Email: " + emailCliente + "\n";

	window.location.href = "mailto:jeaustin.rdz@gmail.com?subject=Reservacion&body=:" + mensaje;
}