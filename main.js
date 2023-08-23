// function tocaSomPom () {
//     document.querySelector('#som_tecla_pom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;


// function tocaSom (idElementoAudio) {

//     document.querySelector(idElementoAudio).play();

// }

function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    
    // if (elemento != null && elemento.localName === 'audio') {

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
        }
    else {
        console.log('Elemento não encontrado ou Seletor inválido')

    }    
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


//para

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento =  tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        // console.log(evento.code == 'Space')

        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}





    // contador = contador + 1;

    //console para checar no chrome
    // console.log(contador);

    //console para checar no chrome
    // console.log(instrumento);
