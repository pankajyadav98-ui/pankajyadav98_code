const input = document.querySelector("input[type='text']");
const chatbox = document.getElementById("chatbox");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const userMsg = document.createElement("p");
    userMsg.textContent = input.value;
    userMsg.className = "user";
    chatbox.appendChild(userMsg);

    const botMsg = document.createElement("p");
    botMsg.textContent = "AI Bot: I'm still learning! 🤖";
    botMsg.className = "bot";
    chatbox.appendChild(botMsg);

    input.value = "";
  }
});
