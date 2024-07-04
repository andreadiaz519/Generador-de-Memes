
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
const botonDescarga = document.getElementById("button-descarga");
const contenedorMeme = document.getElementById("contenedor-principal");

function decargarMeme () {
console.log(domtoimage);
domtoimage.toBlob(contenedorMeme).then(function (blob) {

saveAs(blob, `mi-meme.png`);
})}

botonDescarga.addEventListener(`click`, decargarMeme);
