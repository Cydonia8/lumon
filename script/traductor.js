"use strict"

const API_KEY = "AIzaSyC1xUC0OBjy_POYp6zneqmXLDk2xmNNrP4";
const entrada = document.querySelector("#entrada")
const salida = document.querySelector("#salida")

entrada.addEventListener("keyup", ()=>{
    Traducir(entrada.value)
})
 
async function Traducir(entrada){
    salida.innerText="..."
    const respuesta_traduccion = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${entrada}&format=text&source=es&target=eo`);
    const datos_traduccion = await respuesta_traduccion.json();
    salida.innerText=datos_traduccion.data.translations[0].translatedText
}
