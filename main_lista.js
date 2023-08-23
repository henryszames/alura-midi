// function tocaSomPom () {
//     document.querySelector('#som_tecla_pom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


//enquanto

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento =  tecla.classList[1];

    //console para checar no chrome
    console.log(instrumento);


    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console para checar no chrome
    console.log(contador);
}