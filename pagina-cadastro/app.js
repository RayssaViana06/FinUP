const form = document.querySelector("form")
const usernameInput = document.querySelector("#username")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#passwordConfirmation")
const url = "../pagina-login/login.html"



form.addEventListener("submit", (event) => {
  event.preventDefault();

  confereInputs();
  addItem();

});

function confereInputs(){


  if(usernameInput.value === ""){
    alert("Por favor preencha seu nome.")
    return false
  } 

  if(emailInput.value === ""){
    alert("Por favor preencha seu e-mail.")
    return false
  }
   if (checkEmail){function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
  );}

  }
 
  if(passwordInput.value === ""){
    alert("Por favor digite uma senha.")
  }
  else if(passwordInput.value.length < 7){
    alert("a senha prescisa ter mais que 7 caracteres.")
  }

  if(passwordConfirmation.value === ""){
    alert("Por favor confirme a senha.")
    return false
  }

  if(passwordConfirmation.value != passwordInput.value){
    alert ("Senhas diferentes!");
    

    
} else {
  
  alert("Cadastro Concluído !")

  openInNewTab(url);
  
  return true


}
 
} 

function openInNewTab(url){
  const win = window.open(url, "_blank")
}

function mostra(){
  var inputPass = document.getElementById("password")

  if(inputPass.type === "password"){
    inputPass.setAttribute('type','text')
  }

  else{
    inputPass.setAttribute('type','password')

  }

  
}




function revela(){
  var inputPass = document.getElementById("passwordConfirmation")

  if(inputPass.type === "password"){
    inputPass.setAttribute('type','text')
  }

  else{
    inputPass.setAttribute('type','password')

  }
}