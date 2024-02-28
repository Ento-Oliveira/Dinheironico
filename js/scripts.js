document.querySelector(".btn").addEventListener("click", function() {
    var texto = document.getElementById("textoCompleto");
    var botao = document.querySelector(".btn");
    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.innerText = "Mostrar Menos";
        texto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        texto.style.display = "none";
        botao.innerText = "Mostrar Mais";
    }
});



const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
  
  