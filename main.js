// DECLARACION DE VARIABLES DE LA PARTE 1 DEL DESAFIO
const logoImg = document.querySelector(".logo-img");
// DECLARACIÓN DE VARIABLES DE LA PARTE 2 DEL DESAFÍO
const cantidadSticker1 = document.querySelector(".input-sticker1");
const cantidadSticker2 = document.querySelector(".input-sticker2");
const cantidadSticker3 = document.querySelector(".input-sticker3");
const resultado = document.querySelector("#resultado");
const comprobarCantidad = document.querySelector("#comprobar-cantidad");
// DECLARACIÓN DE VARIABLES DE LA PARTE 3 DEL DESAFÍO
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const password3 = document.querySelector("#password3");
const btnPassword = document.querySelector("#btn-ingresar-password");
const resultadoPassword = document.querySelector("#resultado-password");


//EVENTO DE LA PARTE 1 DEL DESAFÍO
logoImg.addEventListener("click", ()=>{
    console.log("me diste click");
    logoImg.classList.toggle("border-logo");
})

// EVENTO DE LA PARTE 2 DEL DESAFÍO
comprobarCantidad.addEventListener("click", () => {

    let cantidadTotal =
        parseInt(cantidadSticker1.value) +
        parseInt(cantidadSticker2.value) +
        parseInt(cantidadSticker3.value);

    console.log(cantidadTotal);

    if(cantidadTotal <= 10){
        resultado.textContent = `Llevas ${cantidadTotal} stickers`;
        resultado.style.fontSize = "2rem";
        resultado.style.color = "black";
    } else if(cantidadTotal > 10) {
        resultado.textContent = `Llevas demasiados stickers`;
        resultado.style.fontSize = "2rem";
    } else {
        resultado.textContent = `Cantidad no valida, ingresar sólo números y no dejar campos vacíos`;
        resultado.style.fontSize = "2rem";
    }
});

//EVENTO DE LA PARTE 3 DEL DESAFÍO
btnPassword.addEventListener('click', () =>{
    console.log(password1.value);
    console.log(password2.value);
    console.log(password3.value);
    if(parseInt(password1.value) === 9 && parseInt(password2.value) === 1 && parseInt(password3.value) === 1){
        resultadoPassword.style.display = "flex";
        resultadoPassword.textContent = `Password 1 correcta`;
    } else if(parseInt(password1.value) === 7 && parseInt(password2.value) === 1 && parseInt(password3.value) === 4){
        resultadoPassword.style.display = "flex";
        resultadoPassword.textContent = `Password 2 correcta`;
    } else{
        resultadoPassword.style.display = "flex";
        resultadoPassword.textContent = `Password incorrecta`;
    }
});

