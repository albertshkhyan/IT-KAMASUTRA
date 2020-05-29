const ADD_NEW_MESSAGE_BODY = "ADD_NEW_MESSAGE_BODY";

const initialState = {
    messages: [
        { id: "1", message: "Hi", },
        { id: "2", message: "How are you", },
        { id: "3", message: "Yo", },
        { id: "4", message: "Yo", },
        { id: "5", message: "Yo", },
        { id: "6", message: "Yo", },
        { id: "7", message: "Yo", },

    ],
    dialogs: [
        { name: "Valer", id: "1" },
        { name: "Janna", id: "2" },
        { name: "Lyov", id: "3" },
        { name: "Nara", id: "4" },
        { name: "Ruzan", id: "5" },
        { name: "Miqo", id: "6" },
        { name: "Alik", id: "7" },
        { name: "Consuela", id: "8" },
    ]
}

function dialogPageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_MESSAGE_BODY:
            let id = +state.messages[state.messages.length - 1].id + 1 + '';
            return {
                ...state,
                messages: [...state.messages, { id: id, message: action.newMessage }],
            }
        default: return state;
    }
}


export const addNewMessageBody = (newMessage) => {
    return ({ type: ADD_NEW_MESSAGE_BODY, newMessage });
};

export default dialogPageReducer;