import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "social-network/authReducer/SET_USER_DATA";

const initialState = {
    id: null,
    userName: null,
    email: null,
    isAuth: false//for render login or logaout button
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: return {
            ...state,
            ...action.payload,
        }
        default: return state;
    }
}

export const setUserData = (id, userName, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        userName,
        email,
        isAuth
    }
});

export const getAuthMeThunkCreator = (isAuth = true) => async (dispatch) => {
    const { data } = await authAPI.authMe();
    if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setUserData(id, login, email, isAuth));
    }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    const { data } = await authAPI.login(email, password, rememberMe);
    (data.resultCode === 0) ? (
        dispatch(getAuthMeThunkCreator())
    ) : (
            dispatch(stopSubmit("login", { _error: data.messages[0] }))
        )
}
export const logoutThunkCreator = () => async (dispatch) => {
    const { data } = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;