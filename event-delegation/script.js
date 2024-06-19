document.getElementById("hijo-1").addEventListener("click", function () {
  console.log("Click en Item 1");
});

document.getElementById("hijo-2").addEventListener("click", function () {
  console.log("Click en Item 2");
});

document.getElementById("hijo-3").addEventListener("click", function () {
  console.log("Click en Item 3");
});

document.getElementById("hijo-4").addEventListener("click", function () {
  console.log("Click en Item 4");
});

document.getElementById("hijo-5").addEventListener("click", function () {
  console.log("Click en Item 5");
});

document.getElementById("hijo-6").addEventListener("click", function () {
  console.log("Click en Item 6");
});

document.getElementById("padre").addEventListener("click", function (event) {
  //  Es el estándar. Los nombre de nodos siempre se representan en mayúsculas.
  if (event.target && event.target.nodeName === "LI") {
    console.log("click en Item" + event.target.id.replace("hijo-", " "));
  }
});
