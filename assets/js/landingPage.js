const faqContainer = document.querySelectorAll(".faqContainer");

function accordionToggler() {
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

faqContainer.forEach((faq) => {
  faq.addEventListener("click", accordionToggler);
});
