const Validation = (function () {
    /**
     * Validates the given text.
     * The text must be a string of at least 5 characters and only contain letters.
     * @param {string} text - The text to be validated.
     * @returns {boolean} True if the validation is successful. False otherwise.
     */
    function validateText(text = "") {
        const REG_PATTERN = /^[a-zA-Z]{5,}$/;

        const isValid = REG_PATTERN.test(text.trim());

        return isValid;
    }

    /**
     * Validates the given username.
     * The username must be a string that starts with a letter and has at least 3 characters.
     * The username can only contain letters, numbers and underscores.
     * @param {string} text - The text to be validated.
     * @returns {boolean} True if the validation is successful. False otherwise.
     */
    function validateUserName(text = "") {
        const REG_PATTERN = /^[a-z][a-z0-9_]{2,}$/;

        const isValid = REG_PATTERN.test(text);

        return isValid;
    }

    /**
     * Validates the given email address.
     * The email must follow the standard email format, which includes
     * a local part, an "@" symbol, a domain part, and a top-level domain.
     * @param {string} email - The email address to be validated.
     * @returns {boolean} True if the email format is valid. False otherwise.
     */
    function validateEmail(email = "") {
        const REG_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const isValid = REG_PATTERN.test(email.trim());

        return isValid;
    }

    /**
     * Validates the given password.
     * The password must be at least 8 characters long and include at least one
     * uppercase letter, one lowercase letter, one digit, and one special character.
     * @param {string} password - The password to be validated.
     * @returns {boolean} True if the password meets the criteria. False otherwise.
     */
    function validatePassword(password = "") {
        const REG_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

        const isValid = REG_PATTERN.test(password.trim());

        return isValid;
    }

    /**
     * Checks if two values are identical.
     * @param {*} value1 - The first value to compare.
     * @param {*} value2 - The second value to compare.
     * @returns {boolean} True if the values are identical. False otherwise.
     */
    function isIdentical(value1, value2) {
        return value1 === value2;
    }

    return {
        text: validateText,
        userName: validateUserName,
        email: validateEmail,
        password: validatePassword,
        identical: isIdentical,
    };
})();