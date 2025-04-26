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

    function isValidEmailHandler() {
        const REG_RESULT = Validation.email(userEmail.value);

        if (!REG_RESULT) {
            Notify.show(NOTIFY_ID_DANGER_EMAIL_VALIDATION);
            Notify.hideAfter(NOTIFY_ID_DANGER_EMAIL_VALIDATION, 3000);

            return;
        }
    }

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

    function setUserNameIntoLocalStorage(userName) {
        localStorage.setItem("current-username", userName);
    }

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
