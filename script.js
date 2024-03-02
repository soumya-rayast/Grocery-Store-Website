// for search-box
let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active')
    cart.classList.remove('active')
    loginform.classList.remove('active');
}

// for cart

let cart = document.querySelector('.shopping-cart');

document.querySelector("#cart-btn").onclick = () =>{
    cart.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active');
    loginform.classList.remove('active');
}

// for login form 

let loginform = document.querySelector('.login-form');

document.querySelector("#login-btn").onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active')
    searchform.classList.remove('active');
    cart.classList.remove('active')
}

// in media querries 

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cart.classList.remove('active')
    loginform.classList.remove('active');
}

// for rmove active classes

window.onscroll = () =>{
    navbar.classList.remove('active')
    searchform.classList.remove('active');
    cart.classList.remove('active')
    loginform.classList.remove('active');
}


// main section slides


let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;


function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}