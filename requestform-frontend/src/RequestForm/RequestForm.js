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

      {/* Conditional show of popup */}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>X</button>
            {/* Next Step */}
            <p>Next Area</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestForm;
