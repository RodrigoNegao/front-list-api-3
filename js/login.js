//
// Script do Login
//
link = "https://backlistapi3.herokuapp.com"; //"http://localhost:3000"


// if (!localStorage.getItem("user")) {
//   user = new Object(); // Cria objetos{} se não existir
// } else {
//   var recadosLocalStorage = localStorage.getItem("user");
//   recados = JSON.parse(userLocalStorage); // Retorna se ja existe
// }

//alert não é resevado mas da conflito com comando alert
var alert1 = document.getElementById("alert");
alert1.style.display = "none";

// verificar login e senha
function login() {
  let user_name = document.getElementById("user");
  let password = document.getElementById("password");
  axios
    .post(link + "/login", {
      user: user_name.value,
      password: password.value
    })
    .then((response) => {
        //console.log(response.data.id);
        localStorage.setItem("user", JSON.stringify(response.data.id));
        // setTimeout(() => {
        //   location.href = './pages/lista_de_recados.html';
        // }, 5000);
        location.href = './pages/lista_de_recados.html';
    })
    .catch((error) => {
      console.log(error.response.data.msg);
    });  
}
