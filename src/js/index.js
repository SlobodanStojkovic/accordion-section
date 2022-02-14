const faqQuestion = document.querySelectorAll(".faq__section__qa__question");

faqQuestion.forEach((question) => {
  question.addEventListener("click", () => {
    let faqMainWrapper = question.closest(".faq__section__text"),
      faqItems = faqMainWrapper.children,
      faqCurrentItem = question.parentElement,
      faqCurrentAnswear = faqCurrentItem.lastElementChild;
    console.log(faqCurrentAnswear);
    faqCurrentItem.classList.toggle("active");

    if (faqCurrentAnswear.style.maxHeight) {
      faqCurrentAnswear.style.maxHeight = null;
    } else {
      faqCurrentAnswear.style.maxHeight = faqCurrentAnswear.scrollHeight + "px";
    }

    let otherFaqItems = [...faqItems].filter((item) => {
      return item !== faqCurrentItem;
    });

    otherFaqItems.forEach((item) => {
      item.classList.remove("active");
      item.lastElementChild.style.maxHeight = null;
    });

    let arrows = document.querySelectorAll(".faq__section__qa__question");

    arrows.forEach((item) => {
      if (item.parentElement.classList.contains("active")) {
        item.classList.remove("down");
        item.classList.add("up");
      }

      if (!item.parentElement.classList.contains("active")) {
        item.classList.add("down");
        item.classList.remove("up");
      }
    });
  });
});
