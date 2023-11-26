const BtnOpenHeader = document.querySelector("#Btn-Open-Header");
const BtnCloseHeader = document.querySelector("#Btn-Close-Header");


const Header = document.querySelector(".Header");

BtnOpenHeader.addEventListener("click", () => {
  Header.style.left = '0';
});

BtnCloseHeader.addEventListener("click", () => {
  Header.style.left = '-600px';
});

window.addEventListener("scroll", (e) => {
  Header.style.left = '-600px';
})


new TypeIt("#Titulo", {
    strings: "",
    speed: 400,
    loop: false,
  }).go();

  const ScrollDownDiv = document.querySelector("#Scroll-down");
  const ScrollElement = document.querySelector("#Remove");
  
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 5 && ScrollDownDiv.contains(ScrollElement)) {
        ScrollDownDiv.removeChild(ScrollElement);
    }

    if (window.scrollY < 5 && !ScrollDownDiv.contains(ScrollElement)) {
        ScrollDownDiv.appendChild(ScrollElement);
    }
});


const BtnUp = document.querySelector(".Btn-Up-none")

window.addEventListener("scroll", (e) => {
  if(window.scrollY > 5) {
    BtnUp.classList.remove("Btn-Up-none");
    BtnUp.classList.add("Btn-Up");
  }

  if(window.scrollY < 5) {
    BtnUp.classList.add("Btn-Up-none");
    BtnUp.classList.remove("Btn-Up-alternative");
  }
})

ScrollReveal().reveal('.row-1');

ScrollReveal().reveal('.row-2');

ScrollReveal().reveal('.row-3');

ScrollReveal().reveal('.row-4');

const ImagemPedro = document.querySelector("#IMG01");

function FecharOlhos() {
  ImagemPedro.style.content = 'url("img/img06.png")';

}

function PararFecharOlhos() {
  ImagemPedro.style.content = 'url("img/img01.png")';
}

function executaAcao() {
  FecharOlhos();

  setTimeout(function() {
    PararFecharOlhos();
  }, 1000);
}

setInterval(executaAcao, 4000);

