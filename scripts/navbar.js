const Navbar = (function () {
    /**
     * Initializes the navbar toggler functionality.
     * Sets up an event listener on the specified button to toggle the
     * visibility of the specified element.
     *
     * @param {string} buttonID - The ID of the button element that triggers the toggle.
     * @param {string} elementID - The ID of the content element to be shown or hidden.
     */

    function init(buttonID, elementID) {
        const togglerButton = document.querySelector(`#${buttonID}`);
        const elementContent = document.querySelector(`#${elementID}`);

        togglerButton.addEventListener("click", navbarTogglerHandler);

        function navbarTogglerHandler(event) {
            elementContent.classList.toggle("is-show");
        }
    }

    return {
        init,
    };
})();
