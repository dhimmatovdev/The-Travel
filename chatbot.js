// Chatbot tugmasini bosganda ochish
document.getElementById('chat-btn').addEventListener('click', function () {
    document.getElementById('chat-window').style.display = 'flex';
});

// Chatbotni yopish
document.getElementById('close-chat').addEventListener('click', function () {
    document.getElementById('chat-window').style.display = 'none';
});

// Foydalanuvchi xabarini yuborish
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value.trim();

    if (userInput !== '') {
        // Foydalanuvchi xabarini qo'shish
        const userMessage = `<div class="user-message"><strong>You:</strong> ${userInput}</div>`;
        document.getElementById('chat-messages').innerHTML += userMessage;

        // Chatbotning javoblari
        let botResponse = '';
        if (userInput.toLowerCase().includes('hello')) {
            botResponse = 'Hello! How can I assist you?';
        } else if (userInput.toLowerCase().includes('bye')) {
            botResponse = 'Goodbye! Have a nice day!';
        } else {
            botResponse = 'Sorry, I did not understand that. Can you rephrase?';
        }

        // Botning javobini ko'rsatish
        const botMessage = `<div class="bot-message"><strong>Bot:</strong> ${botResponse}</div>`;
        setTimeout(() => {
            document.getElementById('chat-messages').innerHTML += botMessage;
            const messages = document.getElementById('chat-messages');
            messages.scrollTop = messages.scrollHeight; // Avtomatik pastga scroll
        }, 500);

        // Inputni tozalash
        document.getElementById('user-input').value = '';
    }
});
