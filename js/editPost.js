
function adicionaPost(imgUrl, mensagem, user){
        //deve haver a propriedade "data" futuramente no adicona post e no JSON
        // por padrão essa função adiciona a data de hoje

    var feed = document.querySelector("#feed");
    var novoPost = document.createElement("div");
    var ul = document.createElement("ul");
    var fotoDePerfil = document.createElement("li");
    var aFoto = document.createElement("a");
    var imgFoto = document.createElement("img");
    var pFoto = document.createElement("p");
    var caixa = document.createElement("li");
    var p = document.createElement("p");
    var postOptionsLI = document.createElement("li");
    var replyLink = document.createElement("a");
    var starLink = document.createElement("a");
    var likeLink = document.createElement("a");
    var replyImg = document.createElement("img");
    var starImg = document.createElement("img");
    var likeImg = document.createElement("img");
    var postData = document.createElement("time");
    var info = document.createElement("div");

    p.textContent = mensagem;
    pFoto.textContent = "@" + user; // Modificar para nome de usuário

    feed.insertBefore(novoPost, feed.childNodes[0]);
    novoPost.appendChild(ul);
    ul.appendChild(fotoDePerfil);
    fotoDePerfil.appendChild(aFoto);
    fotoDePerfil.appendChild(imgFoto);
    ul.appendChild(caixa);
    caixa.appendChild(p);
    ul.appendChild(postOptionsLI);
    postOptionsLI.appendChild(replyLink);
    postOptionsLI.appendChild(starLink);
    postOptionsLI.appendChild(likeLink);
    replyLink.appendChild(replyImg);
    starLink.appendChild(starImg);
    likeLink.appendChild(likeImg);
    novoPost.appendChild(info);
    info.appendChild(pFoto);
    info.appendChild(postData);


    feed.classList.add("feed");
    novoPost.classList.add("post");
    fotoDePerfil.classList.add("user-id");
    caixa.classList.add("caixa");
    aFoto.href = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/perfil.html";
    imgFoto.src = imgUrl;
    imgFoto.classList.add("foto-perfil");
    postOptionsLI.classList.add("post-options");
    replyImg.classList.add("reply");
    starImg.classList.add("star");
    likeImg.classList.add("like");
    replyImg.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/reply.png";
    starImg.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/star.png";
    likeImg.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/like.png";
    info.classList.add("info");

    // cria data
    postData.dateTime = new Date();
    postData.classList.add("post-data");
    postData.innerHTML = hoje();

} 


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