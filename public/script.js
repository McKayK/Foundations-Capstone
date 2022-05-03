const walnut = document.querySelector("#walnut");
const koa = document.querySelector("#koa");
const bubinga = document.querySelector("#bubinga");
const opal = document.querySelector("#opal");
const copper = document.querySelector("#copper");
const flower = document.querySelector("#flowers");
const matte = document.querySelector("#matte");
const glossy = document.querySelector("#glossy");
const woodBtn = document.querySelectorAll(".woodBtn");
const inlayBtn = document.querySelectorAll(".inlayBtn");
const finishBtn = document.querySelectorAll(".finishBtn");
let woodDisplayed = "";
let inlayDisplayed = "";
// let displayed = "";

const userDisplayed = (image) => {
  const oldImg = document.getElementById("userRing");
  const oldDiv = document.getElementById("userSelection");

  if (!!oldImg) {
    oldImg.remove();
    oldDiv.remove();
  }

  let userRing = document.createElement("div");
  userRing.id = "userSelection";

  let body = document.querySelector("body");
  body.appendChild(userRing);

  let newDiv = document.getElementById("userSelection");

  const img = document.createElement("img");
  img.id = "userRing";
  img.setAttribute("src", `../images/${image}.png`);
  newDiv.appendChild(img);
  // newDiv.innerHTML = img;
  // console.log(img.src);
};

//display
// const displayTest = () => {};

//wood

for (let i = 0; i < woodBtn.length; i++) {
  woodBtn[i].addEventListener("click", () => {
    woodDisplayed = "";
    woodBtn[i].classList.add("clicked");

    if (woodBtn[i].classList.contains("clicked")) {
      woodDisplayed += woodBtn[i].id;
      console.log(woodDisplayed);
    }

    for (let x = 0; x < woodBtn.length; x++) {
      if (woodBtn[x] !== woodBtn[i]) {
        woodBtn[x].classList.remove("clicked");
      }
    }
  });
}
console.log(woodBtn);
// const displayed = (arr) => {
//   let displayedStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     displayedStr += arr[i].id;
//   }
// };

//inlay
for (let i = 0; i < inlayBtn.length; i++) {
  inlayBtn[i].addEventListener("click", () => {
    inlayDisplayed = "";
    inlayBtn[i].classList.add("clicked");

    if (inlayBtn[i].classList.contains("clicked")) {
      inlayDisplayed += inlayBtn[i].id;
      console.log(inlayDisplayed);
    }

    for (let x = 0; x < inlayBtn.length; x++) {
      if (inlayBtn[x] !== inlayBtn[i]) {
        inlayBtn[x].classList.remove("clicked");
      }
    }
  });
}

//finish
for (let i = 0; i < finishBtn.length; i++) {
  finishBtn[i].addEventListener("click", () => {
    finishBtn[i].classList.add("clicked");
    for (let x = 0; x < finishBtn.length; x++) {
      if (finishBtn[x] !== finishBtn[i]) {
        finishBtn[x].classList.remove("clicked");
      }
    }
  });
}

//walnut
walnut.addEventListener("click", (event) => {
  event.preventDefault();

  userDisplayed(woodDisplayed + inlayDisplayed);
});

//koa
koa.addEventListener("click", (event) => {
  event.preventDefault();

  userDisplayed(woodDisplayed + inlayDisplayed);
});

//bubinga
bubinga.addEventListener("click", (event) => {
  event.preventDefault();

  const oldImg = document.getElementById("userRing");
  const oldDiv = document.getElementById("userSelection");

  if (!!oldImg) {
    oldImg.remove();
    oldDiv.remove();
  }

  let userRing = document.createElement("div");
  userRing.id = "userSelection";

  let body = document.querySelector("body");
  body.appendChild(userRing);

  let newDiv = document.getElementById("userSelection");

  const img = document.createElement("img");
  img.id = "userRing";
  img.setAttribute("src", "../images/BubingaRing.png");
  // console.log(img.src);
  newDiv.appendChild(img);
});

//opal
opal.addEventListener("click", (event) => {
  event.preventDefault();
  if (woodDisplayed < 1) {
    alert("Must select a wood first");
  } else {
    userDisplayed(woodDisplayed + inlayDisplayed);
  }
});

//copper
copper.addEventListener("click", (event) => {
  event.preventDefault();
  const oldImg = document.getElementById("userRing");
  const oldDiv = document.getElementById("userSelection");

  if (!!oldImg) {
    oldImg.remove();
    oldDiv.remove();
  }

  let userRing = document.createElement("div");
  userRing.id = "userSelection";

  let body = document.querySelector("body");
  body.appendChild(userRing);

  let newDiv = document.getElementById("userSelection");

  const img = document.createElement("img");
  img.id = "userRing";
  img.setAttribute("src", "../images/WalnutwCopper.png");
  // console.log(img.src);
  newDiv.appendChild(img);
});
// if(woodBtn.classList === 'clicked')
