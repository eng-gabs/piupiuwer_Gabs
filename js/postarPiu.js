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
    } else{
        // Adiciona o post
        var feed = document.querySelector(".feed");
        var novoPost = document.createElement("div");
        var ul = document.createElement("ul");
        var fotoDePerfil = document.createElement("li");
        var aFoto = document.createElement("a");
        var imgFoto = document.createElement("img");
        var pFoto = document.createElement("p");
        var caixa = document.createElement("li");
        var p = document.createElement("p");
        var postOptions = document.createElement("li");
        var postData = document.createElement("time");

        p.textContent = post.value;
        pFoto.textContent = "@gabs"; // Modificar para nome de usuário

        feed.insertBefore(novoPost, feed.childNodes[0]);
        novoPost.appendChild(ul);
        ul.appendChild(fotoDePerfil);
        fotoDePerfil.appendChild(aFoto);
        fotoDePerfil.appendChild(imgFoto);
        fotoDePerfil.appendChild(pFoto);
        ul.appendChild(caixa);
        caixa.appendChild(p);
        ul.appendChild(postOptions);
        novoPost.appendChild(postData);

        feed.classList.add("feed");
        novoPost.classList.add("post");
        fotoDePerfil.classList.add("user-id");
        caixa.classList.add("caixa");
        aFoto.href = "../html/perfil.html";
        imgFoto.src = "../img/Perfil.jpg";
        imgFoto.classList.add("foto-perfil");

        // cria data
        postData.dateTime = new Date();
        postData.classList.add("post-data");
        postData.innerHTML = hoje();

    } 

    
});

function hoje(){
    var today = new Date();
    var dia = today.getDate();
    var mes;
    var ano = today.getFullYear();

    switch(today.getMonth()){
        case 0:
            mes = "Janeiro";
            break;
        case 1:
            mes = "Fevereiro";
            break;
        case 2:
            mes = "Março";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Maio";
            break;
        case 5:
            mes = "Junho";
            break;
        case 6:
            mes = "Julho";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Setembro";
            break;
        case 9:
            mes = "Outubro";
            break;
        case 10:
            mes = "Novembro";
            break;
        case 11:
            mes = "Dezembro";
            break;
    }
    
    return dia + " de " + mes + " de " + ano;
    
}