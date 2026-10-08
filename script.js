const body = document.body;


/* =========================
   ALTO CONTRASTE
========================= */

document
    .getElementById("contrastBtn")
    .addEventListener("click", () => {

        body.classList.toggle("high-contrast");

    });


/* =========================
   AUMENTAR FONTE
========================= */

document
    .getElementById("fontPlus")
    .addEventListener("click", () => {

        body.classList.remove("font-xlarge");

        body.classList.toggle("font-large");

    });


/* =========================
   DIMINUIR FONTE
========================= */

document
    .getElementById("fontMinus")
    .addEventListener("click", () => {

        body.classList.remove("font-large");

        body.classList.toggle("font-xlarge");

    });


/* =========================
   MODO CONFORTO
========================= */

document
    .getElementById("focusBtn")
    .addEventListener("click", () => {

        body.classList.toggle("comfort");

    });


/* =========================
   REDUZIR ANIMAÇÕES
========================= */

document
    .getElementById("animationBtn")
    .addEventListener("click", () => {

        body.classList.toggle("no-animation");

    });


/* =========================
   LEITURA DE TELA
========================= */

const readBtn = document.getElementById("readBtn");
const stopReadBtn = document.getElementById("stopReadBtn");


readBtn.addEventListener("click", () => {

    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não oferece suporte à leitura de texto."
        );

        return;
    }

    speechSynthesis.cancel();

    const text = document.body.innerText;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "pt-BR";
    speech.rate = 0.9;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

});


/* =========================
   PARAR LEITURA
========================= */

stopReadBtn.addEventListener("click", () => {

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

    }

});


/* =========================
   RESTAURAR
========================= */

document
    .getElementById("resetBtn")
    .addEventListener("click", () => {

        body.className = "";

        if ("speechSynthesis" in window) {

            speechSynthesis.cancel();

        }

    });

