import React from "react";


import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./style.module.css";

const Dialogs = (props) => {

  const state = props.dialogPage;
  const messagesElements = state.messages.map(({ id, message }) => (
    <Message message={message} id={id} />
  ));

  const dialogElements = state.dialogs.map(({ name, id }) => (
    <DialogItem name={name} id={id} />
  ));

  // const handleOnChange = (e) => {
  //   props.dispatch(newMessageBodyCreator(e.target.value));
  // };
  const handleOnChange = (e) => {
    props.newMessageBody(e);
  };

  // const handleOnClick = () => {
  //   props.dispatch(addNewMessageBody());
  // };
  const handleOnClick = () => {
    props.addNewMessage();
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
