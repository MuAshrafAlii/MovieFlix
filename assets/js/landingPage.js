// const & Variables

const faqContainer = document.querySelectorAll(".faqContainer");
const topEmailInput = document.getElementById("topEmail");
const bottomEmailInput = document.getElementById("bottomEmail");
const topForm = document.getElementById("topForm");
const bottomForm = document.getElementById("bottomForm");

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

class Register {
  errorArray = [];

  validateEmail(email) {
    const emailReg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.nextElementSibling.classList.contains("error")) {
      this.errorArray = [];
      const errorP = document.createElement("p");
      errorP.classList.add("error");
      email.insertAdjacentElement("afterend", errorP);
    }

    if (email.value === "" || email.value === null) {
      this.errorArray = [];
      email.nextElementSibling.textContent = "Email is required";
      this.errorArray.push("Email is required");
      return;
    }

    if (!emailReg.test(email)) {
      email.nextElementSibling.textContent = "Your Email is Invalid";
      this.errorArray.push("Your Email is Invalid");
      return;
    }
  }
}

const regObj = new Register();

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

  regObj.validateEmail(topEmailInput);
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

  regObj.validateEmail(bottomEmailInput);
  if (bottomEmailInput.value === "" || bottomEmailInput.value === "") {
    label.classList.remove("focused");
  }
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
});
