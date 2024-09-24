function nextStage(currentStage) {
    const currentStageEl = document.getElementById('stage-1');
    const nextStageEl = document.getElementById('stage-2');

    if (nextStageEl) {
        currentStageEl.style.display = 'none';
        nextStageEl.style.display = 'block';
    }
}

document.getElementById('teamRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const teamName = document.getElementById('teamName').value;
    const matchFormat = document.getElementById('matchFormat').value;

    const formData = {
        teamName: teamName,
        matchFormat: matchFormat
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Your team has been successfully registered!');
        console.log('Form submitted successfully:', data);
    })
    .catch(error => {
        console.error('Error submitting the form:', error);
    });
});