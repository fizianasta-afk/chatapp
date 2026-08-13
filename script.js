const input = document.querySelector(".message-box input");
const messages = document.querySelector(".messages");
const sendButton = document.getElementById("sendButton");

function sendMessage() {

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const message = document.createElement("div");

    message.className = "message sent";

    message.textContent = text;

    const time = document.createElement("small");

    time.textContent = "Baru saja ✓";

    message.appendChild(time);

    messages.appendChild(message);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}

sendButton.onclick = sendMessage;

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
const emojiButton = document.getElementById("emojiButton");
const emojiPicker = document.getElementById("emojiPicker");

emojiButton.addEventListener("click", function () {

    if (emojiPicker.style.display === "block") {

        emojiPicker.style.display = "none";

    } else {

        emojiPicker.style.display = "block";

    }

});
emojiPicker.addEventListener("click", function(event) {

    const emoji = event.target.textContent.trim();

    if (emoji !== "") {

        input.value += emoji;

        input.focus();

    }

});
const fileButton = document.getElementById("fileButton");
const fileInput = document.getElementById("fileInput");

fileButton.addEventListener("click", function () {
    fileInput.click();
});
fileInput.addEventListener("change", function () {

    const file = fileInput.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        const message = document.createElement("div");

        message.className = "message sent";

        message.innerHTML = `
            <img
                src="${event.target.result}"
                class="chat-image">

            <small>
                Baru saja ✓
            </small>
        `;

        messages.appendChild(message);

        messages.scrollTop = messages.scrollHeight;
    };

    reader.readAsDataURL(file);

});
