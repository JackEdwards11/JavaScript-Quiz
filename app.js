const correctAnswers = ["B", "B", "A", "B"];

const form = document.querySelector(".questionCont");

const results = document.querySelector(".results");
const percent = document.querySelector(".percent");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  scrollTo(0, 0);
  results.style.display = "block";
  let score = 0;
  // Check answers
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  correctAnswers.forEach((ans, i) => {
    if (ans === userAnswers[i]) {
      score += 25;
    }
  });
  console.log(score);

  // Show results on the page

  let j = 0;
  const timer = setInterval(() => {
    j += 1;
    percent.textContent = `${j}%`;
    if (j === score) {
      clearInterval(timer);
    }
  }, 10);

//   percent.textContent = `${score}%`;
});
