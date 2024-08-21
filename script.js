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

            // Verifica si la API de Clipboard está disponible
            if (navigator.clipboard) {
                navigator.clipboard.writeText(texto)
                    .then(() => {
                        alert("Texto copiado al portapapeles");
                    })
                    .catch(err => {
                        console.error("Error al copiar el texto: ", err);
                    });
            } else {
                // Fallback para navegadores que no soportan navigator.clipboard
                let textArea = document.createElement("textarea");
                textArea.value = texto;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
                alert("Texto copiado al portapapeles");
            }
}
