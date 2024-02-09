const addressEl = document.getElementById("address");
const buttonEl = document.getElementById("submit");

addressEl.addEventListener("change", function (event) {
  console.log(event.target.value);
});

console.log("   Hii", addressEl);
console.log(addressEl.textContent);
