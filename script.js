const API_KEY = "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";

const fetchData =
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "openai/o4-mini",
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Hi, do you need help?"
                        },
                    ]
                }
            ]
        })
    });

    fetchData.then(response => response.json())
        .then(data => console.log(data))