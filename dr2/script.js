import $ from "jquery";

const tb = document.querySelector(".mobileNo");
const btn = document.querySelector(".getStartedButton");
var phoneno = /^\d{10}$/;

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "receiver@email_address.com",
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  }).then(function (message) {
    alert("mail sent successfully");
  });
}

btn.addEventListener("click", () => {
  if (tb.value.match(phoneno)) {
    // window.location = "https://www.google.com";
    sendEmail();
  } else {
    alert("You need to enter your phone number");
  }
});
