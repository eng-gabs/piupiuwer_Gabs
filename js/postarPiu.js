var main =  document.querySelector("main");
var postBox = document.querySelector(".post-box");
var post = document.querySelector("#post-text-box");
var contadorVisual = document.querySelector("#conta-caracteres");
var botaoPiu = document.querySelector("#botao-piu")
var estourou = false;
var campoVazio = true;

post.addEventListener("focus", function(){
    contadorVisual.classList.add("focused");
    botaoPiu.classList.add("focused");
})

post.addEventListener("focusout", function(){
    contadorVisual.classList.remove("focused");
    botaoPiu.classList.remove("focused");
})

campoPiu = post.addEventListener("input", function(){
    var contador = this.value.length;
    contadorVisual.textContent = contador + "/140";
    if (contador > 140){
        estourou = true;
        campoVazio = false;
        contadorVisual.classList.add("estouraContadorVisual");
        post.classList.add("estouraPost");
    } else if (contador = 0 || this.value == " "){
        campoVazio = true;
    } else {
        estourou = false;
        campoVazio = false;
        contadorVisual.classList.remove("estouraContadorVisual");
        post.classList.remove("estouraPost");
    }
});

botaoPiu.addEventListener("click", function(){
    if (estourou){

        setTimeout(function(){
            var caixaEstouro = document.createElement("div");
            var botaoFechar = document.createElement("a");
            botaoFechar.classList.add("botaoOK");
            caixaEstouro.classList.add("mensagem");
            caixaEstouro.textContent = "Um Piu deve ter menos de 140 caracteres!";
            botaoFechar.textContent = "OK";
            main.insertBefore(caixaEstouro, main.childNodes[0]);
            caixaEstouro.appendChild(botaoFechar);

            botaoFechar.addEventListener("click", function(){
                caixaEstouro.remove();
            });
        },200);


    } else if (campoVazio){
        post.classList.add("digite-algo");
        setTimeout(function(){
            post.classList.remove("digite-algo");
        },500);
    } else {
        adicionaPost("file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/Perfil.jpg",post.value,"gabs");
    }

});

