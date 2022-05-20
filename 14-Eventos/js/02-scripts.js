const nav = document.querySelector(".navegacion");  

nav.addEventListener("mouseout", () => {   
    console.log("saliendo en la navegacion");  

    nav.style.backgroundColor = "transparent"
});  

nav.addEventListener("dblclick", () => {
    console.log("entrando en la nav!");
    nav.style.backgroundColor = "white"
});
