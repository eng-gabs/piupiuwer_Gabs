function carrega(){
    var main = document.querySelector("main");
    var feed = document.getElementById("feed");
    feed.remove();
    feed = document.createElement("div");
    feed.id = "feed";
    main.appendChild(feed);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7");
    xhr.addEventListener("load", function(){
        var posts = JSON.parse(xhr.responseText);
        for (i = 0; i < posts.length; i++){
            adicionaPost(posts[i].imgUrl, posts[i].message, posts[i].user);
        }
    });
    xhr.send();
}
carrega();
var refresh = document.getElementById("refresh");
refresh.addEventListener("click", carrega);