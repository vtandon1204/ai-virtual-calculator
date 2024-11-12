function fetchResponse() {
    fetch('/get_response')
        .then(response => response.json())
        .then(data => {
            if (data.response) {
                document.getElementById('response').innerHTML = '<h2>Answer:</h2><p>' + data.response + '</p>';
            }
        })
        .catch(error => console.error('Error fetching response:', error));
}

setInterval(fetchResponse, 1000);  // Fetch response every second
