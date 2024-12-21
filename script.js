console.log("Hello");

// DOM MANIPULATION
//Document Object Model
// Simplenya html kita
// Interversi/Manipulation/ Di-edit"
//Dom Manipuliation simplenya Ngedit HTML dari java script

const plusBtn = document.querySelector(".plus");
const counter = document.querySelector(".content");
const minusBtn = document.querySelector(".minus");
const submitBtn = document.querySelector(".cart-submit");
const toastCtr = document.querySelector(".toast__container");
const productS1 = document.querySelector(".size 1");
const productS2 = document.querySelector(".size 2");
const sizes = document.querySelectorAll(".product__size");
const sizeSelector = document.querySelector(".product__label--size");
//console.log(plusBtn);
// counter.textContent = "Editan dari J";

for (let i = 0; i < sizes.length; i++) {
  const element = sizes[i];
  element.addEventListener(".click", function () {
    for (let j = 0; j < sizes.length; j++) {
      const element = sizes[j];
      element.classList.remove("highlighted");
    }

    element.classList.add("highlighted");
  });
}

// ADALAH CARA LAMA WKWK
// productS1.addEventListener("click", function () {
//   productS1.classList.remove("highlighted");
//   productS1.classList.remove("highlighted");

//   productS1.classList.add("highlighted");
// });

// productS2.addEventListener("click", function () {
//   productS2.classList.remove("highlighted");
//   productS2.classList.remove("highlighted");

//   productS2.classList.add("highlighted");
// });

// const name = "Anjayy";
// for (let i = 0; i < 10; i++) {
//   console.log(name[i]);
// }

// EVENT LISTENER
let count = 0;
plusBtn.addEventListener("click", function () {
  // count = count = 1;
  count++;
  counter.textContent = count;
});

// Menggunakan peraturan jika count tidak boleh kurang dari 0
minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});

// === SUBMIT CARD BUTTON ===
submitBtn.addEventListener("click", function () {
  if (toastCtr.classList.contains("toast--hide")) {
    toastCtr.classList.remove("toast--hide");
  }

  setTimeout(function () {
    toastCtr.classList.add("toast--hide");
  }, 2000);
});
