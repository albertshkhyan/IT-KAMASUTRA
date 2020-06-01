import React from "react";
import { useState } from "react";

const StatusProfileWithHooks = (props) => {
    debugger;
    console.log('useState', useState);
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };
  const deActivateEditMode = () => {
    setEditMode(false);
  };

  const onStatusChangge = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="StatusProfile">
      <div className="statusCXontainer">
        {editMode ? (
          <div>
            <input
              autoFocus
              type="text"
              value={status}
              onBlur={deActivateEditMode}
              onChange={onStatusChangge}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={activeEditMode}>
              {props.status || "no status"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default StatusProfileWithHooks;
