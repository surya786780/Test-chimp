import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import NestedModal from "./NestedModal";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function ModalComp({
  removeModalComp,
  isActivate,
  headCont,
  bodyCont,
  content,
}) {
  const [open, setOpen] = useState(false);
  const [child, setChild] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const removeModal = () => {
    setChild(false);
  };

  const handleClose = () => {
    setOpen(false);
    removeModalComp();
  };
  const sendResult = () => {
    console.log("Hello");
    handleClose();
  };
  console.log(isActivate, headCont, bodyCont, content);

  useEffect(() => {
    if (isActivate == true) handleOpen();
  }, [isActivate]);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style1, width: 500 }}>
          <h2 className="font-big mb-4">{headCont}</h2>

          <p className="mb-3 font-small">{bodyCont}</p>
          <p className=" font-small">
            {content}{" "}
            <span
              onClick={() => {
                setChild(!child);
              }}
              className="cursor-pointer sec-color"
            >
              here.
            </span>
          </p>
          <div className="mt-4 p-2 d-flex justify-content-end">
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
        </Box>
      </Modal>
      {child ? (
        <NestedModal isActivate={true} removeComp={removeModal} />
      ) : (
        <></>
      )}
    </div>
  );
}
