
console.log('JS ajax Activo.');

document.querySelector('#boton').addEventListener('click', cargaDatos("xml/libros","xml"));

function cargaDatos(rutaNombre, tipo)
{
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', `${rutaNombre}.${tipo}`, true);

	xhttp.send();

	xhttp.onreadystatechange = function(tipo){
		if (this.readyState == 4 && this.status == 200){
			document.querySelector('#textoMostrar').className = "miNone";
			if(tipo == "xml") gestionarFicheroXML(this.responseXML);
			else gestionarFicheroTXT(this.responseText);
		}
		else if (this.status == 404){
			document.querySelector('#textoMostrar').innerHTML = "ERROR 404";
		}
	}
}

function  gestionarFicheroXML(archivoXML)
{
	
	let capaVacia = document.querySelector("#filas")
	let objC = archivoXML.querySelectorAll("libreria")
	for(let e of objC) {
		let obcDesc = e.querySelector("nombre");
		capaVacia.innerHTML += `
		<tr>
			<td class="fila">${obcDesc}</td>
		</tr>`;
	}
	/*for(let i=0; i<objC.length; i++) {
		for(let e=0; e<objC.length; e++) {
			capaVacia.innerHTML += `
			<tr>
				<td class="fila">${i}</td>
			</tr>`;
		}
	}*/
}



function  gestionarFicheroTXT(txt)
{
	let filaMostrar = document.querySelector('#filas');
	filaMostrar.innerHTML = '';
  let lineas = txt.split("\n")
  for(let i of lineas)
  filaMostrar.innerHTML += `
  <tr>
	  <td class="fila">${i}</td>
  </tr>`;
}
