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
let dsec = document.querySelector("#bdes");
let textoplano;
let textoencriptado = [];
let encriptado;

function Funcionvalidar(){
    textoplano = areatexto.value;
    if(!/[^a-z\sñ]/.test(textoplano))
        encriptar();
    
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
}

function astring(textoencriptado){
    encriptado = textoencriptado.join("");
}

benc.onclick = Funcionvalidar;


