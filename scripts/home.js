const Home = (function () {
    const navbarUserName = document.querySelector("#navbar-username");
    const introUserName = document.querySelector("#intro-username");
    const logoutButton = document.querySelector("#logout-btn");

    document.addEventListener("DOMContentLoaded", loadPageHandler);
    logoutButton.addEventListener("click", logoutHandler);

    /**
     * Handles the event when the page is loaded.
     * The function retrieves the username from the local storage and updates the UI
     * @param {Event} event - The event which is triggered when the page is loaded
     * @returns {undefined}
     */
    function loadPageHandler(event) {
        getUserNameFromLocalStorage();
    }

    /**
     * Retrieves the username from the local storage and updates the UI
     * @returns {undefined}
     */
    function getUserNameFromLocalStorage() {
        const userName = localStorage.getItem("current-username");

        if (userName) {
            navbarUserName.textContent = `${userName}`;
            introUserName.textContent = `${userName}`;
        } else {
            navbarUserName.textContent = `Our user`;
            introUserName.textContent = `Our user`;
        }
    }

    /**
     * Handles the event when the logout button is clicked.
     * The function redirects the user to the login page with a delay of 250ms
     * @param {Event} event - The event which is triggered when the logout button is clicked
     * @returns {undefined}
     */
    function logoutHandler(event) {
        Helper.goToPage("login.html", 250);
    }
})();

Navbar.init("navbar-toggler", "navbar-content-end");
