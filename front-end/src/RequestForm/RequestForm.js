import React, { useState } from 'react';
import './RequestForm.css';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    type: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add any submission logic here, such as sending the data to a server
  };

  return (
    <div className="request-form-container">
      <h2>Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Request Type:</label>
        <select name="type" id="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="newMedia">New Media</option>
          <option value="feature">Feature</option>
          <option value="bug">Bug</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="details">Details:</label>
        <textarea
          name="details"
          id="details"
          rows="5"
          placeholder="Enter details..."
          value={formData.details}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => setFormData({ type: '', details: '' })}>
          Clear
        </button>
      </form>
    </div>
  );
}
