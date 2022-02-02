const elements = document.querySelectorAll(".faq__section__qa__question");

elements.forEach((element) => {
  let btn = element.querySelector(".faq__section__qa__question__button");
  let icon = element.querySelector(".faq__section__qa__question button i");
  var answer = element.lastElementChild;
  var answers = document.querySelectorAll(
    ".faq__section__qa .faq__section__qa__answer"
  );
  console.log(answers);

  btn.addEventListener("click", () => {
    answers.forEach((ans) => {
      let ansIcon = ans.parentElement.querySelector("button i");
      console.log(ans);
      if (answer !== ans) {
        ans.classList.add("active");
        ansIcon.className = "fas fa-chevron-up";
      }
    });

    answer.classList.toggle("inactive");
    icon.className === "fas fa-chevron-up"
      ? (icon.className = "fas fa-angle-down")
      : (icon.className = "fas fa-chevron-up");
  });
});
