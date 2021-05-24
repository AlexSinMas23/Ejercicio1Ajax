function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("libros.xml")
	let librerias = xmlDoc.querySelectorAll("libreria")
	for(let i=0; i<librerias.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + librerias[i].textContent + "</p>"
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
}
