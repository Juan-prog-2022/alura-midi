
function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//Obtener los elementos que tengan la clase tecla del documento y guardarlos en un array
const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`; 
    console.log(idAudio);

    tecla.onclick = function () {
        playSonido(idAudio);
    };
 
    
    // Eventos del teclado
    tecla.onkeydown = function(evento) {

        // Agregar la clase 'activa' a la tecla espacio o enter
        if(evento.code === 'Space' ||  evento.code === 'Enter'){
            
            tecla.classList.add('activa');
        }

    }

    tecla.onkeyup = function() {
        // Remover la clase 'activa'
        tecla.classList.remove('activa');     
    }

 }
