// src/components/TrainForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TrainForm = () => {
  const [coachNumber, setcoachNumber] = useState('');
  const [componentsToChange, setComponentsToChange] = useState('');
  const [code, setcode] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const componentsArray = componentsToChange.split(',').map(item => item.trim());

    try {
      await axios.post('http://localhost:5000/api/train-records', { coachNumber, componentsToChange: componentsArray, code, notes });
      alert('Record Added');
    } catch (error) {
      console.error("Error adding record: ", error);
    }

    // Reset form fields
    setcoachNumber('');
    setComponentsToChange('');
    setcode('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Coach Number</label>
        <input
          type="text"
          value={coachNumber}
          onChange={(e) => setcoachNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Code</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setcode(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Components to Change (comma-separated)</label>
        <input
          type="text"
          value={componentsToChange}
          onChange={(e) => setComponentsToChange(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button type="submit">Add Maintenance Record</button>
    </form>
  );
};

export default TrainForm;
