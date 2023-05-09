
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyATS6lqIzhxlOXYdMy75_ecJxbkeGlUsmE",
  authDomain: "kwitter-b8004.firebaseapp.com",
  databaseURL: "https://kwitter-b8004-default-rtdb.firebaseio.com",
  projectId: "kwitter-b8004",
  storageBucket: "kwitter-b8004.appspot.com",
  messagingSenderId: "1057105292379",
  appId: "1:1057105292379:web:30f09934eb27d04d2ee37e"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);

  
  //troca de site
  window.location = "kwitterRoom.html";
}

