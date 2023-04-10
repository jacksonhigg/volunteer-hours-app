const express = require('express');
const { google } = require('googleapis');
const path = require('path');

const app = express();
const credentials = require('./credentials.json');
const keyFilePath = path.join(__dirname, 'credentials.json');
const jwtClient = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});
const spreadsheetId = '15QYCpRl2iOhWCtIThOfGuQj9e1TFurBeSyE6UxIUYZk';
const sheets = google.sheets({ version: 'v4', auth: jwtClient });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/volunteer-hours', async (req, res) => {
    console.log(`Request received: ${JSON.stringify(req.body)}`);
    const { firstName, lastName, dateOfBirth } = req.body;
  
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!A:I',
      });
  
      const rows = response.data.values;
      let totalHours = 0;
  
      if (rows) {
        rows.forEach((row) => {
          if (
            row[1].toLowerCase() === firstName.toLowerCase() &&
            row[2].toLowerCase() === lastName.toLowerCase() &&
            row[3] === dateOfBirth
          ) {
            totalHours += parseFloat(row[8]);
          }
        });
      }
  
      console.log(`Total hours found: ${totalHours}`);
      res.json({ totalHours });
    } catch (error) {
      console.error('Error:', error); // Add this line for logging the error
      res.status(500).send('Internal Server Error');
    }
  });  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
