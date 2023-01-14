function encriptarTexto(){
    // manda el texto al box #2 
    let texto1 = document.getElementById('texto1').value;
    document.getElementById("texto2").value=texto1;
    // oculta el elemento 
    document.getElementById('ocultarId').style.display = 'none';
    //mostrar textArea Derecho
    document.getElementById('texto2').style.display = 'block';
    //mostar boton
    document.getElementById('btnMostrar').style.display = 'block';
}
function desencriptarTexto(){
    // manda el texto al box # 1 
    let texto2 = document.getElementById('texto2').value;
    document.getElementById("texto1").value=texto2;
}

// FUNCION COPIAR 
function copiar(){
    let texto = document.getElementById('texto2');
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand('copy')
}
