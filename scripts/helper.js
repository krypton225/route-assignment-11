const Helper = (function () {
    function clearAllInputs(...arr) {
        arr.forEach(input => {
            input.value = "";
        });
    }

    function redirectToPage(pageName) {
        setTimeout(() => {
            window.location.href = `${pageName}`;
        }, 4000);
    }

    return {
        clearFormWithInputs: clearAllInputs,
        goToPage: redirectToPage,
    };
})();
