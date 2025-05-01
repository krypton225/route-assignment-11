const Helper = (function () {
    /**
     * Clears the value of all input elements passed as arguments.
     * @param {...HTMLInputElement} arr - A rest parameter that accepts multiple input elements.
     */

    function clearAllInputs(...arr) {
        arr.forEach(input => {
            input.value = "";
        });
    }

    /**
     * Redirects to a specified page after a given amount of time.
     * @param {string} pageName - The name of the page to redirect to.
     * @param {number} [time=4000] - The amount of time to wait before redirecting in ms.
     */
    function redirectToPage(pageName, time = 4000) {
        setTimeout(() => {
            window.location.href = `${pageName}`;
        }, time);
    }

    return {
        clearFormWithInputs: clearAllInputs,
        goToPage: redirectToPage,
    };
})();
