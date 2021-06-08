
var firebaseConfig = {
      apiKey: "AIzaSyBe4XVko8pqL2KfH6qjAnhPLpun08XUoew",
      authDomain: "kwitter-f11e0.firebaseapp.com",
      databaseURL: "https://kwitter-f11e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-f11e0",
      storageBucket: "kwitter-f11e0.appspot.com",
      messagingSenderId: "929974149038",
      appId: "1:929974149038:web:4b3a920715f86c191cf23f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
