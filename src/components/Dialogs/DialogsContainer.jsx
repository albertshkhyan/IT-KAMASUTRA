import React from "react";
import Dialogs from "./Dialogs";
import {
  newMessageBodyCreator,
  addNewMessageBody,
} from "./../../redux/dialog_page_reducer";
import CreateMyContext from "./../../createMyContext";

const DialogsContainer = (props) => {
  return (
    <CreateMyContext.Consumer>
      {(store) => {
        const dialogPage = store.getState().dialogPage;

        const handleNewMesageBody = (e) => {
          store.dispatch(newMessageBodyCreator(e.target.value));
        };

        const handleAddNewMessage = () => {
          store.dispatch(addNewMessageBody());
        };

        return (
          <Dialogs
            dialogPage={dialogPage}
            newMessageBody={handleNewMesageBody}
            addNewMessage={handleAddNewMessage}
          />
        );
      }}
    </CreateMyContext.Consumer>
  );
};
export default DialogsContainer;
