
console.log('JS intento ajax Activo.');

document.querySelector('#boton').addEventListener('click', cargaDatos);

function cargaDatos()
{
	//console.log('funcion activa.');
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'txt/archivo2.txt', true);

	xhttp.send();

	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			//document.querySelector('#textoMostrar').innerHTML = this.responseText;
			gestionarFicheroTXT(this.responseText);
		}
		else if (this.status == 404){
			//console.log(this.responseText);
			document.querySelector('#textoMostrar').innerHTML = "ERROR 404";
		}
	}
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