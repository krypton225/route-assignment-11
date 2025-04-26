const Register = (function () {
    const userEmail = document.querySelector("#user-email");
    const userPassword = document.querySelector("#user-password");
    const userName = document.querySelector("#user-name");

    const emailValidationText = document.querySelector("#email-validation");
    const passwordValidationText = document.querySelector("#password-validation");
    const usernameValidationText = document.querySelector("#username-validation");

    const submitButton = document.querySelector("#submit-btn");

    let usersArr = [];

    const NOTIFY_ID = `notify${Math.floor(Math.random() * 1000000000)}`;

    document.addEventListener("DOMContentLoaded", loadPageHandler);

    userName.addEventListener("input", isValidUsernameHandler);
    userEmail.addEventListener("input", isValidEmailHandler);
    userPassword.addEventListener("input", isValidPasswordHandler);

    submitButton.addEventListener("click", submitFormHandler);

    function loadPageHandler(event) {
        submitButton.disabled = true;

        const usersLocalStorage = localStorage.getItem("users");

        if (usersLocalStorage) {
            usersArr = JSON.parse(localStorage.getItem("users"));
        }

        Notify.create(NOTIFY_ID, "success", "Account has been registered successfully!");
    }

    function isValidUsernameHandler(event) {
        const REG_RESULT = Validation.userName(userName.value);

        if (REG_RESULT) {
            usernameValidationText.classList.remove("is-show");
        } else {
            usernameValidationText.classList.add("is-show");
        }

        validateAllInputs();
    }

    function isValidEmailHandler(event) {
        const REG_RESULT = Validation.email(userEmail.value);

        if (!REG_RESULT) {
            emailValidationText.classList.add("is-show");
        } else {
            emailValidationText.classList.remove("is-show");
        }

        validateAllInputs();
    }

    function isValidPasswordHandler(event) {
        const REG_RESULT = Validation.password(userPassword.value);

        if (!REG_RESULT) {
            passwordValidationText.classList.add("is-show");
        } else {
            passwordValidationText.classList.remove("is-show");
        }

        validateAllInputs();
    }

    function validateAllInputs(event) {
        const isUserNameValid = Validation.userName(userName.value);
        const isEmailValid = Validation.email(userEmail.value);
        const isPasswordValid = Validation.password(userPassword.value);

        if (isUserNameValid && isEmailValid && isPasswordValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    function submitFormHandler(event) {
        const user = {
            userName: userName.value,
            email: userEmail.value,
            password: userPassword.value,
        };

        updateLocalStorage(user);

        Helper.clearFormWithInputs(userName, userEmail, userPassword);

        Notify.show(NOTIFY_ID);

        Notify.hideAfter(NOTIFY_ID, 3000);

        Helper.goToPage("login.html");
    }

    function updateLocalStorage(user) {
        if (typeof user !== "object") {
            throw new Error("The parameter of addToLocalStorage() must be an object type");
        }

        usersArr.push(user);

        localStorage.setItem("users", JSON.stringify(usersArr));
    }
})();
