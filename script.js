const plussIcon = document.querySelector(".question-img");
const paragraph = document.querySelector(".paragraph");

function expandQuestion() {
  paragraph.classList.toggle("invisible");
}

plussIcon.addEventListener("click", expandQuestion);
