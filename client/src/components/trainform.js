// src/components/TrainForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TrainForm = () => {
  const [compartmentNumber, setCompartmentNumber] = useState('');
  const [componentsToChange, setComponentsToChange] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const componentsArray = componentsToChange.split(',').map(item => item.trim());

    try {
      await axios.post('http://localhost:5000/api/train-records', { compartmentNumber, componentsToChange: componentsArray, notes });
      alert('Record Added');
    } catch (error) {
      console.error("Error adding record: ", error);
    }

    // Reset form fields
    setCompartmentNumber('');
    setComponentsToChange('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Compartment Number</label>
        <input
          type="text"
          value={compartmentNumber}
          onChange={(e) => setCompartmentNumber(e.target.value)}
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
