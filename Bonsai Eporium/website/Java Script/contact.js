var form = document.getElementById("form1");
var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var submitBtn = document.getElementById("sub");
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (name.value === "" || email.value === "" || phone.value === "") {
    alert("Please fill in all fields.");
  } else {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");
    }
     else if (!phoneRegex.test(phone.value)) {
      alert("Please enter a valid phone number.");
    }
    else {
        alert("Thanks for you submission. The form has been submitted successfully.");
        form.submit();
    }
  }
});