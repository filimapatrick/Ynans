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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementsByClassName('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    // var name = getInputVal('name');
    // var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage( email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementsByClassName('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage( email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    //   name: name,
    //   company:company,
      email:email,
      phone:phone,
      message:message
    });
  }
  