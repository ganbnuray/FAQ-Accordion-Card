const questions = document.querySelectorAll(".clickable");
const answers = document.querySelectorAll(".a");
const arrows = document.querySelectorAll(".arrow");
let viewing_answer = [];
let viewing_question = [];
let viewing_arrow = [];
for (let i = 0; i < answers.length; i++) {
  let count = 0;
  questions[i].addEventListener("click", (e) => {
    count++;
    if (count % 2 === 1) {
      if (viewing_answer.length > 0) {
        for (let j = 0; j < viewing_answer.length; j++) {
          viewing_answer[j].style.display = "none";
          viewing_question[j].style.fontWeight = "400";
          viewing_arrow[j].style.transform = "rotate(0)";
        }
        viewing_answer = [];
        viewing_question = [];
        viewing_arrow = [];
      }
      viewing_answer.push(answers[i]);
      viewing_question.push(questions[i]);
      viewing_arrow.push(arrows[i]);
      answers[i].style.display = "block";
      questions[i].style.fontWeight = "700";
      arrows[i].style.transform = "rotate(180deg)";
    } else {
      viewing_answer[0].style.display = "none";
      viewing_question[0].style.fontWeight = "400";
      viewing_arrow[0].style.transform = "rotate(0)";
      viewing_answer = [];
      viewing_question = [];
      viewing_arrow = [];
    }
  });
}
