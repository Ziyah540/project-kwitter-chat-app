// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBfvW_6WWMhij_itT0Y00SkMaIu4Bv1i4",
    authDomain: "kwitter-c-93-f3743.firebaseapp.com",
    databaseURL: "https://kwitter-c-93-f3743-default-rtdb.firebaseio.com",
    projectId: "kwitter-c-93-f3743",
    storageBucket: "kwitter-c-93-f3743.appspot.com",
    messagingSenderId: "463264775379",
    appId: "1:463264775379:web:ffe5966a41bc56792b2826"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name +" !  ";

  function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

    
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
             Room_names = childKey;
            //Start code
      console.log("Room Name - " + Room_names );
      row="<div class='room_name' id="+room_name+" onclick='redirecToRoomName(this.id)'>#" + Room_names +" </div> <hr>";
      document.getElementById("output").innerHTML += row;

   });
  });
}
getData();


function redirecToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location="kwitter_room.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
