const tb = document.querySelector(".mobileNo");
const btn = document.querySelector(".getStartedButton");
var phoneno = /^\d{10}$/;

btn.addEventListener("click", () => {
  if (tb.value.match(phoneno)) {
    window.location = "https://www.google.com";
  } else {
    alert("You need to enter your phone number");
  }
});
