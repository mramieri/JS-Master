//Event Bubbling con Delegation

const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", e => {
    if(e.target.classList.contains("titulo"))   {
        console.log("Diste click en titulouu");
    }
    if(e.target.classList.contains("info"))   {
        console.log("Diste click en infoo");
    }
    if(e.target.classList.contains("precio"))   {
        console.log("Diste click en precioo$");
    }
    if(e.target.classList.contains("card"))   {
        console.log("Diste click en card");
    }
});