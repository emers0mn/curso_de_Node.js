
let tittle = document.getElementById("titulo");
let des = document.getElementById("description");

tittle.addEventListener('click', clicar)

function clicar() {
    tittle.innerHTML = "Mudei"
}


console.log(tittle)