// Modo claro-oscuro

document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('dark-mode-button');
    const lightModeButton = document.getElementById('light-mode-button');

    darkModeButton.addEventListener('click', function() {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    });

    lightModeButton.addEventListener('click', function() {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    });
});


// Boton Descarga
const botonDescarga = document.getElementById("button-descarga");
const contenedorMeme = document.getElementById("contenedor-principal");

function decargarMeme () {
domtoimage.toBlob(contenedorMeme).then(function (blob) {
    console.log(blob);
    saveAs(blob, `mi-meme.png`)
}
)}
botonDescarga.addEventListener("click", decargarMeme);


// Aside de Imagen

    


document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.imagen-meme img');

    function actualizarImagen() {
        const url = urlInput.value.trim();
        if (url !== '') {
            imagenMeme.style.backgroundImage = `url(${url})`;
        }
    }

    // Filtros

    const brillo = document.getElementById('brillo');
    const opacidad = document.getElementById('opacidad');
    const contraste = document.getElementById('contraste');
    const desenfoque = document.getElementById('desenfoque');
    const escalaGrises = document.getElementById('escala-grises');
    const sepia = document.getElementById('sepia');
    const hue = document.getElementById('hue');
    const saturado = document.getElementById('saturado');
    const negativo = document.getElementById('negativo');
    const urlInput = document.getElementById('url-imagen');


    // Restablecer Filtros
    const resetFiltrosButton = document.getElementById('reset-filtros');

    function restablecerFiltros() {
        brilloInput.value = 1;
        opacidadInput.value = 1;
        contrasteInput.value = 100;
        desenfoqueInput.value = 0;
        escalaGrisesInput.value = 0;
        sepiaInput.value = 0;
        hueInput.value = 0;
        saturadoInput.value = 100;
        negativoInput.value = 0;
        
        imagenMeme.style.filter = 'none';
    }

    actualizarImagen();
    function updateFilters() {
        const filters = `
            brightness(${brillo.value})
            opacity(${opacidad.value})
            contrast(${contraste.value}%)
            blur(${desenfoque.value}px)
            grayscale(${escalaGrises.value}%)
            sepia(${sepia.value}%)
            hue-rotate(${hue.value}deg)
            saturate(${saturado.value}%)
            invert(${negativo.value})
        `;
        img.style.filter = filters;
    }

    brillo.addEventListener('input', updateFilters);
    opacidad.addEventListener('input', updateFilters);
    contraste.addEventListener('input', updateFilters);
    desenfoque.addEventListener('input', updateFilters);
    escalaGrises.addEventListener('input', updateFilters);
    sepia.addEventListener('input', updateFilters);
    hue.addEventListener('input', updateFilters);
    saturado.addEventListener('input', updateFilters);
    negativo.addEventListener('input', updateFilters);
    resetFiltrosButton.addEventListener('click', restablecerFiltros);

    urlInput.addEventListener('input', function() {
        const url = urlInput.value;
        img.src = url;
    });   
});

    



// Aside de Texto

// Texto superior e inferior

document.addEventListener('DOMContentLoaded', function() {
    const superiorTexto = document.getElementById('superior-texto');
    const textoMemeSuperior = document.getElementById('texto-meme-superior');

    superiorTexto.addEventListener('input', function() {
        textoMemeSuperior.textContent = superiorTexto.value;
    });

    const inferiorTexto = document.getElementById('inferior-texto');
    const textoMemeInferior = document.getElementById('texto-meme-inferior');

    inferiorTexto.addEventListener('input', function() {
        textoMemeInferior.textContent = inferiorTexto.value;
    });


    // Estilo fuente
    
    const fontSelect = document.getElementById('font');

    fontSelect.addEventListener('change', function() {
        textoMemeSuperior.style.fontFamily = fontSelect.value;
        textoMemeInferior.style.fontFamily = fontSelect.value;
    });

    // Tamaño de fuente

    const tamañoFuenteInput = document.getElementById('tamaño-fuente');

    tamañoFuenteInput.addEventListener('input', function() {
        textoMemeSuperior.style.fontSize = `${tamañoFuenteInput.value}px`;
        textoMemeInferior.style.fontSize = `${tamañoFuenteInput.value}px`;
    });

    // Color de Texto
    const colorTextoInput = document.getElementById('color-texto');

    colorTextoInput.addEventListener('input', function() {
        textoMemeSuperior.style.color = colorTextoInput.value;
        textoMemeInferior.style.color = colorTextoInput.value;
    });

    // fondo de Texto

    const fondoTextoInput = document.getElementById('fondo-texto');

    fondoTextoInput.addEventListener('input', function() {
        textoMemeSuperior.style.backgroundColor = fondoTextoInput.value;
        textoMemeInferior.style.backgroundColor = fondoTextoInput.value;
    });


    // Fondo Transparente 

    const checkboxTransparente = document.getElementById('checkbox-transparente');
    checkboxTransparente.addEventListener('change', function() {
        const backgroundColor = checkboxTransparente.checked ? 'transparent' : fondoTextoInput.value;
        textoMemeSuperior.style.backgroundColor = backgroundColor;
        textoMemeInferior.style.backgroundColor = backgroundColor;
    });


    // Contornos

    const contornoNinguno = document.getElementById('contorno-ninguno');

    contornoNinguno.addEventListener('click', function() {
        textoMemeSuperior.style.textShadow = 'none';
        textoMemeInferior.style.textShadow = 'none';
    });


    const contornoClaro = document.getElementById('contorno-claro');

    contornoClaro.addEventListener('click', function() {
        textoMemeSuperior.style.textShadow = '2px 2px 4px #ffffff';
        textoMemeInferior.style.textShadow = '2px 2px 4px #ffffff';
    });

    const contornoOscuro = document.getElementById('contorno-oscuro');

    contornoOscuro.addEventListener('click', function() {
        textoMemeSuperior.style.textShadow = '2px 2px 4px #000000';
        textoMemeInferior.style.textShadow = '2px 2px 4px #000000';
    });

    // Espaciado

    const espaciadoInput = document.getElementById('espaciado');

    espaciadoInput.addEventListener('input', function() {
            textoMemeSuperior.style.letterSpacing = `${espaciadoInput.value}px`;
            textoMemeInferior.style.letterSpacing = `${espaciadoInput.value}px`;
        });

    // Interlineado
    
    const interlineadoInput = document.getElementById('interlineado');

    interlineadoInput.addEventListener('input', function() {
        textoMemeSuperior.style.lineHeight = `${interlineadoInput.value}`;
        textoMemeInferior.style.lineHeight = `${interlineadoInput.value}`;
    });
});

    

    

    

    

    

    

    

    

    

    
    

    



// document.getElementById("boton-imagen").addEventListener("click", function(){
//     const asideImg = document.getElementById("panel-img");
//     if (asideImg.style.display === "none") {
//         asideImg.style.display = "block";
//     } else {
//         asideImg.style.display = "none";
//     }
// })
    
    
    



// Fuentes de texto
// const titulo = document.getElementById("fuente");
// const input = document.getElementById("tipo-fuente");
// const select = document.getElementById("font");

// // titulo.innerHTML = `Texto Default`;

// input.addEventListener("input", (e) => {
// })

// select.addEventListener("input", (e) => {
//     // console.log(e.target.value)
//     titulo.style.fontFamily = e.target.value;

// })

