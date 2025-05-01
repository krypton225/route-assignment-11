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

    /**
     * Handles the event when the page is loaded.
     * The function retrieves the list of users from the local storage and
     * enables the submit button only if there are no users in the local storage.
     * If there are users in the local storage, it sets the submit button to be
     * disabled.
     * @param {Event} event - The event which is triggered when the page is loaded
     * @returns {undefined}
     */
    function loadPageHandler(event) {
        submitButton.disabled = true;

        const usersLocalStorage = localStorage.getItem("users");

        if (usersLocalStorage) {
            usersArr = JSON.parse(localStorage.getItem("users"));
        }

        Notify.create(NOTIFY_ID, "success", "Account has been registered successfully!");
    }

    /**
     * Handles the event when the user enters a username.
     * The function validates the username that the user enters and
     * shows or hides the validation text accordingly.
     * It also calls the validateAllInputs function to check if
     * all the inputs are valid and enables or disables the submit
     * button accordingly.
     * @param {Event} event - The event which is triggered when the user enters a username
     * @returns {undefined}
     */
    function isValidUsernameHandler(event) {
        const REG_RESULT = Validation.userName(userName.value);

        if (REG_RESULT) {
            usernameValidationText.classList.remove("is-show");
        } else {
            usernameValidationText.classList.add("is-show");
        }

        validateAllInputs();
    }

    /**
     * Handles the event when the user enters an email.
     * The function validates the email that the user enters and
     * shows or hides the validation text accordingly.
     * It also calls the validateAllInputs function to check if
     * all the inputs are valid and enables or disables the submit
     * button accordingly.
     * @param {Event} event - The event which is triggered when the user enters an email
     * @returns {undefined}
     */
    function isValidEmailHandler(event) {
        const REG_RESULT = Validation.email(userEmail.value);

        if (!REG_RESULT) {
            emailValidationText.classList.add("is-show");
        } else {
            emailValidationText.classList.remove("is-show");
        }

        validateAllInputs();
    }

    /**
     * Handles the event when the user enters a password.
     * The function validates the password that the user enters and
     * shows or hides the validation text accordingly.
     * It also calls the validateAllInputs function to check if
     * all the inputs are valid and enables or disables the submit
     * button accordingly.
     * @param {Event} event - The event which is triggered when the user enters a password
     * @returns {undefined}
     */
    function isValidPasswordHandler(event) {
        const REG_RESULT = Validation.password(userPassword.value);

        if (!REG_RESULT) {
            passwordValidationText.classList.add("is-show");
        } else {
            passwordValidationText.classList.remove("is-show");
        }

        validateAllInputs();
    }

    /**
     * Validates all the inputs and enables or disables the submit button accordingly.
     * @param {Event} [event] - The event which is triggered when the user enters an input
     * @returns {undefined}
     */
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

    /**
     * Handles the submission of the registration form.
     * Captures the user input, updates the local storage with the new user,
     * clears the form inputs, displays a success notification, and redirects
     * to the login page.
     * @param {Event} event - The event object that is triggered when the form is submitted.
     * @returns {undefined}
     */

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

    /**
     * Updates the local storage with the new user.
     * @param {Object} user - An object with userName, email, and password properties.
     * @throws {Error} If the parameter is not an object type.
     * @returns {undefined}
     */
    function updateLocalStorage(user) {
        if (typeof user !== "object") {
            throw new Error("The parameter of addToLocalStorage() must be an object type");
        }

        usersArr.push(user);

        localStorage.setItem("users", JSON.stringify(usersArr));
    }
})();
