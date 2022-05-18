// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO89o6_5RQVDAQy7yfwrpfWbOCwqjLrcE",
    authDomain: "ynan-2d8f7.firebaseapp.com",
    projectId: "ynan-2d8f7",
    storageBucket: "ynan-2d8f7.appspot.com",
    messagingSenderId: "583393073957",
    appId: "1:583393073957:web:8a0750f45661be60b098cc",
    measurementId: "G-L4EBGPCJ1F"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }
  