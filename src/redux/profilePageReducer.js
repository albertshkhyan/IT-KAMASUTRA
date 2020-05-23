import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const PROFILE = "PROFILE";
const SET_STATUS = "SET_STATUS";


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
    profileData: null,
    status: ""
}

function profilePageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let id = +state.posts[state.posts.length - 1].id + 1 + '';
            return {
                ...state,
                posts: [...state.posts, { id: id, message: action.newPostText, likesCount: 0 }],
            };

        case PROFILE: return {
            ...state,
            profileData: action.profileData
        }
        case SET_STATUS: return {
            ...state,
            status: action.status

        }
        default: return state;

    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setProfileData = (profileData) => {
    return ({ type: PROFILE, profileData })
};

export const setStatus = (status) => {
    return ({ type: SET_STATUS, status })
};


export const profileThunkCreator = (userID) => (dispatch) => {
    usersAPI.profile(userID).then(({ data }) => {
        dispatch(setProfileData(data));
    });
}

export const getStatusAsyncActionCreator = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(({ data }) => {
            return dispatch(setStatus(data))
        })
    }
}
export const updateStatusAAC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(({ data }) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))

            }
        })
    }
}

export default profilePageReducer;

