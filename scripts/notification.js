const Notify = (function () {
    function create(elementID, type, text = "Notify is working!") {
        const TYPES = ["success", "danger", "warning"];

        if (!TYPES.includes(type)) {
            throw new TypeError(`All types of notify are: ${JSON.stringify(TYPES)}.`);
        }

        const notifyContainer = document.createElement("div");
        notifyContainer.className = `notify is-${type}`;
        notifyContainer.id = `${elementID}`;

        const notifyContent = document.createElement("div");
        notifyContent.className = `notify__content`;

        const notifyIcon = document.createElement("span");
        notifyIcon.className = `notify__icon`;

        const notifyText = document.createElement("p");
        notifyText.className = `notify__text`;
        notifyText.textContent = `${text}`;

        notifyContent.insertAdjacentElement("afterbegin", notifyText);
        notifyContent.insertAdjacentElement("afterbegin", notifyIcon);
        notifyContainer.insertAdjacentElement("afterbegin", notifyContent);

        document.body.insertAdjacentElement("beforeend", notifyContainer);
    }

    function show(notifyID) {
        document.getElementById(notifyID).classList.add("is-show");
    }

    function hideAfter(elementID, time) {
        setTimeout(() => {
            document.getElementById(elementID).classList.remove("is-show");
        }, time);
    }

    return {
        create,
        show,
        hideAfter,
    };
})();
