const menuBars = document.getElementById("menu-bars");
menuBars.addEventListener("click", () => {
    const ulHeader = document.getElementById("menu");
    if(ulHeader.style.display == "none"){
        ulHeader.style.display = "block";
        ulHeader.style.opacity = 1;
        ulHeader.style.animation = "enter-menu 1s";
        menuBars.className = "fa-solid fa-x";
        console.log("open menu");
    }
    else{
        ulHeader.style.display = "none";
        ulHeader.style.opacity = 0;
        ulHeader.style.animation = "";
        menuBars.className = "fa-solid fa-bars";
        console.log("close menu");
    }
});

//observador das capas
const myObserverCapa = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        (entry.isIntersecting) ? entry.target.classList.add("capa-show") : entry.target.classList.remove("capa-show");
    })
});
const capa = document.querySelectorAll(".capa");
capa.forEach((elements) => myObserverCapa.observe(elements));

//observador de itens
const myObserverItens = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("item-show");
        }
    })
});
const itens = document.querySelectorAll(".item-hidden");
itens.forEach((elements) => myObserverItens.observe(elements));