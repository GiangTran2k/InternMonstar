var myInput = document.getElementById("psw");
var cf = document.getElementById("confirm_password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  //validate repeat
  if ( cf.value == myInput.value) {
    document.getElementById("register_btn").disabled = false;
    document.getElementById("register_btn").style.backgroundColor = '#04AA6D';
    
  } else {
    document.getElementById("register_btn").disabled = true;
    document.getElementById("register_btn").style.backgroundColor = '#b9b9b9';
  }

}



// validate repeat
cf.onkeyup = function(){

  if ( myInput.value == cf.value) {
    document.getElementById("register_btn").disabled = false;
    document.getElementById("register_btn").style.backgroundColor = '#04AA6D';
    
  } else {
    document.getElementById("register_btn").disabled = true;
    document.getElementById("register_btn").style.backgroundColor = '#b9b9b9';
  }
}


// validate email
// When the user clicks on the password field, show the message box
var myEmail =  document.getElementById("email");
myEmail.onfocus = function() {
  document.getElementById("result").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myEmail.onblur = function() {
  document.getElementById("result").style.display = "none";
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

$("#email").on("input", validate);


// popup
function registerAccess(){

  document.getElementById("popup").style.display="block";
  setTimeout(function(){ document.getElementById("popup").style.display="none"; }, 3000);
}