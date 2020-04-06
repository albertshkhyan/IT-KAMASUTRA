import React from 'react';

import classes from './style.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const dialogs = [
    {
        name: "Valer",
        id: "1"
    },
    {
        name: "Janna",
        id: "2"
    },
    {
        name: "Lyov",
        id: "3"
    },
    {
        name: "Nara",
        id: "4"
    },
    {
        name: "Ruzan",
        id: "5"
    },
    {
        name: "Miqo",
        id: "6"
    },
    {
        name: "Alik",
        id: "7"
    },
    {
        name: "Consuela",
        id: "8"
    },

];

const messages = [
    {
        id: "1",
        message: "Hi",
    },
    {
        id: "2",
        message: "How are you",
    },
    {
        id: "3",
        message: "Yo",
    },
    {
        id: "4",
        message: "Yo",
    },
    {
        id: "5",
        message: "Yo",
    },
    {
        id: "6",
        message: "Yo",
    },
    {
        id: "7",
        message: "Yo",
    },
    {
        id: "8",
        message: "Yo",
    },
];


const Dialogs = (props) => {

    const messagesElements = messages.map(({ id, message }) => (<Message message={message} id={id} />));

    const dialogElements = dialogs.map(({ name, id }) => (<DialogItem name={name} id={id} />));

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