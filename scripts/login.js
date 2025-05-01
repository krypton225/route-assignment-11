const Login = (function () {
    const userEmail = document.querySelector("#user-email");
    const userPassword = document.querySelector("#user-password");

    const submitButton = document.querySelector("#submit-btn");

    let usersArr = [];

    const NOTIFY_ID_SUCCESS = `notify${Math.floor(Math.random() * 1000000000)}`;
    const NOTIFY_ID_DANGER_SOMETHING_WRONG = `notify${Math.floor(Math.random() * 1000000000)}`;
    const NOTIFY_ID_DANGER_MUST_ENTER_INPUTS = `notify${Math.floor(Math.random() * 1000000000)}`;
    const NOTIFY_ID_DANGER_EMAIL_VALIDATION = `notify${Math.floor(Math.random() * 1000000000)}`;

    document.addEventListener("DOMContentLoaded", loadPageHandler);

    submitButton.addEventListener("click", submitFormHandler);

    /**
     * Handles the loading of the page.
     * @param {Event} event - The event object that is triggered on the page load.
     * @listens DOMContentLoaded
     * @todo Add a better description of what this function does.
     */
    function loadPageHandler(event) {
        Notify.create(NOTIFY_ID_SUCCESS, "success", "Account has been logged in successfully!");
        Notify.create(NOTIFY_ID_DANGER_SOMETHING_WRONG, "danger", "Something is wrong. Try again later!");
        Notify.create(NOTIFY_ID_DANGER_MUST_ENTER_INPUTS, "danger", "You must enter email and password");
        Notify.create(NOTIFY_ID_DANGER_EMAIL_VALIDATION, "danger", "You must enter a valid email");

        const usersLocalStorage = localStorage.getItem("users");

        if (usersLocalStorage) {
            usersArr = JSON.parse(localStorage.getItem("users"));
        }
    }

    /**
     * Handles the validation of the email input.
     * @returns {void}
     */
    function isValidEmailHandler() {
        const REG_RESULT = Validation.email(userEmail.value);

        if (!REG_RESULT) {
            Notify.show(NOTIFY_ID_DANGER_EMAIL_VALIDATION);
            Notify.hideAfter(NOTIFY_ID_DANGER_EMAIL_VALIDATION, 3000);

            return;
        }
    }

    /**
     * Checks if the given user is in the local storage.
     * If the user is found, it sets the current username into the local storage.
     * @param {Object} user - An object with email and password properties.
     * @returns {Boolean} True if the user is found in the local storage, false otherwise.
     */
    function isInLocalStorage(user) {
        return usersArr.find(userObject => {
            const isEmailMatched = userObject.email === user.email;
            const isPasswordMatched = userObject.password === user.password;

            if (isEmailMatched && isPasswordMatched) {
                setUserNameIntoLocalStorage(userObject.userName);

                return true;
            } else {
                return false;
            }
        });
    }

    /**
     * Sets the current username into the local storage.
     * @param {string} userName - The username that is going to be set into the local storage.
     * @returns {undefined}
     */
    function setUserNameIntoLocalStorage(userName) {
        localStorage.setItem("current-username", userName);
    }

    /**
     * Handles the submission of the form.
     * If the user enters nothing, it shows a notification to enter the inputs.
     * If the user enters an invalid email, it shows a notification to enter a valid email.
     * If the user is found in the local storage, it shows a success notification and redirects the user to the home page.
     * If the user is not found in the local storage, it shows an error notification.
     * @param {Event} event - The event object that is triggered when the form is submitted.
     * @listens submit
     * @returns {undefined}
     */
    function submitFormHandler(event) {
        if (userEmail.value === "" || userPassword.value === "") {
            Notify.show(NOTIFY_ID_DANGER_MUST_ENTER_INPUTS);
            Notify.hideAfter(NOTIFY_ID_DANGER_MUST_ENTER_INPUTS, 3000);

            return;
        }

        isValidEmailHandler();

        const user = {
            email: userEmail.value,
            password: userPassword.value,
        };

        const userInLocalStorage = isInLocalStorage(user);

        if (userInLocalStorage) {
            Notify.show(NOTIFY_ID_SUCCESS);

            Notify.hideAfter(NOTIFY_ID_SUCCESS, 3000);

            Helper.clearFormWithInputs(userEmail, userPassword);

            Helper.goToPage("home.html");
        } else {
            Notify.show(NOTIFY_ID_DANGER_SOMETHING_WRONG);

            Notify.hideAfter(NOTIFY_ID_DANGER_SOMETHING_WRONG, 3000);
        }
    }
})();
