// document.getElementById("download").addEventListener("click", () => {
//   const element = document.getElementById("content");
//   html2pdf().from(element).save();
// });

document.getElementById("download").addEventListener("click", () => {
  let download=document.getElementById("download");
  download.style.display="none";
  window.print();
});

let data = JSON.parse(localStorage.getItem("utilisateurs"));
let user = data[data.length - 1];
document.querySelector(".score").textContent = user.score;
document.querySelector(".theme").textContent = user.theme;
document.querySelector(".Utilisateur").textContent = user['name'];

let questionDivs = document.querySelectorAll(".Correction div");

user.answers.forEach((answer, i) => {
  console.log(questionDivs[i]);
  if (questionDivs[i]) {
    let spans = questionDivs[i].querySelectorAll("span");
console.log(answer);
spans[0].textContent = answer.reponseChoisie;
    spans[1].textContent = answer.correctAnswer;

  }
});
