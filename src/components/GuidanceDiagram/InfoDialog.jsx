import React, { useState } from 'react';
import './InfoDialog.css';

const InfoDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-dialog">
      <button className="info-button" onClick={() => setIsOpen(!isOpen)}>
        i
      </button>
      {isOpen && (
        <div className="dialog-content">
          <h2>How to Use This Diagram</h2>
          <p>This interactive diagram represents your personal growth framework:</p>
          <ul>
            <li>The center represents your overall Personal Growth.</li>
            <li>The inner circle shows main categories: Projects, Areas, Resources, and Archive.</li>
            <li>The middle circle displays sub-categories for each main category.</li>
            <li>The outer circle contains specific detail items.</li>
            <li>Hover over any dot to see its connections, name, and actionable sentences.</li>
            <li>Use this diagram to understand how different aspects of your personal development are interconnected.</li>
            <li>Focus on areas with many connections as potential improvement points.</li>
            <li>Regularly review and update your framework as your goals evolve.</li>
          </ul>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoDialog;