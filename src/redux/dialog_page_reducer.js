const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const ADD_NEW_MESSAGE_BODY = "ADD_NEW_MESSAGE_BODY";

function dialogPageReducer(state, action) {
    const {new_message_body, messages} = state

    switch(action.type) {
        case NEW_MESSAGE_BODY : 
            state.new_message_body = action.body;
            return state;
        case ADD_NEW_MESSAGE_BODY:    
            state.messages.push({
                id :  messages.length + 1 + '',
                message : new_message_body
            }); 
            return state;
        default: return state;
    }
}


export const newMessageBodyCreator = (newBody) => ({type : NEW_MESSAGE_BODY, body : newBody});
export const addNewMessageBody = () => {
    return ({type : ADD_NEW_MESSAGE_BODY})
};

export default dialogPageReducer;