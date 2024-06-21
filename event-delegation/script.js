document.getElementById("padre").addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log(event.target.id);
  }
});
