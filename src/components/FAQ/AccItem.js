import React, { useState } from "react";

const AccItem = ({ question, answer }) => {
  const [open, setopen] = useState(false);
  return (
    <div className="accitem">
      <div className="accquestion" onClick={() => setopen(!open)}>
        <h3>{question}</h3>
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && (
        <div className="accans">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccItem;
