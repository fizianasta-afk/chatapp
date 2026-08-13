const input = document.querySelector(".message-box input");

const messages = document.querySelector(".messages");

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const text = input.value.trim();

        if (text === "") {
            return;
        }

        const message = document.createElement("div");

        message.className = "message sent";

        message.innerHTML = `
            ${text}
            <small>
                Baru saja ✓
            </small>
        `;

        messages.appendChild(message);

        input.value = "";

        messages.scrollTop = messages.scrollHeight;
    }

});
