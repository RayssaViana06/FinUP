const form = document.querySelector("form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const url = "./dashbord/dashbord.html"


form.addEventListener("submit", (event) => {
  event.preventDefault();

  confereLogin();

  
  
});

function confereLogin(){
if (email.value === ""){
    alert("Por favor preencha seu email")
    return false
    
  }


if(password.value === ""){
    alert("Por favor preencha sua senha")
    return false
}

else (email.value === usuario.email && password.value === usuario.senha);{

  alert("Login concluído")

  openInNewTab(url)

  return true
}
   
   

};

function openInNewTab(url){
  const win = window.open(url, "_blank")
};

function mostrarSenha(){
  var inputPass = document.getElementById("password")

  if(inputPass.type === "password"){
    inputPass.setAttribute('type','text')
  }

  else{
    inputPass.setAttribute('type','password')

  }
}