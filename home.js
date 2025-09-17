let button=document.getElementById("StartQuiz");

button.addEventListener('click' ,()=>{
  let ChoixTheme=document.getElementById("ChoixTheme");
  let input_name=document.getElementById("input_name");
  let Error=document.getElementById("Error");
  let Error1=document.getElementById("Error1");
  if(input_name.value.trim()=='' || ChoixTheme.value==="Theme"){
    if (ChoixTheme.value==="Theme") {
      Error1.textContent="Choisir un theme";
    }
    Error.textContent="Entrer le nom d'utilisateur";
    input_name.style.borderBlockColor="red";
  } else {
    window.location.href = 'index.html';
  }
})