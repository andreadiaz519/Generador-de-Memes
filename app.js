// Modo claro-oscuro

const darkMode = document.getElementById("dark-mode-button");
const lightMode = document.getElementById("light-mode-button");
const body = document.getElementById("body");

function darkMode () {
    body.classList.add("darkMode");
    body.classList.remove("ligthMode");
    darkMode.classList.add("hidden");
    lightMode.classList.remove("hidden");
}

darkMode.addEventListener("clik", darkMode);

function lightMode () {
    body.classList.add("lighMode");
    body.classList.remove("darkMode");
    lighMode.classList.remove("hidden");
    darkModeMode.classList.add("hidden");
}

lightMode.addEventListener("clik", lightMode);








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


// Aside de Imagen

const botonImg = document.getElementById("boton-imagen");
const botonTex = document.getElementById("boton-tex");
const seccionImg = document.getElementById("panel-img");
const seccionTex = document.getElementById("panel-texto");

botonImg.addEventListenner("click", function() {
    seccionImg.style.display = "block";
    seccionImg.style.display = "none";
})

// botonTex.addEventListenner("click", function() {
//     seccionImg.style.display = "block";
//     seccionTex.style.display = "none";
// })



// Color de fondo





// Fondo

// const titulo = document.getElementById(fondo-de-imagen);
// const button = document.getElementById(fondo-1);


// titulo.innerHTML = `Texto Default`;

// button.addEventListenner(`button`, (a) => {
// titulo.style.alignItems = a.target.value;
// })

// Url

const url = document.getElementById("panel-texto");
const urlImagen = document.getElementById(`url-imagen`);

urlImagen.addEventListener("input", () => {
    url.style.backgroundImage = `url("${url-imagen.value}")`;

})


// Aside de Texto



// Fuentes de texto
const titulo = document.getElementById(`fuente`);
const input = document.getElementById(`tipo-fuente`);
const select = document.getElementById(`font`);

// titulo.innerHTML = `Texto Default`;

input.addEventListenner(`input`, (e) => {
})

select.addEventListenner(`input`, (e) => {
    // console.log(e.target.value)
    titulo.style.fontFamily = e.target.value;

})


