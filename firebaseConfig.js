const firebaseConfig = {
  apiKey: "AIzaSyDQCWqjke-i_noYmfcKZaNKccLCmacJZNo",
  authDomain: "arqam-chat-app.firebaseapp.com",
  projectId: "arqam-chat-app",
  storageBucket: "arqam-chat-app.appspot.com",
  messagingSenderId: "1045655258950",
  appId: "1:1045655258950:web:c5b4e211e9406d2b9dc747",
  measurementId: "G-SEEBJFVKEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDQCWqjke-i_noYmfcKZaNKccLCmacJZNo",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get Elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");

  //Add Login Event
  btnLogin.addEventListener("click", (e) => {
    const email = txtEmail.value;
    const password = txtPassword.value;

    const auth = firebase.auth();

    //sign in with firebase auth
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Login Successful :)");
      })
      .catch((err) => {
        alert(err.message);
      });
  });

  //Add Signup Event
  btnSignup.addEventListener("click", (e) => {
    //get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;

    const auth = firebase.auth();

    //sign in with firebase auth
    const promise = auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Signup Successful :)");
      })
      .catch((err) => {
        alert(err.message);
      });
  });
})();
