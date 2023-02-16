import React, { useState } from "react";
import ModalBody from "./ModalBody";

function Modals({ title, body, remove }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="teamSetting ms-3 mt-3">{body}</div>
          <ModalBody remove={false} />
          <div className="modal-footer">
            <button
              type="button"
              className="btn memberCancelBtn"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn memberSaveBtn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
