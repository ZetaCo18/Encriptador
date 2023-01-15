// FUNCION COPIAR 
function copiar() {
    let textoEncriptado = addEventListener("#btn-copiar").value;
    navigator.clipboard.writeText(textoEncriptado);
    alert("Mensaje copiado a su portapapeles!");
  }

// FUNCION ENCRIPTAR 
function encriptar(){
    let texto = document.querySelector("#texto1").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textarea2").value = textoCifrado;
    document.querySelector("#texto1").value;

}

let boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar; 

function desencriptar(){
    let texto = document.querySelector("#texto1").value;
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".textarea2").value = textoCifrado;
    document.querySelector("#texto1").value;

}

let boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

// function encriptarTexto(){
//     // manda el texto al box #2 
//     let texto1 = document.getElementById('texto1').value;
//     document.getElementById("texto2").value=texto1;
//     // oculta el elemento 
//     document.getElementById('ocultarId').style.display = 'none';
//     //mostrar textArea Derecho
//     document.getElementById('texto2').style.display = 'block';
//     //mostar boton
//     document.getElementById('btnMostrar').style.display = 'block';
// }
// function desencriptarTexto(){
//     // manda el texto al box # 1 
//     let texto2 = document.getElementById('texto2').value;
//     document.getElementById("texto1").value=texto2;
// }

