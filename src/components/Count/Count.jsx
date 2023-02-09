import React from "react";

function Count({ size, onClick }) {
  return (
    <div className="counts" onClick={onClick}>
      {size}
    </div>
  );
}

export default Count;
