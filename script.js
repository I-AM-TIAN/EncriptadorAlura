function encriptar(){
    document.getElementById("contenido_borrable").style.display = "none";
    document.getElementById("output").style.display="flex";
    document.getElementById("copiar").style.display="flex";

    let textoEncriptar = document.getElementById("input").value;

    let encriptado = textoEncriptar
    .replace(/e/g, "ed")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("output").value=encriptado;
}

function desencriptar(){
    document.getElementById("contenido_borrable").style.display = "none";
    document.getElementById("output").style.display="flex";
    document.getElementById("copiar").style.display="flex";
    let textoDesencriptar = document.getElementById("input").value;
    
    let desencriptado = textoDesencriptar
    .replace(/ed/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("output").value=desencriptado;
}


function copiarTexto(){
    let texto = document.getElementById("output").value;
    navigator.clipboard.writeText(texto);
}
