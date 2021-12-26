// // Notice there is no 'import' statement. 'qna' and 'tf' is
// // available on the index-page because of the script tag above.
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

// Notice there is no 'import' statement. 'qna' and 'tf' is
// available on the index-page because of the script tag above.
const predict = async () => {
  model = await qna.load();

  document.getElementById("submit").addEventListener("click", (e) => {
    const passage = document.getElementById("data").innerHTML;
    const question = document.getElementById("question").value;
    model.findAnswers(question, passage).then((answers) => {
      console.log("Answers: ", answers);
      document.getElementById("answer").innerHTML = answers[0].text;
    });

    // Prevent submitting the form which would cause a page reload.
    e.preventDefault();
  });
};

predict();
