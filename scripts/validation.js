const Validation = (function () {
    function validateText(text = "") {
        const REG_PATTERN = /^[a-zA-Z]{5,}$/;

        const isValid = REG_PATTERN.test(text.trim());

        return isValid;
    }

    function validateEmail(email = "") {
        const REG_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const isValid = REG_PATTERN.test(email.trim());

        return isValid;
    }

    function validatePassword(password = "") {
        const REG_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

        const isValid = REG_PATTERN.test(password.trim());

        return isValid;
    }

    function isIdentical(value1, value2) {
        return value1 === value2;
    }

    return {
        text: validateText,
        email: validateEmail,
        password: validatePassword,
        identical: isIdentical,
    };
})();