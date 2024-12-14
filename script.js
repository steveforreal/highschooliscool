// Basic functionality to handle user interactions

// Sign-up and Login functions (for now, we'll just log a message)
function signUp() {
    alert("Sign up functionality will be added.");
}

function login() {
    alert("Login functionality will be added.");
}

// Real-time chat functionality (for now, a simple message send)
function sendMessage() {
    const message = document.getElementById("chat-input").value;
    const messagesDiv = document.getElementById("messages");
    if (message.trim()) {
        messagesDiv.innerHTML += `<p>${message}</p>`;
        document.getElementById("chat-input").value = '';  // clear the input
    }
}

// Live stream setup (simple video stream using webcam)
function startLiveStream() {
    const videoElement = document.getElementById("live-video");
    
    // Access user's camera (front/back)
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoElement.srcObject = stream;
        })
        .catch(function(err) {
            console.log("Error accessing webcam: " + err);
        });
}
