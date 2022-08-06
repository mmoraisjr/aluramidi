function tocaSom(idElementoAudio) {
  elemento = document.querySelector(idElementoAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log("Elemento nao encontrado");
  }
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

  tecla.onkeydown = function (e) {
    if (e.code === 'Space' || e.code === 'Enter') {
      tecla.classList.add("ativa");
    }
  }
  
  tecla.onkeyup = function (e) {
      tecla.classList.remove("ativa");
  }
}
