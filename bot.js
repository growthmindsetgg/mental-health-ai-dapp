async function sendMessage(userInput) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
            "Authorization": "Bearer YOUR_OPENAI_API_KEY",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a mental health support assistant." },
                { role: "user", content: userInput }
            ]
        })
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    document.getElementById("chat").innerHTML += `<p><b>You:</b> ${userInput}</p>`;
    document.getElementById("chat").innerHTML += `<p><b>AI:</b> ${aiResponse}</p>`;

    if (aiResponse.includes("please consider speaking to a professional")) {
        alert("The AI suggests consulting a therapist or psychiatrist.");
    }
}
