var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src="/grossmont/computer-science-and-cybersecurity-organization/media/sun.png";
    }
    else{
        icon.src="/grossmont/computer-science-and-cybersecurity-organization/media/moon.png";
    }
}