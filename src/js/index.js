const elements = document.querySelectorAll(".faq__section__qa");

elements.forEach((element) => {
  let question = element.querySelector(".faq__section__qa__question");
  let icon = element.querySelector(".faq__section__qa__question button i");
  var answer = element.lastElementChild;
  var answers = document.querySelectorAll(".faq__section__qa__answer");

  question.addEventListener("click", () => {
    answers.forEach((ans) => {
      let ansIcon = ans.parentElement.querySelector("button i");
      ans.parentElement.classList.remove("clicked");
      if (answer !== ans) {
        ansIcon.className = "fas fa-chevron-down";
        ans.classList.add("inactive");
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
