const tb = document.getElementById("mobileNo");
const btn = document.querySelector(".getStartedButton");
var phoneno = /^\d{10}$/;
var length = 0;

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  if (tb.value.length == 9) btn.disabled = false;
  else btn.disabled = true;
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

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
      // alert("Our team will get back to you in 48 hours!");
      window.location.href = "https://www.drrise.com/dr2/getStarted.html";
    });
  });
});

window.addEventListener("load", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      // alert("Our team will get back to you in 48 hours!");
      window.location.href = "https://www.drrise.com/dr2/success.html";
    });
  });
});
