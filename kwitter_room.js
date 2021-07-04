var firebaseConfig = {
      apiKey: "AIzaSyAVuAJHtufpB7Y23JfC_pZfWzdj9FhLzMo",
      authDomain: "doctor-and-patient2.firebaseapp.com",
      databaseURL: "https://doctor-and-patient2-default-rtdb.firebaseio.com",
      projectId: "doctor-and-patient2",
      storageBucket: "doctor-and-patient2.appspot.com",
      messagingSenderId: "745014693629",
      appId: "1:745014693629:web:185526f5a6afd0ad69f894",
      measurementId: "G-FPTX8EL1KG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

        purpose: "adding roomname"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location.replace("index.html");
}