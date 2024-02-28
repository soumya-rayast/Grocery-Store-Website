// for search-box
let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

// for cart

let cart = document.querySelector('.shopping-cart');

document.querySelector("#cart-btn").onclick = () =>{
    cart.classList.toggle('active')
}