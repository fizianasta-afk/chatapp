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
