// const { CONNECTION_STRING } = process.env;

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
const submitRingBtn = document.querySelector("#submitRing");
let woodDisplayed = "";
let inlayDisplayed = "";
// let finishDisplayed = "";

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
    finishDisplayed = "";
    finishBtn[i].classList.add("clicked");

    // if (finishBtn[i].classList.contains("clicked")) {
    //   finishDisplayed += finishBtn[i].id;
    //   console.log(finishDisplayed);
    // }

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

  userDisplayed(woodDisplayed + inlayDisplayed);
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

  if (woodDisplayed < 1) {
    alert("Must select a wood first");
  } else {
    userDisplayed(woodDisplayed + inlayDisplayed);
  }
});

//flowers
flowers.addEventListener("click", (event) => {
  event.preventDefault();

  if (woodDisplayed < 1) {
    alert("Must select a wood first");
  } else {
    userDisplayed(woodDisplayed + inlayDisplayed);
  }
});

//submit
submitRingBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let submitDiv = document.createElement("div");
  submitDiv.id = "submitForm";

  let body = document.querySelector("body");
  let section = document.querySelector(".customizations");

  body.appendChild(submitDiv);

  section.style.filter = "blur(4px)";
  // nav.style.filter = "blur(4px)";
  // button.style.filter = "blur(4px)";

  let newSubDiv = document.getElementById("submitForm");

  const submitForm = document.createElement("form");
  submitForm.id = "form";
  submitForm.innerHTML = `
  <label for="firstName">First Name</label>
  <input class='formStyle' type="text" name="firstName" id="firstName" required/><br />
  <label for="lastName">Last Name</label>
  <input class='formStyle' type="text" name="lastName" id="lastName" required/><br />
  <label for="address">Address</label>
  <input class='formStyle' type="text" name="address" id="address" required/><br />
  <label for="apartment">Apartment, suite, etc.</label>
  <input class='formStyle' type="text" name="apartment" id="apartment" /><br />
  <label for="city">City</label>
  <input class='formStyle' type="text" name="city" id="city" required/><br />
  <label for="state">State</label>
  <input class='formStyle' type="text" name="state" id="state" required/><br />
  <label for="ringSize">Ring Size</label>
  <select class='formStyle' id="ringSize" name="ringSize" required><br />
  <option value="5">5</option>
  <option value="5.5">5.5</option>
    <option value="6">6</option>
    <option value="6.5">6.5</option>
    <option value="7">7</option>
    <option value="7.5">7.5</option>
    <option value="8">8</option>
    <option value="8.5">8.5</option>
    <option value="9">9</option>
    <option value="9.5">9.5</option>
    <option value="10">10</option>
    <option value="10.5">10.5</option>
    <option value="11">11</option>
    <option value="11.5">11.5</option>
    <option value="12">12</option>
  </select><br />
  <label for="notes">Notes</label>
  <input class='formStyle' type="text" name="notes" id="notes" /><br />
  <button type='submit' id='formSubmitButton'>Submit</button>
  `;
  newSubDiv.appendChild(submitForm);
  newSubDiv.style.filter = "none";
  // const newSubmit = document.querySelector("#formSubmitButton");
  // console.log(newSubmit);
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const address = document.querySelector("#address");
    const apartment = document.querySelector("#apartment");
    const city = document.querySelector("#city");
    const state = document.querySelector("#state");
    const ringSize = document.querySelector("#ringSize");
    const notes = document.querySelector("#notes");

    console.log(firstName);
    const newOrder = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      apartment: apartment.value,
      city: city.value,
      state: state.value,
      ringSize: +ringSize.value,
      notes: notes.value,
    };

    axios
      .post("http://momentrings.herokuapp.com/api/neworder", newOrder)
      .then(() => {
        window.location.href = "/home.html";
      });
  });
});
