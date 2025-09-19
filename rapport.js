document.getElementById('download').addEventListener('click', () => {
      const element = document.getElementById('content');
      html2pdf().from(element).save();
    });

    let data = JSON.parse(localStorage.getItem("utilisateurs"));
    let user = data[data.length - 1];
    document.querySelector(".ResCorr p span").textContent = user.score;
document.querySelector(".Correction p span").textContent = user.theme;
let questionDivs = document.querySelectorAll(".Correction div");
user.answers.forEach((ans, i) => {
  if (questionDivs[i]) {
    let spans = questionDivs[i].querySelectorAll("span");

    spans[0].textContent = ans.correctAnswer;

    spans[1].textContent = ans.reponseChoisie;
  }
});