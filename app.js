
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

// URL

document.addEventListener('DOMContentLoaded', function() {
    const imagenMeme = document.querySelector('.imagen-meme');  
    const img = imagenMeme.querySelector('img');
    
    function actualizarImagen() {
        const url = urlInput.value.trim();
        if (url !== '') {
            img.src = url;  
        }
    }

    // Color Fondo
    const fondoColorInput = document.getElementById('opcion-fondo-color');

    function actualizarFondoColor() {
        imagenMeme.style.backgroundColor = fondoColorInput.value;
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
    const resetFiltrosButton = document.getElementById('reset-filtros');

    function restablecerFiltros() {
        brillo.value = 1;
        opacidad.value = 1;
        contraste.value = 100;
        desenfoque.value = 0;
        escalaGrises.value = 0;
        sepia.value = 0;
        hue.value = 0;
        saturado.value = 100;
        negativo.value = 0;
        
        img.style.filter = 'none';
    }

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
    fondoColorInput.addEventListener('input', actualizarFondoColor);
    resetFiltrosButton.addEventListener('click', restablecerFiltros);
    urlInput.addEventListener('input', actualizarImagen);

    actualizarImagen();
});


//Aside de texto 

// Texto Superior y Texto Inferior

document.addEventListener('DOMContentLoaded', function() {

    const superiorTexto = document.getElementById('superior-texto');
    const inferiorTexto = document.getElementById('inferior-texto');
    const sinTextoSuperiorCheckbox = document.getElementById('sin-texto-superior');
    const sinTextoInferiorCheckbox = document.getElementById('sin-texto-inferior');
    const textoMemeSuperior = document.getElementById('texto-meme-superior');
    const textoMemeInferior = document.getElementById('texto-meme-inferior');
    
    superiorTexto.addEventListener('input', function() {
        textoMemeSuperior.textContent = superiorTexto.value;
    });

    inferiorTexto.addEventListener('input', function() {
        textoMemeInferior.textContent = inferiorTexto.value;
    });

    // Alinear Texto

    const alinearIzquierda = document.getElementById('alinear-izquierda');
    const alinearCentro = document.getElementById('alinear-centro');
    const alinearDerecha = document.getElementById('alinear-derecha');

    alinearIzquierda.addEventListener('click', function() {
        textoMemeSuperior.style.textAlign = 'left';
        textoMemeInferior.style.textAlign = 'left';
    });

    alinearCentro.addEventListener('click', function() {
        textoMemeSuperior.style.textAlign = 'center';
        textoMemeInferior.style.textAlign = 'center';
    });

    alinearDerecha.addEventListener('click', function() {
        textoMemeSuperior.style.textAlign = 'right';
        textoMemeInferior.style.textAlign = 'right';
    });

    // Tipo de fuente

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

    // Color Fondo Texto 

    const fondoTextoInput = document.getElementById('fondo-texto');

    fondoTextoInput.addEventListener('input', function() {
        textoMemeSuperior.style.backgroundColor = fondoTextoInput.value;
        textoMemeInferior.style.backgroundColor = fondoTextoInput.value;
    });

    // Checkbox Transparante

    const checkboxTransparente = document.getElementById('checkbox-transparente');

    checkboxTransparente.addEventListener('change', function() {
        const backgroundColor = checkboxTransparente.checked ? 'transparent' : fondoTextoInput.value;
        textoMemeSuperior.style.backgroundColor = backgroundColor;
        textoMemeInferior.style.backgroundColor = backgroundColor;
    });

    // Contorno de Texto 

    const contornoNinguno = document.getElementById('contorno-ninguno');
    const contornoClaro = document.getElementById('contorno-claro');
    const contornoOscuro = document.getElementById('contorno-oscuro');

    

    contornoNinguno.addEventListener('click', function() {
        textoMemeSuperior.style.textShadow = 'none';
        textoMemeInferior.style.textShadow = 'none';
    });

    contornoClaro.addEventListener('click', function() {
        textoMemeSuperior.style.textShadow = '2px 2px 4px #ffffff';
        textoMemeInferior.style.textShadow = '2px 2px 4px #ffffff';
    });

    contornoOscuro.addEventListener('click', function() {
        textoMemeSuperior.style.textShadow = '2px 2px 4px #000000';
        textoMemeInferior.style.textShadow = '2px 2px 4px #000000';
    });

    // Interlineado

    const interlineadoInput = document.getElementById('interlineado');

    interlineadoInput.addEventListener('input', function() {
        textoMemeSuperior.style.lineHeight = `${interlineadoInput.value}`;
        textoMemeInferior.style.lineHeight = `${interlineadoInput.value}`;
    });

    // Espaciado

    const espaciadoInput = document.getElementById('espaciado');

    espaciadoInput.addEventListener('input', function() {
        textoMemeSuperior.style.letterSpacing = `${espaciadoInput.value}px`;
        textoMemeInferior.style.letterSpacing = `${espaciadoInput.value}px`;
    });
    
    // Justificacion de Texto 

    function actualizarAlineacion() {
        if (alinearIzquierda.checked) {
            textoMemeSuperior.style.textAlign = 'left';
            textoMemeInferior.style.textAlign = 'left';
        } else if (alinearCentro.checked) {
            textoMemeSuperior.style.textAlign = 'center';
            textoMemeInferior.style.textAlign = 'center';
        } else if (alinearDerecha.checked) {
            textoMemeSuperior.style.textAlign = 'right';
            textoMemeInferior.style.textAlign = 'right';
        }
    }
    // Event listeners para los botones de alineación
    alinearIzquierda.addEventListener('click', actualizarAlineacion);
    alinearCentro.addEventListener('click', actualizarAlineacion);
    alinearDerecha.addEventListener('click', actualizarAlineacion);

    // Llamar a la función inicialmente para establecer la alineación inicial
    actualizarAlineacion();
     // Lógica para manejar los checkboxes de texto superior e inferior
    sinTextoSuperiorCheckbox.addEventListener('change', function() {
        textoMemeSuperior.style.display = sinTextoSuperiorCheckbox.checked ? 'none' : 'block';
    });

    sinTextoInferiorCheckbox.addEventListener('change', function() {
        textoMemeInferior.style.display = sinTextoInferiorCheckbox.checked ? 'none' : 'block';
    });
});


// Modo claro y oscuro

document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('dark-mode-button');

    darkModeButton.addEventListener('click', function() {
        const body = document.body;

        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            darkModeButton.textContent = "Modo Oscuro";
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            darkModeButton.textContent = "Modo Claro";
        }
    });
});




// Botones de Imagen y Texto 

document.addEventListener('DOMContentLoaded', () => {
    const botonImagen = document.getElementById('boton-imagen');
    const botonTexto = document.getElementById('boton-texto');
    const panelImagen = document.getElementById('panel-img');
    const panelTexto = document.getElementById('panel-texto');

    botonImagen.addEventListener('click', () => {
        panelImagen.style.display = panelImagen.style.display === 'block' ? 'none' : 'block';
        panelTexto.style.display = 'none';
    });

    botonTexto.addEventListener('click', () => {
        panelTexto.style.display = panelTexto.style.display === 'block' ? 'none' : 'block';
        panelImagen.style.display = 'none';
    });
});





