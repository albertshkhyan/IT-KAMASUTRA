import React from "react";

import classes from "./style.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  newMessageBodyCreator,
  addNewMessageBody,
} from "./../../redux/dialog_page_reducer";

const Dialogs = (props) => {
  const messagesElements = props.dialogPage.messages.map(({ id, message }) => (
    <Message message={message} id={id} />
  ));

  const dialogElements = props.dialogPage.dialogs.map(({ name, id }) => (
    <DialogItem name={name} id={id} />
  ));

  const handleOnChange = (e) => {
    props.dispatch(newMessageBodyCreator(e.target.value));
  };
  const handleOnClick = () => {
    props.dispatch(addNewMessageBody());
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>

      <div className={classes.messages}>
        {messagesElements}

        <div>
          <div>
            <textarea
              onChange={handleOnChange}
              value={props.dialogPage.new_message_body}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={handleOnClick}>ADD MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
