// const & Variables

const faqContainer = document.querySelectorAll(".faqContainer");
const topEmailInput = document.getElementById("topEmail");
const bottomEmailInput = document.getElementById("bottomEmail");

// Functions
function toggleAccordion() {
  const thisSign = this.querySelector(".faqHeader p:nth-of-type(2)");

  if (this.classList.contains("open")) {
    this.classList.remove("open");
    thisSign.innerHTML = "&plus;";
    return;
  }

  faqContainer.forEach((faq) => {
    if (faq.classList.contains("open")) {
      faq.classList.remove("open");
      faq.querySelector(".faqHeader p:nth-of-type(2)").innerHTML = "&plus;";
    }
  });

  this.classList.add("open");

  thisSign.innerHTML = "&#215;";
}

function validateEmail(email) {
  const emailReg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!email.nextElementSibling.classList.contains("error")) {
    const errorP = document.createElement("p");
    errorP.classList.add("error");
    email.insertAdjacentElement("afterend", errorP);
  }

  if (email.value === "" || email.value === null) {
    email.nextElementSibling.textContent = "Email is required";
    return;
  }

  if (!emailReg.test(email)) {
    email.nextElementSibling.textContent = "Your Email is Invalid";
    return;
  }
}

//Event Listeners
faqContainer.forEach((faq) => {
  faq.addEventListener("click", toggleAccordion);
});

topEmailInput.addEventListener("input", () => {
  bottomEmailInput.value = topEmailInput.value;
});

topEmailInput.addEventListener("focusin", function () {
  const label = this.querySelector("#topEmail ~ label");
  if (!label.classList.contains("focused")) {
    label.classList.add("focused");
  }
});

topEmailInput.addEventListener("focusout", function () {
  const label = this.querySelector("#topEmail ~ label");

  validateEmail(topEmailInput);
  if (topEmailInput.value === "" || topEmailInput.value === "") {
    label.classList.remove("focused");
  }
});

bottomEmailInput.addEventListener("input", () => {
  topEmailInput.value = topEmailInput.value;
});

bottomEmailInput.addEventListener("focusin", function () {
  const label = this.querySelector("#bottomEmail ~ label");
  if (!label.classList.contains("focused")) {
    label.classList.add("focused");
  }
});

bottomEmailInput.addEventListener("focusout", function () {
  const label = this.querySelector("#bottomEmail ~ label");

  validateEmail(bottomEmailInput);
  if (bottomEmailInput.value === "" || bottomEmailInput.value === "") {
    label.classList.remove("focused");
  }
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
});
