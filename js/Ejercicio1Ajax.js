
console.log('JS intento ajax Activo.');

document.querySelector('#boton').addEventListener('click', cargaDatos("xml/libros","xml"));

function cargaDatos(rutaNombre, tipo)
{
	//console.log('funcion activa.');
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', `${rutaNombre}.${tipo}`, true);

	xhttp.send();

	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			//document.querySelector('#textoMostrar').innerHTML = this.responseText;
			document.querySelector('#textoMostrar').className = "miNone";
			if(tipo == "xml") gestionarFicheroXML(this.responseXML);
			else gestionarFicheroTXT(this.responseText);
		}
		else if (this.status == 404){
			//console.log(this.responseText);
			document.querySelector('#textoMostrar').innerHTML = "ERROR 404";
		}
	}
}

function  gestionarFicheroXML()
{
	let filaMostrar = document.querySelector('#filas');
	filaMostrar.innerHTML = '';
	let lineas = xml.split("<libreria>")
	for(let i of lineas)
	{
	filaMostrar.innerHTML += `
	<tr>
		<td class="fila">${i}</td>
	</tr>`;
	}	
    //document.querySelector("div:nth-child(2)").innerHTML += "<p>" + i + "</p>"
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
    //document.querySelector("div:nth-child(2)").innerHTML += "<p>" + i + "</p>"
}
/*
document.querySelector("div:nth-child(1)").addEventListener("mouseover",()=>{
 loadLDocA("leerFicherotxt.txt","txt");
})*/
