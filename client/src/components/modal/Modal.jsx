// Modal.js
import React from 'react';
import './Modal.css'; 

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null; // Do not render modal if 'show' is false

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal