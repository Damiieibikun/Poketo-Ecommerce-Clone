$(document).ready(function() {
    // Hide error messages initially
    $(".error-message").hide();

    // Function to validate email format
    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
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

        // Check if password is empty
        else if (password === "") {
            $("#passerror").show();
            isValid = false;
        }

        // If form is valid, submit the form
        else if (isValid) {
            // this.submit();
            alert('Registration successful')

            // if all is valid
            let users = JSON.parse (localStorage.getItem('Poketo-users')) || []
            let usersItems = JSON.parse(localStorage.getItem("CurrentUser-cartItems")) || [];

            let usersData = {
                firstName: $("#name").val(),
                lastName: $("#lastname").val(),
                Email: $("#email").val(),
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
        else{
            console.log('failed')
            isValid= false
        }
    });
});


