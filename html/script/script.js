$(document).ready(function(){
  $('.nav li.disabled a').click(function(){
    return false;
  });
});
var validated = true;

$(".btnSubmit").click(function () {
    var firstName = $("#first-name").val()
    var lastName = $("#last-name").val()
    var password = $("#password").val()
    var password2 = $("#password-confirm").val()
    var country = $("#country").val()


    if (firstName == "" || firstName.length <= 1) {
        $("#first-name-check").val("Please enter valid name")
        $("#first-name").css("border", "solid red")
        validated = false
    }
    else {
        $("#first-name-check").val(" ")
        $("#first-name").css("border", "solid green")
    }

    if (lastName == "" || lastName.length <= 1) {
        $("#last-name-check").val("Please enter valid last name")
        $("#last-name").css("border", "solid red")
        validated = false
    }
    else {
        $("#last-name-check").val(" ")
        $("#last-name").css("border", "solid green")
    }

    if (password == "" || password.length <= 7) {
        $("#password-check").val("Password should contain 8 symbols")
        $("#password").css("border", "solid red")
        validated = false
    }
    else {
        $("#password-check").val(" ")
        $("#password").css("border", "solid green")

    }

    if (password2 == "" || password != password2) {
        $("#password-confirm-check").val("Passwords do not match")
        $("#password-confirm").css("border", "solid red")
        validated = false
    }
    else {
        $("#password-confirm-check").val(" ")
        $("#password-confirm").css("border", "solid green")
    }

    if (country == "" || country.length <= 1) {
        $("#country-check").val("Please enter valid country name")
        $("#country").css("border", "solid red")
        validated = false
    }
    else {
        $("#country-check").val(" ")
        $("#country").css("border", "solid green")
    }
    if (!$("#reg-checkbox").is(':checked')) {
        $("#checkbox-check").val("Please agree with terms and conditions")
        $("#reg-checkbox").css("color", "red")
        validated = false
    }
    else {
        $("#checkbox-check").val(" ")
        $("#reg-checkbox").css("border", "none")
    }

    if (validated) {
        alert("Registration success")
    }
});

$(document).ready(function() {
    $(".fancybox").fancybox();
});
	
	

