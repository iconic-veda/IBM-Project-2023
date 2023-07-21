// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [fetchName, setFetchName] = useState('');
  const [idFromCouchDB, setIdFromCouchDB] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFetchNameChange = (event) => {
    setFetchName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/addName', { name })
      .then((response) => {
        console.log(response.data.message);
        fetchNames(); // Fetch updated list after adding a new name
      })
      .catch((error) => {
        console.error('Error adding name:', error);
      });
  };

  const handleFetchId = () => {
    const foundName = names.find((n) => n.name === fetchName);
    if (foundName) {
      setIdFromCouchDB(foundName._id);
    } else {
      setIdFromCouchDB('Name not found in CouchDB.');
    }
  };

  const fetchNames = () => {
    axios
      .get('http://localhost:5000/api/getNames')
      .then((response) => {
        setNames(response.data);
      })
      .catch((error) => {
        console.error('Error fetching names:', error);
      });
  };

  useEffect(() => {
    fetchNames();
  }, []); // Fetch names when the app loads

  return (
    <div className="App">
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Names in CouchDB:</h2>
      <ul>
        {names.map((n) => (
          <li key={n._id}>{n.name}</li>
        ))}
      </ul>
      <h2>Fetch ID for Name:</h2>
      <label>
        Enter your name:
        <input type="text" value={fetchName} onChange={handleFetchNameChange} />
      </label>
      <button onClick={handleFetchId}>Fetch ID</button>
      <div>
        <strong>Generated ID from CouchDB:</strong> {idFromCouchDB}
      </div>
    </div>
  );
};

export default App;