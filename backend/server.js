// backend/server.js
const express = require('express');
const nano = require('nano')('http://Iconic_Veda:CouchDB@localhost:5984');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const dbName = 'student-form';
const db = nano.use(dbName);

app.use(bodyParser.json());
app.use(cors());

app.post('/api/addName', (req, res) => {
  const { name } = req.body;

  db.insert({ name }, (err, body) => {
    if (err) {
      console.error('Error inserting document:', err);
      res.status(500).json({ message: 'Error inserting document' });
    } else {
      console.log('Document inserted:', body);
      res.status(200).json({ message: 'Document inserted successfully' });
    }
  });
});

app.get('/api/getNames', (req, res) => {
  db.list({ include_docs: true }, (err, body) => {
    if (err) {
      console.error('Error fetching documents:', err);
      res.status(500).json({ message: 'Error fetching documents' });
    } else {
      const names = body.rows.map((row) => row.doc);
      res.status(200).json(names);
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});