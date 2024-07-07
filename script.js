document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        date: formData.get('date')
    };
    
    fetch('/bookAppointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('message').textContent = result.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
