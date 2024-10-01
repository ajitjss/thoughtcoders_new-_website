// AutoPopupModal.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal'; // Import the Modal component

const AutoPopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set a timeout to show the modal after 10 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 10000ms = 10 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this runs once after every component mount (page load)

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} handleClose={handleCloseModal}>
      <h2>This is a popup modal!</h2>
      <p>Click on the X to close the modal.</p>
    </Modal>
  );
};

export default AutoPopupModal;
