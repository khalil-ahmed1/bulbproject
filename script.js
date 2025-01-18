var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var onof = 0;
btn.addEventListener("click", function () {
  if (onof == 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("bal gaya");
    onof = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    console.log("BUJ  gaya");
    onof = 0;
  }
});
