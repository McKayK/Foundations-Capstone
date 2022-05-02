const walnut = document.querySelector("#walnut");
const koa = document.querySelector("#koa");
const bubinga = document.querySelector("#bubinga");
const opal = document.querySelector("#opal");
const copper = document.querySelector("#copper");
const flower = document.querySelector("#flowers");
const matte = document.querySelector("#matte");
const glossy = document.querySelector("#glossy");

walnut.addEventListener("click", (event) => {
  event.preventDefault();

  const userRing = document.createElement("div");
  userRing.innerText = "test";
  userRing.innerHTML = "<img id='userRing' src='../images/WalnutRing.jpg/>";
  console.log(userRing.innerHTML);
  document.body.appendChild(userRing);
});
