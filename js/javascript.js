function encriptarTexto(){
    // manda el texto al box #2 
    let texto1 = document.getElementById('texto1').value;
    document.getElementById("texto2").value=texto1;
    // oculta el elemento 
    document.getElementById('ocultarId').style.display = 'none';
}
function desencriptarTexto(){
    // manda el texto al box # 1 
    let texto2 = document.getElementById('texto2').value;
    document.getElementById("texto1").value=texto2;
}