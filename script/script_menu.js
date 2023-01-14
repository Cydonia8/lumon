"use strict"

const abrir_menu = document.querySelector(".abrir-menu")
const menu = document.querySelector("header")

abrir_menu.addEventListener("click", ()=>{
    if(menu.classList.contains("mostrar-menu")){
        menu.classList.remove("mostrar-menu")
        abrir_menu.classList.remove("fijar-mostrar-menu")
    }else{
        menu.classList.add("mostrar-menu")
        abrir_menu.classList.add("fijar-mostrar-menu")
    }
})