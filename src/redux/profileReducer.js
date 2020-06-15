import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const PROFILE = "PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_IMAGE_SUCCESS = "SAVE_IMAGE_SUCCESS";


 
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
    status: "",
    fake : 10
}
// D:/REACT/IT-kamasutra-experiment/my-app/src
function profilePageReducer(state = initialState, action) {
    switch (action.type) {
        // case "FAKE" : return {...state, fake: state.fake + 1};
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
        case SAVE_IMAGE_SUCCESS : return {
            ...state,
            profileData : {...state.profileData, photos : action.photos}
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
export const saveImageAccess = (photos) => ({type : SAVE_IMAGE_SUCCESS, photos});



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
export const saveImage = (files) => async (dispatch) => {
    
    const {data} = await profileAPI.saveImage(files);
    if (data.resultCode === 0) {
        
        dispatch(saveImageAccess(data.data.photos))

    }
}

export default profilePageReducer;

