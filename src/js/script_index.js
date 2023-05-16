//Botão Portfolio
let irAoPortfolio = document.getElementById("click")
let botao = document.getElementById("portfolio")
let soma = 0
botao.addEventListener('click', () => {
    console.log("Iniciando Teste");
    for (i = 0; i < 101; i++) {
        (function (i) {
            setTimeout(function () {
                console.log("Teste" + i);
                irAoPortfolio.style.translate = `0px 0px ${i}px`
                if (i == 100) {
                  window.location.href = "https://sdnjsouza.github.io/portflolio/portfolio.html"
                }
            }, 8 * i);
        })(i);

    };


})

