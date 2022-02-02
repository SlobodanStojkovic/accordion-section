const elements = document.querySelectorAll(".faq__section__qa");

elements.forEach((element) => {
  let btn = element.querySelector(".faq__section__qa__question__button");
  let icon = element.querySelector(".faq__section__qa__question button i");
  var answer = element.lastElementChild;
  var answers = document.querySelectorAll(".faq__section__qa__answer");

  btn.addEventListener("click", () => {
    answers.forEach((ans) => {
      let ansIcon = ans.parentElement.querySelector("button i");
      if (answer !== ans) {
        ans.parentElement.classList.remove("clicked");
        ansIcon.className = "fas fa-chevron-down";
      }
      if (answer === ans) {
        ans.parentElement.classList.add("clicked");
      }
    });

    answer.classList.toggle("inactive");
    icon.className === "fas fa-chevron-up"
      ? (icon.className = "fas fa-chevron-down")
      : (icon.className = "fas fa-chevron-up");
  });
});
