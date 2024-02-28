// const plussIcon = document.querySelector(".question-btn");
// const paragraph = document.querySelector(".paragraph");

// function expandQuestion() {
//   paragraph.classList.toggle("invisible");
// }

// plussIcon.addEventListener("click", expandQuestion);

// const plussIcons = document.querySelectorAll(".question-img");
// const paragraphs = document.querySelectorAll(".paragraph");

// function expandQuestion(event) {
//   const paragraph = event.currentTarget.nextElementSibling;
//   paragraph.classList.toggle("invisible");
// }

// plussIcons.forEach((plussIcon, index) => {
//   plussIcon.addEventListener("click", () => expandQuestion(paragraphs[index]));
// });

const plussIcons = document.querySelectorAll(".question-img");
const paragraphs = document.querySelectorAll(".paragraph");

function expandQuestion(event) {
  const paragraph = event.currentTarget.parentNode.nextElementSibling;
  paragraph.classList.toggle("invisible");
}

plussIcons.forEach((plussIcon, index) => {
  plussIcon.addEventListener("click", () => expandQuestion(event));
});
