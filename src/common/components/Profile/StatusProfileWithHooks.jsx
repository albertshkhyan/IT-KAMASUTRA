import React, { useEffect } from "react";
import { useState } from "react";

const StatusProfileWithHooks = (props) => {
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
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

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
