const form = document.getElementById("form");
const input = document.getElementById("input");
const opravilaUL = document.getElementById("opravila");
var audio = new Audio('complete_sound.wav');

const opravila = JSON.parse(localStorage.getItem("opravila"));

if (opravila) {
    opravila.forEach((opravilo) => {
        addOpravilo(opravilo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addOpravilo();
});

function addOpravilo(opravilo) {
    let opraviloTekst = input.value;

    if (opravilo) {
        opraviloTekst = opravilo.text;
    }

    if (opraviloTekst) {
        const opraviloEl = document.createElement("li");
        if (opravilo && opravilo.opravljeno) {
            opraviloEl.classList.add("opravljeno");
            
        }

        opraviloEl.innerText = opraviloTekst;

        opraviloEl.addEventListener("click", () => {
            opraviloEl.classList.toggle("opravljeno");
            a
            updateLS();
        });

    
        opraviloEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            opraviloEl.remove();

            updateLS();
        });

        opravilaUL.appendChild(opraviloEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const opravilaEl = document.querySelectorAll("li");

    const opravila = [];

    opravilaEl.forEach((opraviloEl) => {
        opravila.push({
            text: opraviloEl.innerText,
            opravljeno: opraviloEl.classList.contains("opravljeno"),
        });
    });

    localStorage.setItem("opravila", JSON.stringify(opravila));
}