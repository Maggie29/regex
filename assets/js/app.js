var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
var messageError = document.getElementById("message-error");

document.getElementById("send").addEventListener("click", function(){
  if(password.value !== confirmPassword.value){
messageError.innerHTML = "Las contraseñas deben coincidir";
  }

})
