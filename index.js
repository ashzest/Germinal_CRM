
    import { initializeApp } from 'firebase/app';
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJCnLvOdinxhl2y8eY-OtVeT-bJbSSP9g",
    authDomain: "germinal-672f4.firebaseapp.com",
    projectId: "germinal-672f4",
    storageBucket: "germinal-672f4.appspot.com",
    messagingSenderId: "137786932535",
    appId: "1:137786932535:web:e7261356286f2782592eb2",
    measurementId: "G-74F1WSHG7G"
  };

  

// Initiliaze variables
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = firebase.database()

// Register Function 
function register() {
  
  alert("hi");

  email=document.getElementById('email').value
  password=document.getElementById('password').value
  full_name=document.getElementById('full_name').value
  

// Validate input fields

if(validate_email(email)==false || validate_password(password)==false)
{
  alert("Email or password invalid");
  return;
}

//  Moving on with Authentication

auth.createUserWithEmailAndPassword(auth,email,password).
then(function(){


  var user=auth.currentUser;
  
  var database_ref=database.ref();

  var user_data = {
    email:email,
    full_name:full_name,
    last_login:Date.now()
  };

  // Push to firebase database 

  database_ref.child('users/' + user.uid).set(user_data);

  // User created

  alert("User created!");

})
.catch(function(error){
   
  var error_code=error.code;
  var error_message=error.message;

  alert(error_message);
})
}

// Validate Functions

function validate_email(email){

  expression=/^[^@]+@\w+(\.\w+)+\w$/

  if(expression.test(email)==true)
  {
    return true;
  }
  else {return false;}
}

function validate_password(password){
  
  // Firebase only accepts passwords that are greater than 6 characters

  if(password<6)
  return false;

  else {return true;}
}

function validate_field(full_name)
{
  if(full_name==null || full_name.length<=0)
  return false; 
  else {return true;}
} 



auth.signInWithEmailAndPassword()
.then(function(){
   
})
.catch(function(){
  // Catch errors

  var error_code=error.code
  var error_message=error.message

  alert(error_message)
})
  