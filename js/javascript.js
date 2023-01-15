// FUNCION COPIAR
document.querySelector('#btn-copiar').addEventListener('click', function(){
    let copiarTexto = document.querySelector('#texto2').value;
    navigator.clipboard.writeText(copiarTexto).then(()=>{
        
    });
});

// FUNCION ENCRIPTAR 
function encriptar(){
    let texto = document.querySelector("#texto1").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textarea2").value = textoCifrado;
    document.querySelector("#texto1").value;

}

let boton1 = document.querySelector("#btn-encriptar");  

// FUNCION DESENCRIPTAR
function desencriptar(){
    let texto = document.querySelector("#texto1").value;
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".textarea2").value = textoCifrado;
    document.querySelector("#texto1").value;

}

let boton2 = document.querySelector('#btn-desencriptar'); 

// FUNCION OCULTAR Y MOSTRAR INFO DERECHA
document.querySelector('#btn-encriptar').addEventListener('click', function(){
    document.querySelector('.formulario__derecha-img').style.display = 'none';
    document.querySelector('.formulario__info').style.display = 'none';
    document.querySelector('.formulario__lleno').style.display = 'block';
});

// VALIDADOR IZQUIERDA
document.querySelector('#btn-encriptar').addEventListener('click', function validadorIzquierda(){
    let validador1 = document.querySelector('#texto1');
    if(/^[a-z\s]+$/.test(validador1.value)){
        encriptar();
    }else{
        alert("Esta Ingresando Caracteres Invalidantes");      
    }
});

//VALIDADOR DERECHA
document.querySelector('#btn-encriptar').addEventListener('click', function validadorDerecha(){
    let validador2 = document.querySelector('#texto2');
    if(/^[a-z\s]+$/.test(validador2.value)){
        encriptar();
    }else{
        alert("Esta Ingresando Caracteres Invalidantes");          
    }
});



// CALLERS
boton1.onclick = encriptar;
boton2.onclick = desencriptar;