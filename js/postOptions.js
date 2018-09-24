var feed = document.querySelector("#feed");
feed.addEventListener("click", function(event){

    if(event.target.src == "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/star.png"){
        event.target.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/stared.png";
    } else if (event.target.src == "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/stared.png") {
        event.target.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/star.png";
    } else if (event.target.src == "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/like.png"){
        event.target.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/liked.png";
    } else if (event.target.src == "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/liked.png"){
        event.target.src = "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/like.png";
    } else if (event.target.src == "file:///Users/gabrielduarte/Drive%20Pessoal/dev/piupiuwer_Gabs/img/reply.png"){
        // compatilha o piu.
    }
});