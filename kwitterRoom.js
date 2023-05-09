
//ADICIONE SEU LINK DO FIREBASE
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

function addSala(){
  var roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  database.ref("/").child(roomName).update({
    proposito:"adicionar sala"
  })
  window.location = 'kwitterPage.html';
}

var campo ='';

function lerDados(){
  database.ref("/").on("value",(data)=>{
    campo ='';
    data.forEach((subpasta)=>{
      sala = subpasta.key;
      linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
      campo +=linha;
    });
    document.getElementById("output").innerHTML = campo;
  })
}
lerDados()

function irSala(sala){

  localStorage.setItem("roomName",sala);
  window.location = 'kwitterPage.html';
}

//apaga o nome do usuário
function logout() { 
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
//exibe o nome do usuário no site kwitterRoom.js
function carregar(){
  var nome = localStorage.getItem("userName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}