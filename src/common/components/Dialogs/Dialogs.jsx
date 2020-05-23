import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./style.module.css";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  const state = props.dialogPage;
  const messagesElements = state.messages.map(
    ({ id, message }) =>
    <Message key={id} message={message} id={id} />
  );

  const dialogElements = state.dialogs.map(({ name, id }) => (
    <DialogItem key={id} name={name} id={id} />
  ));

  const onAddNewMessage = (values) => {
    let isEmpty = Object.keys(values).length;
    isEmpty && props.addNewMessage(values.message);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>

      <div className={classes.messages}>
        {messagesElements}
        <div>
          <AddNewMessageFormRedux onSubmit={onAddNewMessage} />
        </div>
      </div>
    </div>
  );
};

const AddNewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {/* <textarea
        onChange={handleOnChange}
        value={props.dialogPage.new_message_body}
        placeholder="Enter your message"
      ></textarea> */}
      <Field
        name="message"
        placeholder="Enter your message"
        component="textarea"
      />
      <div>
        <button>ADD MESSAGE</button>
      </div>
    </form>
  );
};

const AddNewMessageFormRedux = reduxForm({
  form: "addNewMessageForm",
})(AddNewMessageForm);

export default Dialogs;
