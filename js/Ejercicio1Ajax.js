
console.log('JS ajax Activo.');

document.querySelector('#boton').addEventListener('click', cargaDatos("xml/libros","xml"));

function cargaDatos(rutaNombre, tipo)
{
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', `${rutaNombre}.${tipo}`, true);

	xhttp.send();


	if(tipo == "xml")
	{
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				document.querySelector('#textoMostrar').className = "miNone";
				gestionarFicheroXML(this.responseXML);
			}
			else if (this.status == 404){
				document.querySelector('#textoMostrar').innerHTML = "ERROR 404";
			}
		}
	}
	else if (tipo == "txt")
	{
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				document.querySelector('#textoMostrar').className = "miNone";
				gestionarFicheroTXT(this.responseText);
			}
			else if (this.status == 404){
				document.querySelector('#textoMostrar').innerHTML = "ERROR 404";
			}
		}
	}
	else console.log("Archivo no soportado.")
}

function  gestionarFicheroXML(archivoXML)
{

	console.log('Gestionando fichero XML');
	let capaVacia = document.querySelector("#filas");
	let general = archivoXML.querySelector("busquedaLibros");
	let objC = general.querySelectorAll("libreria");
	for(let e of objC) {
		//let objCDesc = e.querySelector("nombre").responseText;

		capaVacia.innerHTML += `
			<tr>
				<td class="fila">${e.getElementsByTagName("nombre")[0].textContent}</td>
			</tr>`;
		let objCDesc = e.getElementsByTagName("libro");

		if (objCDesc.length)
		{
			objCDesc = objCDesc.childNodes;
			capaVacia.innerHTML += `
			<tr>
				`;
			for(let i of objCDesc) {
				capaVacia.innerHTML += `<td class="fila">${i.textContent}</td>`;
			}
			capaVacia.innerHTML += `
			</tr>`;
		}
		else
		{
			capaVacia.innerHTML += `
			<tr>
				<td class="fila">${objCDesc.textContent}</td>
			</tr>`;
		}
	}
}


function  gestionarFicheroTXT(txt)
{
	console.log('Gestionando fichero TXT');
	let filaMostrar = document.querySelector('#filas');
	filaMostrar.innerHTML = '';
  let lineas = txt.split("\n");
  for(let i of lineas)
  filaMostrar.innerHTML += `
  <tr>
	  <td class="fila">${i}</td>
  </tr>`;
}
