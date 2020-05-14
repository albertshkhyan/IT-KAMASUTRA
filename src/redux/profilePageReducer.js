import APIRequests from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const PROFILE = "PROFILE";

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
    newPostText: 'This is my post, :D !!!',
    profileData: null
}

function profilePageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let id = +state.posts[state.posts.length - 1].id + 1 + '';
            return {
                ...state,
                posts: [...state.posts, { id: id, message: state.newPostText, likesCount: 0 }],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case PROFILE: return {
            ...state,
            profileData: action.profileData
        }
        default: return state;

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const setProfileData = (profileData) => ({ type: PROFILE, profileData });

export const updateNePostActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText

});


export const profileThunkCreator = (userID) => (dispatch) => {
    APIRequests.profile(userID).then((data) => {
        dispatch(setProfileData(data));
    });
}

export default profilePageReducer;

