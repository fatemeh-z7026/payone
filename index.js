//Date
const date = new Date().toLocaleString();
document.getElementById("date").innerHTML = date;

//Modal
let modal = document.getElementById("loginModal");
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

let btn = document.getElementById("loginEntryBtn");
btn.addEventListener("click", () => (modal.style.display = "block"));

let close = document.getElementsByClassName("close")[0];
close.addEventListener("click", () => (modal.style.display = "none"));

//Switch Btw Login and Register Card
function switchCard() {
  const loginCard = document.querySelector(".modalContent #cardLogin");
  const registerCard = document.querySelector(".modalContent #cardRegister");

  if (loginCard.style.display === "none") {
    loginCard.style.display = "block";
    registerCard.style.display = "none";
  } else {
    loginCard.style.display = "none";
    registerCard.style.display = "block";
  }
}

//Success Alert
const closeAlert = document.getElementsByClassName("closebtn");

for (i = 0; i < closeAlert.length; i++) {
  closeAlert[0].onclick = function () {
    const div = this.parentElement;
    // div.style.opacity = "0";
    div.style.display = "none";
  };
}

//Submit Login
const submitLogin = document.querySelectorAll("button[type = submit]");
submitLogin.forEach((btn) => {
  btn.addEventListener("click", function () {
    const success = document.getElementById("alertSuccess");
    if ((success.style.display = "none")) {
      success.style.display = "block";
      modal.style.display = "none";
      setTimeout(() => {
        success.style.display = "none";
      }, 3000);
    }
  });
});

//NavBar Toggle

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
