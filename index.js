const date = new Date().toLocaleString();
document.getElementById("date").innerHTML = date;


let modal = document.getElementById("loginModal");
window.addEventListener("click", (event) => {if (event.target == modal) {
    modal.style.display = "none";
}})

let btn = document.getElementById("loginBtn");
btn.addEventListener("click", () => modal.style.display = "block" );

let close = document.getElementsByClassName("close")[0];
close.addEventListener("click", () => modal.style.display="none" );

