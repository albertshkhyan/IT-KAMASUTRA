import React from 'react';

import classes from './style.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
debugger;
    const messagesElements = props.dialogPage.messages.map(({ id, message }) => (<Message message={message} id={id} />));

    const dialogElements = props.dialogPage.dialogs.map(({ name, id }) => (<DialogItem name={name} id={id} />));

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}

            </div>
        </div>
    );
}
export default Dialogs;