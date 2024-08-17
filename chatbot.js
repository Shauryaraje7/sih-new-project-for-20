function initializeChat() {
    const initialMessage = "Hello! I'm your Farmers' Assistant. How can I help you today? You can describe any plant symptoms, and I'll assist you with a diagnosis and solution.";
    appendMessage(initialMessage, "bot");
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        appendMessage(userInput, "user");
        getBotResponse(userInput);
        document.getElementById("user-input").value = ""; // Clear input field
    }
}

function appendMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");

    // Create message container
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    // Create image element for avatar
    var img = document.createElement("img");
    img.src = sender === "user" ? "assets/anurag.png" : "assets/logo.png";  // Use relative paths
    img.classList.add("avatar");  // Add a class to control image styling
    messageDiv.appendChild(img);

    // Create text container
    var textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.innerText = message;
    messageDiv.appendChild(textDiv);

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
}

function getBotResponse(userInput) {
    let botMessage = "Let me check that for you...";
    
    setTimeout(() => {
        appendMessage(botMessage, "bot");
    }, 1000);
    
    setTimeout(() => {
        let response;
        if (userInput.toLowerCase().includes("leaf")) {
            response = "It seems like your plant has a leaf disease. I recommend using Neem oil.";
        } else if (userInput.toLowerCase().includes("photo")) {
            response = "You can upload the photo here for a more accurate diagnosis.";
        } else {
            response = "I'm not sure. Please provide more details or upload a photo.";
        }
        appendMessage(response, "bot");
    }, 2000);
}

function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
