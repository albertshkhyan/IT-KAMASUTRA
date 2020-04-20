import React from 'react';
import Dialogs from './Dialogs';
import { newMessageBodyCreator, addNewMessageBody } from './../../redux/dialog_page_reducer';

const DialogsContainer = (props) => {
    const dialogPage = props.store.getState().dialogPage;
    const handleNewMesageBody = e => {
        props.store.dispatch(newMessageBodyCreator(e.target.value))
      };
    const handleAddNewMessage = () => {
        props.store.dispatch(addNewMessageBody());
    }

    return <Dialogs 
    dialogPage = { dialogPage }
    newMessageBody = { handleNewMesageBody }
    addNewMessage={ handleAddNewMessage }
    />
}
export default DialogsContainer;