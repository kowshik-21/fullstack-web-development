const lbtn = document.getElementById('loginbtn');
        const einp = document.getElementById('emili');
        const pwinp = document.getElementById('paswi');

        lbtn.addEventListener('click', function() {
            const email = einp.value;
            const password = pwinp.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

            if (emailPattern.test(email) && passwordPattern.test(password)) {
                alert("Email: " + email + "\nPassword is valid.");
            } else {
                let message = "";
                if (!emailPattern.test(email)) {
                    message += "Invalid email address.\n";
                }
                if (!passwordPattern.test(password)) {
                    message += "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one digit.";
                }
                alert(message);
            }
        });