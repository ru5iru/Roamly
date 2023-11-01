import React, { useState } from 'react';
import AdminForm from './adminForm';

export const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Add Advertisement</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <span>&times;</span>
            </div>
            <AdminForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;