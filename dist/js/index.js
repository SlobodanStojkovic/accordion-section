const faqQuestion=document.querySelectorAll(".faq__section__qa__question");faqQuestion.forEach((e=>{e.addEventListener("click",(()=>{let t=e.closest(".faq__section__text").children,s=e.parentElement,l=s.lastElementChild;console.log(l),s.classList.toggle("active"),l.style.maxHeight?l.style.maxHeight=null:l.style.maxHeight=l.scrollHeight+"px",[...t].filter((e=>e!==s)).forEach((e=>{e.classList.remove("active"),e.lastElementChild.style.maxHeight=null})),document.querySelectorAll(".faq__section__qa__question").forEach((e=>{e.parentElement.classList.contains("active")&&(e.classList.remove("down"),e.classList.add("up")),e.parentElement.classList.contains("active")||(e.classList.add("down"),e.classList.remove("up"))}))}))}));