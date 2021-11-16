// const faqs = document.querySelectorAll(".faq");
// const btns = document.querySelectorAll(".faq-toggle");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", () => {
//     faqs[i].classList.toggle("active");
//   });
// }

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
