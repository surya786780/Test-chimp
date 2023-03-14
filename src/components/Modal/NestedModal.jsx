import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
};

function NestedModal({ isActivate, removeComp }) {
  console.log("opened");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    removeComp();
  };
  const sendResult = () => {
    console.log("Hello");
    handleClose();
  };
  useEffect(() => {
    if (isActivate == true) handleOpen();
  }, [isActivate]);

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style2, width: 1400, height: "85vh" }}>
          <div className="modal-title d-flex bg-darkBlue p-3 justify-content-between">
            <h2 className="font-big text-light  ">
              Edit results email template
            </h2>
            <div className=" d-flex ">
              <div
                className="cursor-pointer close-btn me-3"
                onClick={handleClose}
              >
                close
              </div>
              <div className="cursor-pointer save-btn " onClick={sendResult}>
                save
              </div>
            </div>
          </div>

          <div className="text-editor d-flex p-3">
            <div className="left w-50  fw-bold"> Email content</div>
            <div className="right w-50 fw-bold"> Preview</div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default NestedModal;
