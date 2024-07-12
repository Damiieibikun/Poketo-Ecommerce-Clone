$(document).ready(function() {
    $(".error-message").hide();

    
    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    
    $("#LoginForm").on("submit", function(event) {
        event.preventDefault();
        $(".error-message").hide();

        
        var email = $("#email").val().trim();
        var password = $("#pass").val().trim();

        
        var isValid = true;

        
        if (email === "") {
            $("#Eerror").show();
            isValid = false;
        } else if (!validateEmail(email)) {

            $("#invalidEmailError").show();
            isValid = false;
        }

    
        if (password === "") {
            $("#passerror").show();
            isValid = false;
        }

        
        if (isValid) {
            // this.submit();
            let users = JSON.parse(localStorage.getItem ("users")) || []

            users.forEach((user)=>  {
                if (user.Email === email && user.password === password) {
                    localStorage.setItem ("current-user", email)

                    window.location.href = "index.html"
                }
            })

            }

        
    });
});
