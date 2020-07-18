// home page

// contact page
function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
       alert("name cannot be empty");
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
       alert( "Email cannot be empty");

      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
        alert("Email format invalid");
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      alert("Subject cannot be empty");
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
  alert("Message cannot be empty");
      return false;
  }
  alert("Sending...");
}
