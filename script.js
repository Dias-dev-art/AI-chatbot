const API_KEY = "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";

const content = document.getElementById('content');
const chatInput = document.getElementById('ChatInput');
const sendButton = document.getElementById('SendButton');

sendButton.addEventListener('click', () => handleSendMessage());
chatInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
})

function handleSendMessage()
{
    const question = chatInput.value.trim();
    
    addQuestonSection(question);
}

const fetchData =
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "deepseek/deepseek-r1-distill-llama-8b",
            "messages": [
                {
                    "role": "user",
                    "content": "i need help with my studies"
                }
            ]
        })
    });

// fetchData.then(response => response.json())
//     .then(data => console.log(data.choices[0].message.content))

function addQuestonSection(message)
{
    const sectionElement = document.createElement('section');
    sectionElement.className = 'question-section';
    sectionElement.textContent = message;

    content.appendChild(sectionElement);
    addAnswerSection(message)
}

function addAnswerSection(message)
{
    
}


