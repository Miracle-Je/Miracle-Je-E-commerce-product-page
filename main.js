let sideMenu = document.querySelector("ul");
let closeBtn = document.querySelector(".close");
let hamburgerMenu = document.querySelector(".menu");
let sm = document.querySelectorAll(".sm");
let big = document.querySelector(".big");
let minusBtn = document.querySelector(".minus");
let addBtn = document.querySelector(".add");
let num = document.querySelector(".num");
let price = document.querySelector(".current-price");
let toggle = document.querySelector(".selected-cart");
let cart = document.querySelector(".cart");
let cartBtn = document.querySelector(".btn");

let count = 0;

closeBtn.addEventListener("click", function () {
  sideMenu.classList.add("close-menu");
});

hamburgerMenu.addEventListener("click", function () {
  sideMenu.classList.remove("close-menu");
});

sm.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.classList.contains("pic1")) {
      e.style.border = "2px solid #ff7d1a";
      e.style.opacity = "0.6";
      big.classList.remove("img4");
      big.classList.remove("img2");
      big.classList.remove("img3");

      document.querySelector(".pic2").style.border = "none";
      document.querySelector(".pic2").style.opacity = "10";

      document.querySelector(".pic3").style.border = "none";
      document.querySelector(".pic3").style.opacity = "10";

      document.querySelector(".pic4").style.border = "none";
      document.querySelector(".pic4").style.opacity = "10";
    }

    if (e.classList.contains("pic2")) {
      e.style.border = "2px solid #ff7d1a";
      e.style.opacity = "0.6";
      big.classList.add("img2");
      big.classList.remove("img1");
      big.classList.remove("img4");
      big.classList.remove("img3");

      document.querySelector(".pic1").style.border = "none";
      document.querySelector(".pic1").style.opacity = "10";

      document.querySelector(".pic3").style.border = "none";
      document.querySelector(".pic3").style.opacity = "10";

      document.querySelector(".pic4").style.border = "none";
      document.querySelector(".pic4").style.opacity = "10";
    }

    if (e.classList.contains("pic3")) {
      e.style.border = "2px solid #ff7d1a";
      e.style.opacity = "0.6";
      big.classList.add("img3");
      big.classList.remove("img1");
      big.classList.remove("img2");
      big.classList.remove("img4");

      document.querySelector(".pic1").style.border = "none";
      document.querySelector(".pic1").style.opacity = "10";

      document.querySelector(".pic2").style.border = "none";
      document.querySelector(".pic2").style.opacity = "10";

      document.querySelector(".pic4").style.border = "none";
      document.querySelector(".pic4").style.opacity = "10";
    }

    if (e.classList.contains("pic4")) {
      e.style.border = "2px solid #ff7d1a";
      e.style.opacity = "0.6";
      big.classList.add("img4");
      big.classList.remove("img1");
      big.classList.remove("img2");
      big.classList.remove("img3");

      document.querySelector(".pic1").style.border = "none";
      document.querySelector(".pic1").style.opacity = "10";

      document.querySelector(".pic3").style.border = "none";
      document.querySelector(".pic3").style.opacity = "10";

      document.querySelector(".pic2").style.border = "none";
      document.querySelector(".pic2").style.opacity = "10";
    }
  });
});

let currentPrice = price.innerHTML;

minusBtn.addEventListener("click", function () {
  count -= 1;
  num.innerHTML = count;
  price.innerHTML = parseInt(price.innerHTML) - 125.0 + ".00";
  if (num.innerHTML <= 0) {
    price.innerHTML = "0";
    count = 0;
  }
});

addBtn.addEventListener("click", function () {
  count += 1;
  num.innerHTML = count;
  price.innerHTML = parseInt(price.innerHTML) + 125.0 + ".00";
  conv += conv;
  console.log(conv);
});

cart.addEventListener("click", function () {
  toggle.classList.toggle("toggle");
});

document.querySelector("section").addEventListener("click", function () {
  toggle.classList.add("toggle");
});

let number = 0;
cartBtn.addEventListener("click", function () {
  number += 1;
  let itemsInCart = document.querySelector(".items-in-cart");
  itemsInCart.innerHTML = number;

  document.querySelector(".num-item").innerHTML = count;
  document.querySelector(".total-price").innerHTML =
    "= $" + price.innerHTML + ".00";
});
