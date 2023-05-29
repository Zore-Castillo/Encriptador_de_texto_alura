function encriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    var textoCifrado = texto
        .replace(/e/igm,"enter")
        .replace(/o/igm,"ober")
        .replace(/i/igm,"imes")
        .replace(/a/igm,"ai")
        .replace(/u/igm,"ufat")

    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto encriptado con Exito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/exito.png";
    }
    else{
        muñeco.src = "./imagenes/ops.png";
        tituloMensaje.textContent = "Ningun mensaje fue encriptado";
        parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar";
        alert("Debes ingresar un texto")
        
    }
   
}   



function desencriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoDecifrado = texto
        .replace(/ober/igm,"o")
        .replace(/enter/igm,"e")
        .replace(/imes/igm,"i")
        .replace(/ai/igm,"a")
        .replace(/ufat/igm,"u")
    
    if(texto.length != 0){
        document.getElementById("texto").value = textoDecifrado
        tituloMensaje.textContent = "Texto desencriptado con Exito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/desencriptado.png";
       }
    else{
        muñeco.src = "./imagenes/ops.png";
        tituloMensaje.textContent = "Ningun mensaje fue desencriptado";
        parrafo.textContent = "Ingresa el texto que quieres desencriptar o encriptar";
        alert("Debes ingresar un texto")
            
    }

}

function copiar() {
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("Se Copio");
}

