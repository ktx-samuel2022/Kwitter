//LINKS FIREBASE
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
//FACILITAR A SUA VIDA
var db = firebase.database();
var nomeSala = localStorage.getItem("roomName");
var nomeUsuário = localStorage.getItem("userName");

db.ref(nomeSala).on("value",(data)=>{
document.getElementById("output").innerHTML = '';
data.forEach((dados)=>{
  if(dados.key !== 'proposito'){
var id = dados.key;
var valores = dados.val();
var msg = valores['msg'];
var nome = valores['nome'];
var likes = valores['like'];

var nomehtml = "<h3>"+nome+"</h3>";
var msghtml = "<h3>"+msg+"</h3>";
var botaohtml = "<button class ='btn btn-primary' onclick = 'attLike(this.id)' id ="+id+" value = "+likes+">";
var likehtml = "<span class= 'glyphicon glyphicon-thumbs-up'></span>"+likes+"</button>";
var row = nomehtml + msghtml + botaohtml + likehtml;
document.getElementById("output").innerHTML += row;

  }
})
});
function send(){

  var msg = document.getElementById("msg").value ;
 if(msg!= ''){
  db.ref(nomeSala).push({
    like:0, msg:msg, nome:nomeUsuário
  })
  document.getElementById("msg").value = '';

 }
}


function attLike(id){
var LIKES = document.getElementById(id).value ;
LIKES = Number(LIKES) + 1;
db.ref(nomeSala).child(id).update({
  like:LIKES
})

}
function logout(){

  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = 'index.html';
}
