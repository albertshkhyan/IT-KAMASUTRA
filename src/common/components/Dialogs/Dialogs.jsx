import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./style.module.css";
import { Field, reduxForm } from "redux-form";
import Textarea from "./../../FormControl/Textarea/Textarea";
import { required, maxLength } from "./../../../utils/validators";
import { createField } from "./../../FormControl/FormControl";

const Dialogs = (props) => {
  const state = props.dialogPage;
  const messagesElements = state.messages.map(({ id, message }) => (
    <Message key={id} message={message} id={id} />
  ));

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

      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <AddNewMessageFormRedux onSubmit={onAddNewMessage} />
      </div>
    </div>
  );
};

const maxLengthMessage = maxLength(100); //validator creator

const AddNewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField(
        Textarea,
        [required, maxLengthMessage],
        "",
        "message",
        "Enter your message"
      )}
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
