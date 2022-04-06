const tb = document.querySelector(".mobileNo");
const btn = document.querySelector(".getStartedButton");
var phoneno = /^\d{10}$/;

//btn.addEventListener("click", () => {
//  if (tb.value.match(phoneno)) {
//    window.location = "https://www.google.com";
//  } else {
//    alert("You need to enter your phone number");
//  }
//});

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Our team will get back to you in 48 hours!");
    });
  });
});
