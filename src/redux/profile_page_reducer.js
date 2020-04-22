const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";

const initialState = {
    posts: [
        {
            id: "1",
            message: "Hi, how are you?",
            likesCount: 12
        },
        {
            id: "2",
            message: "It's my first posts",
            likesCount: 11
        },
        {
            id: "3",
            message: "blabla",
            likesCount: 4
        },
        {
            id: "4",
            message: "blablabla",
            likesCount: 55
        }
    ],
    newPostText: 'This is my post, :D !!!'
}

function profilePageReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_POST : 
            const newPost = {
                id : "5",
                message : state.newPostText,
                likesCount : 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT : 
        state.newPostText = action.newText;
            return state;
        default: return state;
    
    }
}

export const addPostActionCreator = () => ({type : ADD_POST});

export const updateNePostActionCreator = (newText) => ({
    type : UPDATE_NEW_POST_TEXT,
    newText

});

export default profilePageReducer;

