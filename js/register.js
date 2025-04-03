$(document).ready(function() {
    // Hide error messages initially
    $(".error-message").hide();

    // Function to validate email format
    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Function to validate phone number format
function validatePhoneNumber(phone) {
    var re = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return re.test(phone);
}

    // Form submit event
    $("#RegisterForm").on("submit", function(event) {
        console.log('submit triggered')
        // Prevent form from submitting
        event.preventDefault();

        // Hide all error messages
        $(".error-message").hide();

        // Get input values
        var name = $("#name").val().trim();
        var lastname = $("#lastname").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var password = $("#pass").val().trim();

        // Validation flag
        var isValid = true;

        // Check if name is empty
        if (name === "") {
            $("#nameErr").show();
            isValid = false;
        }

        // Check if lastname is empty
        else if (lastname === "") {
            $("#lastnameErr").show();
            isValid = false;
        }

        // Check if email is empty
        else if (email === "") {
            $("#Eerror").show();
            isValid = false;
        } else if (!validateEmail(email)) {
            // Check if email format is valid
            $("#invalidEmailError").show();
            isValid = false;
        }
        // Check if phone is empty
        else if (phone === "") {
            $("#pherror").show();
            isValid = false;
        } else if (!validatePhoneNumber(phone)) {
            // Check if phone format is valid
            $("#invalidPhoneError").show();
            $("#PhoneOptions").show();
            isValid = false;
        }

        // Check if password is empty
        else if (password === "") {
            $("#passerror").show();
            isValid = false;
        }
        else if (password.length < 5) { 
            $("#passlengtherror").show();
            IsVaild = false;
            }

        // If form is valid, submit the form
        else {
            // this.submit();
            alert('Registration successful')

            // if all is valid
            let users = JSON.parse (localStorage.getItem('Poketo-users')) || []
            let usersItems = JSON.parse(localStorage.getItem("CurrentUser-cartItems")) || [];

            let usersData = {
                firstName: $("#name").val(),
                lastName: $("#lastname").val(),
                Email: $("#email").val(),
                Phone: $("#phone").val(),
                password: $("#pass").val() 
            }

            users.push (usersData)
            localStorage.setItem ("Poketo-users", JSON.stringify(users))

            let currentUserCart = {
                name:  usersData.firstName,
                cartItems : []
              }
              usersItems.push(currentUserCart)
              localStorage.setItem('CurrentUser-cartItems', JSON.stringify(usersItems))

            window.location.href = 'login.html'
        }
       
    });
});


