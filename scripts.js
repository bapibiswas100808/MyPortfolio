const submitButton = document.getElementById("submit-button");
const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email-adress");
const messageInput = document.getElementById("text-message");
const errorDiv = document.getElementById("errorDiv");
const sendDiv = document.getElementById("send-div");

submitButton.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };
  if (nameValue && emailValue && messageValue) {
    emailjs.send(
      "service_fmuoobf",
      "template_rptwpuu",
      templateParams,
      "4N_z4c-ySbObriCiv"
    );
    errorDiv.innerHTML = "";
    sendDiv.innerHTML = "<p>Thanks! Message sent Succesfully!</p>";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  } else {
    errorDiv.innerHTML = "<p>Please fill the form Correctly!<p/>";
    sendDiv.innerHTML = "";
  }
});

window.onload = function () {
  const preloaderArea = document.getElementById("preloader-area");
  preloaderArea.className = "page-loaded";
  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 500);
};
