//
// Script Cadastro
//

const link = "https://backlistapi3.herokuapp.com"

//alert não é resevado mas da conflito com comando alert
var alert1 = document.getElementById("alert");
alert1.style.display = "none";


// verificar login e senha
function addUser() {
  let user_name = document.getElementById("name");
  let password1 = document.getElementById("password1");
  let password2 = document.getElementById("password2"); 

  function passwordCheck(user, p1, p2) {
    if (p1 === p2) {
      axios
        .post(link + "/signin", {
          name: user,
          password: p2
        })
        .then((response) => {
          console.log(response.data.msg);
          alert1.style.display = "block"; //criar alerta bootstrap
          alert1.getElementsByTagName("p")[0].innerHTML = response.data.msg;
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });  
      //Cadastro feito com sucesso Alert Bootstrap
    } else {
      alert1.style.display = "block"; //criar alerta bootstrap
      alert1.getElementsByTagName("p")[0].innerHTML = "Senhas não conferem.";
      password1.value = "";
      password2.value = "";
      password1.focus();
      password1.select();
    }
  }

  //userCheck(user_name.value);
  passwordCheck(user_name.value, password1.value, password2.value);
}
