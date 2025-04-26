const Navbar = (function () {
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
