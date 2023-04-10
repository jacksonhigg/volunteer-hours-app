<h1>Volunteer Hours App</h1>
<p>This web application allows volunteers to enter their personal information and retrieve the total number of volunteer hours they have completed. The app uses Google Sheets API to access and read data from a Google Sheet that contains the volunteer hours information.</p>

<h2>Getting Started</h2>
<p>These instructions will help you set up the project on your local machine for development and testing purposes.</p>

  <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v14.x or later)</li>
        <li>npm (v6.x or later)</li>
    </ul>

  <h3>Installation</h3>
    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/yourusername/volunteer-hours-app.git</code></pre>
        <li>Navigate to the project directory:</li>
        <pre><code>cd volunteer-hours-app</code></pre>
        <li>Install the dependencies:</li>
        <pre><code>npm install</code></pre>
        <li>Create a <code>.env</code> file in the project root and add your Google Sheets API credentials and other required variables:</li>
        <pre><code>GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_CLIENT_EMAIL=your_client_email
GOOGLE_PRIVATE_KEY=your_private_key
</code></pre>
        <li>Start the development server:</li>
        <pre><code>npm start</code></pre>
    </ol>
    
 <h2>Usage</h2>
   <p>Once the development server is running, open your browser and navigate to <code>http://localhost:3000</code>. Enter your first name, last name, and date of birth, then click "Get Total Hours" to retrieve your total volunteer hours.</p>

 <h2>Contributing</h2>
   <p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

 <h2>License</h2>
   <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
