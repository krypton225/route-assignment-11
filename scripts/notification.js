const Notify = (function () {
    /**
     * Creates a new notification element and appends it to the body of the page.
     * @param {string} elementID - The ID of the new notification element.
     * @param {"success" | "danger" | "warning"} type - The type of notification to create.
     * @param {string} [text="Notify is working!"] - The text to display in the notification.
     * @throws {TypeError} If the type is not one of the allowed types.
     */
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

    /**
     * Shows the notification element with the given ID.
     * @param {string} notifyID - The ID of the notification element to show.
     */
    function show(notifyID) {
        document.getElementById(notifyID).classList.add("is-show");
    }

    /**
     * Hides the notification element with the given ID after a specified time.
     * @param {string} elementID - The ID of the notification element to hide.
     * @param {number} time - The time in milliseconds to wait before hiding the notification.
     */
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
