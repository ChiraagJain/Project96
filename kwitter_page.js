const firebaseConfig = {
      apiKey: "AIzaSyAEDfojxFMWLyBMgfUvvmq5c-yIlipUxO0",
      authDomain: "kwitter-7bb4d.firebaseapp.com",
      databaseURL: "https://kwitter-7bb4d-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bb4d",
      storageBucket: "kwitter-7bb4d.appspot.com",
      messagingSenderId: "767157351939",
      appId: "1:767157351939:web:1deaa9d7c38c4879c50036"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "" ;
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//start code
console.log(firebase_message_id);
console.log(message_data );

name = message_data ['name'];

//End code
      } });  }); }
getData();
