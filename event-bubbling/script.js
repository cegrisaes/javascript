document.getElementById("hijo").addEventListener("click", function (event) {
  console.log("click en el boton!");
  event.stopPropagation();
});

document.getElementById("padre").addEventListener("click", function () {
  console.log("click en el div!");
});
