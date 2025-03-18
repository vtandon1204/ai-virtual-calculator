async function fetchResponse() {
    try {
        const response = await fetch('/get_response');
        const data = await response.json();
        
        if (data.response) {
            const responseElement = document.getElementById('response');
            responseElement.innerHTML = `<p>${data.response}</p>`;
            responseElement.style.opacity = '1';  // Fade in the new response
        }
    } catch (error) {
        console.error('Error fetching response:', error);
    }
}

// Fetch response every second with smooth UI update
setInterval(fetchResponse, 1000);
