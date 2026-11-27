// Wait until HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {
    let day = document.getElementById("day");

    if (day) {
        for (let i = 1; i <= 31; i++) {
            let option = document.createElement("option");
            option.text = i;
            option.value = i;

            if (i === 18) {
                option.selected = true;
            }
            day.appendChild(option);
        }
    }

    let year = document.getElementById("year");
    if (year) {
        let currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 100; i--) {
            let option = document.createElement("option");
            option.text = i;
            option.value = i;
            if (i === 2004) {
                option.selected = true;
            }
            year.appendChild(option);
        }
    }
    let signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let firstName = document.getElementById("firstName").value.trim();

            let surname = document.getElementById("surname").value.trim();

            let email = document.getElementById("signupEmail").value.trim();

            let password = document.getElementById("signupPassword").value;

            let gender = document.querySelector('input[name="gender"]:checked');

            let dayValue = document.getElementById("day").value;

            let monthValue = document.getElementById("month").value;

            let yearValue = document.getElementById("year").value;

            if (firstName === "" || surname === "" || email === "" ||
                password === "" || !gender || dayValue === "" ||
                monthValue === "" || yearValue === "") {

                alert("Please fill all details!");
                return;
            }

            let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            let validMobile = /^[0-9]{10}$/.test(email);

            if (!validEmail && !validMobile) {

                alert("Enter valid email or 10 digit mobile number!");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters!");
                return;
            }

            let accounts = JSON.parse(
                localStorage.getItem("accounts") || "[]"
            );

            let found = accounts.find(function (user) {
                return user.email.toLowerCase() === email.toLowerCase();

            });

            if (found) {
                alert("Account already exists!");
                return;
            }

            let newUser = {
                firstName: firstName,
                surname: surname,
                email: email,
                password: password,
                gender: gender.value,
                dob: dayValue + "/" + monthValue + "/" + yearValue

            };

            accounts.push(newUser);

            localStorage.setItem(
                "accounts",
                JSON.stringify(accounts)
            );
            alert("Sign Up Successful!");
            window.location.href = "LoginPage.html";

        });
    }

    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("loginEmail").value.trim();

            let password = document.getElementById("loginPassword").value;


            if (email === "" || password === "") {
                alert("Please enter email and password!");
                return;
            }

            let accounts = JSON.parse(
                localStorage.getItem("accounts") || "[]"
            );

            let user = accounts.find(function (user) {

                return user.email.toLowerCase() === email.toLowerCase();
            });

            if (user && user.password === password) {
                sessionStorage.setItem(
                    "loginUser",
                    JSON.stringify(user)
                );
                alert("Login Successful!");
                window.location.href = "Home.html";
            }
            else {
                alert("Wrong Email or Password!");
            }
        });
    }

let resetForm = document.getElementById("resetForm");

if (resetForm) {
    resetForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("resetContact").value.trim();

        let newPassword = document.getElementById("newPassword").value;

        let confirmPassword = document.getElementById("confirmPassword").value;


        if (email === "" || newPassword === "" || confirmPassword === "") {
            alert("Please fill all details!");
            return;
        }

        if (newPassword.length < 8) {
            alert("Password must be at least 8 characters!");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New Password and Confirm Password do not match!");
            return;
        }

        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        let userIndex = accounts.findIndex(function(user) {
            return user.email && user.email.toLowerCase() === email.toLowerCase();
        });

        if (userIndex === -1) {
            alert("Account not found! Please check your Email or Mobile Number.");
            return;
        }
        accounts[userIndex].password = newPassword;

        localStorage.setItem("accounts", JSON.stringify(accounts));
        alert("Password Reset Successful! You can now login with your new password.");
        window.location.href = "./LoginPage.html";

    });

}

    let welcomeUser = document.getElementById("welcomeUser");
    if (welcomeUser) {
        let userData = sessionStorage.getItem("loginUser");

        if (userData === null) {
            window.location.href = "LoginPage.html";
        }
        else {
            let user = JSON.parse(userData);
            welcomeUser.textContent =
                "Welcome " + user.firstName + " " + user.surname;
        }
    }

    let logout = document.getElementById("logout");
    if (logout) {
        logout.addEventListener("click", function () {
            sessionStorage.removeItem("loginUser");
            alert("Logout Successful!");
            window.location.href = "LoginPage.html";
        });
    }

    let forgot = document.getElementById("forgot");
    if (forgot) {
        forgot.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "ResetPassword.html";

        });
    }
});
