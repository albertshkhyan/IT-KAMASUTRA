const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const ADD_NEW_MESSAGE_BODY = "ADD_NEW_MESSAGE_BODY";


const store = {
    _callSubscriber() {
        console.log("State chnaged");
    },
    _state : {
        dialogPage: {
            messages: [
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
                    message: "koko",
                },
                {
                    id: "8",
                    message: "Yo",
                },
            ],
            dialogs : [
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
            
            ],
            new_message_body : ""
    
        },
        profilePage : {
            posts :  [
                {
                    id : "1",
                    message : "Hi, how are you?",
                    likesCount : 12
                },
                {
                    id : "2",
                    message : "It's my first posts",
                    likesCount : 11
                },
                {
                    id : "3",
                    message : "blabla",
                    likesCount : 4
                },
                {
                    id : "4",
                    message : "blablabla",
                    likesCount : 55
                }
            ],
            newPostText : 'This is my post, :D !!!'
        }
    
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
         this._callSubscriber = observer;
     },
     
    dispatch(action) {
        if(action.type === ADD_POST) {
                 const newPost = {
                         id : "5",
                         message : this._state.profilePage.newPostText,
                         likesCount : 0
                 }
                 this._state.profilePage.posts.push(newPost);
                 this._state.profilePage.newPostText = "";
                 this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === NEW_MESSAGE_BODY) {
            this._state.dialogPage.new_message_body = action.body;
            this._callSubscriber(this._state);
        }
        else if(action.type === ADD_NEW_MESSAGE_BODY) {
            const {new_message_body, messages} = this._state.dialogPage
            this._state.dialogPage.messages.push({
                id :  messages.length + 1 + '',
                message : new_message_body
            });
            this._callSubscriber(this._state);
        }
    }

}

export const newMessageBodyCreator = (newBody) => ({type : NEW_MESSAGE_BODY, body : newBody});
export const addNewMessageBody = () => {
    return ({type : ADD_NEW_MESSAGE_BODY})
};

export const addPostActionCreator = () => ({type : ADD_POST});

export const updateNePostActionCreator = (newText) => ({
    type : UPDATE_NEW_POST_TEXT,
    newText

});


export default store;











