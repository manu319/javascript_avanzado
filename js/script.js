function cargar(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            mostrar(this);
        }
    }
    

    xhttp.open("GET","tiempo.xml", true);
    xhttp.send();
}

function mostrar(xml){
    let objHttp = xml.responseXML;
    let cadena = "";

    let nombre = objHttp.getElementsByTagName('nombre');
    let estado = objHttp.getElementsByTagName('estado');
    let max = objHttp.getElementsByTagName('maxima');
    let min = objHttp.getElementsByTagName('minima');

    for(let i=0; i < nombre.length; i++){
        cadena += "Ciudad: <strong>" + nombre[i].childNodes[0].nodeValue + "</strong><br>";
        cadena += "El cielo está: <strong>" + estado[i].childNodes[0].nodeValue + "</strong><br>";
        cadena += "La temperatura máxima es: <strong>" + max[i].childNodes[0].nodeValue + "</strong><br>";
        cadena += "La temperatura mínima es: <strong>" + min[i].childNodes[0].nodeValue + "</strong><br><br>";
    }

    document.getElementById("caja").innerHTML = cadena;

}
cargar();