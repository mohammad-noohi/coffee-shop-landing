"use strict";

/*------------------------------- Elements -------------------------------*/

const html = document.documentElement;
const toggleThemeButtons = document.querySelectorAll(".toggle-theme");
const mobileMenuItems = document.querySelectorAll(".mobile-menu li");
const barsBtn = document.querySelector(".bars-btn");
const overlay = document.querySelector(".overlay");
const mobileOffcanvas = document.querySelector(".mobile-offcanvas");
const CloseMobileOffcanvasBtn = document.querySelector(".mobile-offcanvas-close-btn");
const mobileCartToggler = document.querySelector(".mobile-cart-toggler");
const mobileCart = document.querySelector(".mobile-cart");
const mobileCartCloseBtn = document.querySelector(".mobile-cart__close-btn");
const starsElems = document.querySelectorAll(".stars-rate");

/*------------------------------- Functions -------------------------------*/
function changeTheme() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    // set light theme and moon icon
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    // set dark theme and sun icon
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

function openMobileOffcanvas() {
  mobileOffcanvas.classList.add("mobile-offcanvas--active");
  overlay.classList.add("overlay--active");
}

function closeMobileOffcanvas() {
  mobileOffcanvas.classList.remove("mobile-offcanvas--active");
  overlay.classList.remove("overlay--active");
}

function openMobileCart() {
  mobileCart.classList.replace("-left-64", "left-0");
  overlay.classList.add("overlay--active");
}

function closeMobileCart() {
  mobileCart.classList.replace("left-0", "-left-64");
  overlay.classList.remove("overlay--active");
}

/*------------------------------- Events -------------------------------*/

// Dropdown Action In Mobile Submenu
toggleThemeButtons.forEach(btn => {
  btn.addEventListener("click", changeTheme);
});

mobileMenuItems.forEach(mobileMenuItem =>
  mobileMenuItem.addEventListener("click", e => {
    const listItem = e.target.closest("li");
    const submenu = listItem.querySelector("ul");

    let dropdownIsOpen = listItem.classList.contains("mobile-menu__item--active") && submenu.classList.contains("mobile-menu__submenu--active");

    if (dropdownIsOpen) {
      // close the dropdown
      listItem.classList.remove("mobile-menu__item--active");
      submenu.classList.remove("mobile-menu__submenu--active");
    } else {
      // open the dropdown
      listItem.classList.add("mobile-menu__item--active");
      submenu.classList.add("mobile-menu__submenu--active");
    }
  })
);

// Mobile Offcanvas Actions
barsBtn.addEventListener("click", openMobileOffcanvas);
CloseMobileOffcanvasBtn.addEventListener("click", closeMobileOffcanvas);

// Mobile Cart Offcanvas Actions
mobileCartToggler.addEventListener("click", openMobileCart);
mobileCartCloseBtn.addEventListener("click", closeMobileCart);

// Set stars rate via user
starsElems.forEach(starsWrapper => {
  starsWrapper.addEventListener("click", e => {
    let starNumber = e.target.closest(".star").dataset.starNumber;
    starsWrapper.dataset.productRate = starNumber;
  });
});

// Overlay Actions(close mobile cart & moible offcanvas)
overlay.addEventListener("click", e => {
  closeMobileOffcanvas();
  closeMobileCart();
});

/*------------------------------- Swiper Slider Config -------------------------------*/
const swiper = new Swiper(".swiper", {
  // Default config
  loop: false /* use loop if needed */,
  slidesPerView: 2,
  spaceBetween: 14,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-custome",
    prevEl: ".swiper-button-prev-custome",
  },

  // Responsive
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
