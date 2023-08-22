const date = new Date().toLocaleString();
document.getElementById("date").innerHTML = date;


let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginBtn");
btn.addEventListener("click", () => modal.style.display = "block" );


let close = document.getElementsByClassName("close");

