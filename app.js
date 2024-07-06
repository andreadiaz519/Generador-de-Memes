// Modo claro-oscuro

const darkMode = document.getElementById(`dark-mode`);
const lightMode = document.getElementById(`light-mode`);
const body = document.getElementById(`body`);

function darkModeOn () {
    body.classList.add(`dark-mode`);
    body.classList.remove(`light-mode`);
    darkMode.classList.add(`hidden`);
    lightMode.classList.remove(`hidden`);
}

darkMode.addEventListener(`clik`, darkModeOn);

function lightModeOn () {
    body.classList.add(`dark-mode`);
    body.classList.remove(`light-mode`);
    darkMode.classList.add(`hidden`);
    lightMode.classList.remove(`hidden`);
}

lightModeMode.addEventListener(`clik`, lightModeOn);







// // // boton checkbox
// const checkbox = document.getElementById("checkbox");
// checkbox.addEventListener("chage", function() {
// console.log("Cambio el estado del checkbox");
// }
// )

// // function mostrar() {
// //     document.getElementById(`texto-meme`).style.display = `block`;
// // }


// Boton Descarga
const botonDescarga = document.getElementById(`button-descarga`);
const contenedorMeme = document.getElementById(`contenedor-principal`);

function decargarMeme () {
domtoimage.toBlob(contenedorMeme).then(function (blob) {
    console.log(blob);
    saveAs(blob, `mi-meme.png`)
}
)}

botonDescarga.addEventListener(`click`, decargarMeme);


// Aside de Texto

// Fuentes de texto
// const titulo = document.getElementById(`fuente`);
// const input = document.getElementById(`tipo-fuente`);
// const select = document.getElementById(`font`);

// // titulo.innerHTML = `Texto Default`;

// input.addEventListenner(`input`, (e) => {
// })

// select.addEventListenner(`input`, (e) => {
//     // console.log(e.target.value)
//     titulo.style.fontFamily = e.target.value;

// })


// Aside de Imagen

// Color de fondo





// Fondo

// const titulo = document.getElementById(fondo-de-imagen);
// const button = document.getElementById(fondo-1);


// titulo.innerHTML = `Texto Default`;

// button.addEventListenner(`button`, (a) => {
// titulo.style.alignItems = a.target.value;
// })

