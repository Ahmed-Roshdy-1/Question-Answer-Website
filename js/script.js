// const predict = async () => {
//   const data = document.getElementById("data");
//   const question = document.getElementById("question");
//   const submit = document.getElementById("submit");
//   const answer = document.getElementById("answer");

//   model = await qna.load();

//   submit.addEventListener("click", (e) => {
//     model.findAnswers(question.value, data.innerText).then((answers) => {
//       console.log("Answers: ", answers);
//       answer.innerHTML = answers[0].text;
//     });

//     // Prevent submitting the form which would cause a page reload.
//     e.preventDefault();
//   });
// };

// predict();

const data = document.getElementById("data");
const question = document.getElementById("question");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");

const predict = async () => {
  model = await qna.load();

  submit.addEventListener("click", (e) => {
    // const passage = document.getElementById("data").innerHTML;
    // const question = document.getElementById("question").value;

    model.findAnswers(question.value, data.innerHTML).then((answers) => {
      console.log("Answers: ", answers);
      if (answers[0]) {
        answer.innerHTML = answers[0].text;
      } else {
        answer.innerHTML = "The question is not correct, check the syntax or ask a question about the paragraph";
        answer.style.color = "#d00000";
      }
    });

    // Prevent submitting the form which would cause a page reload.
    e.preventDefault();
  });
};

predict();
