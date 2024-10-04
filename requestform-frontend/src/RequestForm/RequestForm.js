import React, { useState } from 'react';
import './RequestForm.css';

function RequestForm() {
  //Manage popup visibility
  const [isOpen, setIsOpen] = useState(false);

  //Toggle popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open popup */}
      <button onClick={togglePopup}>Open Request Form</button>

      {/* Modal  popup */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            {/* Request Form */}
            <h2>Request Form</h2>

            {/* Dropdown for type of Request */}
            <label>Request Type:</label>
            <select>
              <option>New Media</option>
              <option>Feature</option>
              <option>Bug Report</option>
              <option>Suggestion</option>
              <option>Other</option>
            </select>

            {/* Title input */}
            <label>Title:</label>
            <input type="text" name="title" placeholder="Enter title here" />

            {/* Details text */}
            <label>Details:</label>
            <textarea name="details" placeholder="Enter details here" />

            {/* Form buttons */}
            <div className="form-buttons">
              <button type="button" onClick={togglePopup}>Cancel</button>
              <button type="button" onClick={togglePopup}>Complete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestForm;
