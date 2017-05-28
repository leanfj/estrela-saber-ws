// ELEMENTO MODAL
var modal = document.getElementById('meuModal');

// BOTÃO DE ENVIO QUE VAI CHAMAR O MODAL
var btn = document.getElementById("btn_envia");

// BOTAO PARA FECHAR O MODAL
var span = document.getElementsByClassName("fecha")[0];

// FUNCTION PARA VERIFICAR O EVENTO DE CLICK NO BOTAO
btn.onclick = function() {
    modal.style.display = "block";
}

// FUNCTION PARA VERIFICAR O CLICKE NO BOTAO X PARA FECHAR O MODAL
span.onclick = function() {
    modal.style.display = "none";
}

// FUNCTION PARA VERIFICA SE FOI CLICADO FORA DO MODAL PARA FECHALO
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
