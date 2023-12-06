function menuOpen(){
    document.getElementById("menu").style.display="block";
    document.getElementById("humb-close").style.display = "block";
};

document.getElementById("humb-open").onclick= menuOpen;

function menuClose(){
    document.getElementById("menu").style.display = "none";
}

document.getElementById("humb-close").onclick = menuClose;