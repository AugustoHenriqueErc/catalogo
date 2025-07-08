document.addEventListener('DOMContentLoaded', function () {
    const page = window.location.pathname.split("/").pop(); 
    const background = document.querySelector(".about_album");

    switch (page) {
        case "thats_the_spirit.html":
            background.style.backgroundImage = "url('img/bth_cover.jpg')";
            break;
        case "moral_panic.html":
            background.style.backgroundImage = "url('img/nbt.cover.jpg')";
            break;    
        default:
            background.style.backgroundImage = "url('img/bg_default.jpg')";
    }

    background.style.backgroundSize = "cover";
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundPosition = "center";
});