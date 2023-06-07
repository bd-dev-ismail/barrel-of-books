import React from "react";

const ConfrimDelete = ({ title, successAction, closeModal, deletingDatal }) => {
  return (
    <div>
      <input type="checkbox" id="confrimDelete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="modal-action">
            <label
              onClick={() => successAction(deletingDatal)}
              htmlFor="confrimDelete"
              className="btn dropShadow btn-sm btn-primary text-white"
            >
              Confirm Delete
            </label>
            <button
              onClick={closeModal}
              className="btn dropShadow btn-sm btn-warning text-white"
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
