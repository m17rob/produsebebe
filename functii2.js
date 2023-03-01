const menuBtn = document.querySelector(".meniu");

menuBtn.addEventListener("click", function(){
    if(this.classList.contains("closed")){
        this.classList.remove("closed")
    } else {
        this.classList.add('closed');
    }
})
