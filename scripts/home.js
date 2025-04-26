const Home = (function () {
    const navbarUserName = document.querySelector("#navbar-username");
    const introUserName = document.querySelector("#intro-username");
    const logoutButton = document.querySelector("#logout-btn");

    document.addEventListener("DOMContentLoaded", loadPageHandler);
    logoutButton.addEventListener("click", logoutHandler);

    function loadPageHandler(event) {
        getUserNameFromLocalStorage();
    }

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

    function logoutHandler(event) {
        Helper.goToPage("login.html", 250);
    }
})();

Navbar.init("navbar-toggler", "navbar-content-end");
