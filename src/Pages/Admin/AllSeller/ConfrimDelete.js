import React from 'react';

const ConfrimDelete = ({ title, successAction, closeModal, removeSeller }) => {
  return (
    <div>
      <input type="checkbox" id="confrimDelete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="modal-action">
            <label
              onClick={() => successAction(removeSeller)}
              htmlFor="confrimDelete"
              className="btn btn-sm btn-primary text-white"
            >
              Confirm Delete
            </label>
            <button
              onClick={closeModal}
              className="btn btn-sm btn-warning text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfrimDelete;