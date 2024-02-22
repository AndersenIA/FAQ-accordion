const plussIcon = document.querySelector(".question-btn");
const paragraph = document.querySelector(".paragraph");

function expandQuestion() {
  paragraph.classList.toggle("invisible");
}

plussIcon.addEventListener("click", expandQuestion);
