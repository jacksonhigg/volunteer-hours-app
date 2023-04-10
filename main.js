document.getElementById('volunteer-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const dateOfBirth = document.getElementById('dateOfBirth').value.trim();

  try {
    const response = await fetch('/api/volunteer-hours', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, dateOfBirth }),
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    document.getElementById('result').textContent = `Total hours: ${data.totalHours}`;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('result').textContent = 'An error occurred. Please try again.';
  }
});
