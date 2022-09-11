/***
 * Author: Danielle Alota
 * 
 */

let loginCustomer = document.getElementById("loginCustomerBtn");
let loginTradie = document.getElementById("loginTradieBtn");
let loginTitle = document.getElementById("loginTitle");
let loginBtns = document.getElementById("login-buttons-container");
let loginForm = document.getElementById("loginForm");
let backBtn = document.getElementById("backBtn");

loginCustomer.onclick = function(){
    console.log("customer logging in");
    loginTitle.innerHTML = "Login as customer";
    loginForm.classList.remove("visually-hidden");
    loginBtns.classList.add("visually-hidden");
    backBtn.classList.remove("visually-hidden");
}

loginTradie.onclick = function(){
    console.log("tradie logging in");
    loginTitle.innerHTML = "Login as tradie";
    loginForm.classList.remove("visually-hidden");
    loginBtns.classList.add("visually-hidden");
    backBtn.classList.remove("visually-hidden");
}

backBtn.onclick = function(){
    backBtn.classList.add("visually-hidden");
    loginForm.classList.add("visually-hidden");
    loginBtns.classList.remove("visually-hidden");
    loginTitle.innerHTML = "Login";
}


//Login - properly this time
const form = document.getElementById("login-form");
form.addEventListener('submit', loginUser);


