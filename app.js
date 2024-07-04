const botonDescarga = document.getElementById(`button-descarga`);
const contenedorMeme = document.getElementById(`contenedor-principal`);

function decargarMeme () {
    console.log(domtoimage);
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        console.log(blob);
    }
    )

}
botonDescarga.addEventListener(`click`, decargarMeme);
