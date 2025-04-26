const Helper = (function () {
    function clearAllInputs(...arr) {
        arr.forEach(input => {
            input.value = "";
        });
    }

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
