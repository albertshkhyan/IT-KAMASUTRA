import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./style.module.css";

const StatusProfileWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };
  const deActivateEditMode = (event) => {
    setEditMode(false);
    props.updateStatus(event.target.value);
  };

  const onStatusChangge = (event) => {
    setStatus(event.target.value);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={classes.StatusProfile}>
      <div className={classes.statusContainer}>
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
          <div className={classes.statusContent}>
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
