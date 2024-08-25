const d = document; 
const textArea = d.querySelector (".form_input");
const imagenMuneco = d.querySelector (".result_img");
const LoaderPoints = d.querySelector (".loader");
const resultTitle = d.querySelector (".result_title");
const resultText = d.querySelector (".result_text");
const buttonEncrypt = d.querySelector (".form_btn");
const buttonDesencrypt = d.querySelectorAll (".form_btn");
const buttonCopy = d.querySelector (".result_btn");

const llaves =[
["e","enter"],
["i","imes"],
["a","ai"],
["o","ober"],
["u","ufat"]
];

//Encriptar

function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0 ; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves [j][1]; //reemplaza la letra por su equivalente encriptado
                break; // Termina el bucle cuando se encuentra  la correpondencia
            }

        }

        mensajeEncriptado += encriptada;
    }
  
    return mensajeEncriptado;
}

// Desencriptar

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//Ocultar elementos
textArea.addEventListener("input",(e) =>{
    imagenMuneco.style.display = "none" ; 
    LoaderPoints.classList.remove("hidden");
    resultTitle.textContent = "Capturando Mensaje.";
    resultText.textContent = "";
});

//Encriptar
buttonEncrypt.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultText.textContent = mensajeEncriptado;
    buttonCopy.classList.remove("hidden");
    resultTitle.textContent = "El resultado es:";
});
//Desencriptar
buttonDesencrypt[1].addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    buttonCopy.classList.remove("hidden");
    resultTitle.textContent = "El resultado es:";
   
});


buttonCopy.addEventListener("click", () =>{
    let copyText = resultText.textContent;
    navigator.clipboard.writeText(copyText).then(()=>{
        imagenMuneco.style.display = "block"; 
        LoaderPoints.classList.add("hidden");
        resultTitle.textContent = "El texto se copió";
        buttonCopy.classList.add("hidden");
    })

});
