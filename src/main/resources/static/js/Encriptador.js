/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

*/

let areatexto = document.querySelector("#inputarea");
areatexto.focus();
areatexto.select();
let benc = document.querySelector("#benc");
let bdesencriptar = document.querySelector("#bdes");
let textoplano;
let textoplanoencriptado; 
let textoencriptado = [];
let textodesencriptado = [];
let encriptado;

function FuncionvalidarEncriptado(){
    textoplano = areatexto.value;
    if(!/[^a-z\sñ]/.test(textoplano))
        encriptar();
}

function FuncionvalidardesEncriptado(){
    textoplano = areatexto.value;
    if(!/[^a-z\sñ]/.test(textoplano))
        desencriptar();
}

function encriptar(){
    textoplano = areatexto.value;
    for(let i = 0; i < textoplano.length; i++){

        textoencriptado.push(textoplano[i]);

        if(textoplano[i] == "a"){
            textoencriptado[i] = "ai";
        }
        else if(textoplano[i] == "e")
            textoencriptado[i] = "enter";
        else if(textoplano[i] == "i")
            textoencriptado[i] = "imes";
        else if(textoplano[i]=="o")
            textoencriptado[i] = "ober";
        else if(textoplano[i] == "u")
            textoencriptado[i] = "ufat";
        
    }

    astring(textoencriptado);
    textoencriptado = [];
    document.getElementById("inputarea").value = "";

}

function astring(textoencriptado){
    encriptado = textoencriptado.join("");
    document.getElementById("textoencriptado").innerHTML ="<textarea id ='textico' readonly='true'>"+encriptado+"</textarea>"+"<button id ='copiar'>copiar</button>";
    copiartexto();
}

function copiartexto(){
    let botonCopiar = document.querySelector("#copiar");
    let Texto = document.querySelector("#textico");
    botonCopiar.addEventListener("click", function(event) {   
        // el método select es utilizado para seleccionar el contenido del campo de texto
          Texto.select();
       try {
            // el método document.execCommand("copy") copia el texto seleccionado al portapapeles
            let exito = document.execCommand("copy");// devuelve true o false
            let msg = exito ? "\351xito" : "error";
            console.log(msg);
            areatexto.focus();
            areatexto.select();
      } catch (error) {
            let err = error;
            console.log("No fue posible copiar el texto seleccionado!");
          }
        }); 
}

function desencriptar(){
    textoplanoencriptado = areatexto.value;
    let textofinal = textoplanoencriptado.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById("textoencriptado").innerHTML ="<textarea id ='textico' readonly='true'>"+textofinal+"</textarea>"+"<button id ='copiar'>copiar</button>";
    copiartexto();
}

benc.onclick = FuncionvalidarEncriptado;
bdesencriptar.onclick = FuncionvalidardesEncriptado;


