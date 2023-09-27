const formCadastro = document.getElementById("formCadastro");
const nomeusuario = document.getElementById("nomeusuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmarsenha = document.getElementById("confirmarsenha");


formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


nomeusuario.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputnomeusuario(){
  const nomeusuarioValue = nomeusuario.value;

  if(nomeusuarioValue === ""){
    errorInput(nomeusuario, "Preencha um username!")
  }else{
    const formItem = nomeusuario.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputsenha(){
  const senhaValue = senha.value;

  if(senhaValue === ""){
    errorInput(senha, "A senha é obrigatória.")
  }else if(senhaValue.length < 8){
    errorInput(senha, "A senha precisa ter no mínimo 8 caracteres.")
  }else{
    const formItem = senha.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputconfirmarsenha(){
  const senhaValue = senha.value;
  const confirmarsenhaValue = confirmarsenha.value;

  if(confirmarsenhaValue === ""){
    errorInput(confirmarsenha, "A confirmação de senha é obrigatória.")
  }else if(confirmarsenhaValue !== senhaValue){
    errorInput(confirmarsenha, "As senhas não são iguais.")
  }else{
    const formItem = confirmarsenha.parentElement;
    formItem.className = "form-content"
  }


}


function checkForm(){
  checkInputnomeusuario();
  checkInputEmail();
  checkInputsenha();
  checkInputconfirmarsenha();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}