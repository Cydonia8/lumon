"use strict"

const abrir_menu = document.querySelector(".abrir-menu")
const menu = document.querySelector("header")

abrir_menu.addEventListener("click", ()=>{
    if(menu.classList.contains("mostrar-menu")){
        menu.classList.remove("mostrar-menu")
    }else{
        menu.classList.add("mostrar-menu")
    }
})