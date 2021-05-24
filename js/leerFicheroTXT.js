
function  gestionarFicheroTXT(txt)
{
  let lineas = txt.split("-")
  for(let i of lineas)
    document.querySelector("div:nth-child(2)").innerHTML += "<p>" + i + "</p>"
}

document.querySelector("div:nth-child(1)").addEventListener("mouseover",()=>{
 loadLDocA("leerFicherotxt.txt","txt");
})
