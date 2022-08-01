function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont];
  const obtemClass = tecla.classList[1];
//   const idAudio = "#som_" + obtemClass;
  const idAudio = `#som_${obtemClass}`; 

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}
