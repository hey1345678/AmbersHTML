'use strict';

// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

const signUpBtn = document.querySelector('.shopping-cart-btn2');
const signUpPane = document.querySelector('.sign-up-pane');

// Function to hide a specific pane
const hidePane = function (paneElement) {
  paneElement.classList.remove('active');
}

// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

const cartToggleFunc = function () {
  if (shoppingCart.classList.contains('active')) {
    hidePane(shoppingCart);
  } else {
//     hideAllPanes();
    shoppingCart.classList.toggle('active');
  }
}

// sign-up form toggle function
const signUpToggleFunc = function () {
  if (signUpPane.classList.contains('active')) {
    // Close signup pane if already active
    hidePane(signUpPane);
  } else {
    // hideAllPanes();
    signUpPane.classList.toggle('active');
  }
}

// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {
  if (shoppingCart.classList.contains('active') || signUpPane.classList.contains('active')) {
    hideAllPanes();
  }
  navToggleFunc();
});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {
  cartToggleFunc();
});

// add event on sign-up-btn
signUpBtn.addEventListener('click', function () {
  signUpToggleFunc();
});


const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});



// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc);
}
