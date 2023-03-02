const menuBtn = document.querySelector(".meniu__btn");
const menu = document.querySelector(".meniu");

if(window.innerWidth < 910){
    menu.classList.add("closed");
    menuBtn.setAttribute('src', '/img/meniu-close.png')
}

menuBtn.addEventListener("click", function(){
    if(menu.classList.contains("closed")){
        menu.classList.remove("closed")
    } else {
        menu.classList.add('closed');
    }

    if(menu.classList.contains('closed')){
        menuBtn.setAttribute('src', '/img/meniu-close.png')
    } else {
        menuBtn.setAttribute('src', '/img/meniu-open.png')
    }
})
/////////////////////////////////////////////////////////
const menuCategorii = document.querySelectorAll(".meniu__categorie");

menuCategorii.forEach(function(btn){
    btn.addEventListener("click", function(){
        menuCategorii.forEach(function(link){
            link.classList.remove("active")
        });
        this.classList.add('active');
    })
})
