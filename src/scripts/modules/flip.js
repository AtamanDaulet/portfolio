const login = document.querySelector(".btn_auth");
const returnToManePage = document.querySelector(".btn-main");
let card = document.querySelector(".welcome__card");

login.addEventListener("click",function () {
    card.classList.toggle("isActive");
})
returnToManePage.addEventListener("click",function () {
    card.classList.toggle("isActive");
})