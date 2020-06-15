import { authAPI } from "../api/api";
import { setUserData } from './authReducer';


const INITILIZE_SUCCESS = "social-network/appReducer/INITILIZE_SUCCESS";

const initialState = {
    initilized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITILIZE_SUCCESS: return {
            ...state,
            initilized: true
        }
        default: return state;
    }
}


export const initilizeSuccess = () => ({ type: INITILIZE_SUCCESS });

export const getAuthMeThunkCreator = (isAuth = true) => (dispatch) => {
    return authAPI.authMe()
        .then(({ data }) => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(setUserData(id, login, email, isAuth));
            }
            // return "koko";//value of Promise.all then - Promise.all([promise]).then((res)=> ... res ==="koko"
        });
}

export const initilizeApp = () => (dispatch) => {
    const promise = dispatch(getAuthMeThunkCreator());//recognize user
    //dispatch(otherActionCreator1())//set theme
    //dispatch(otherActionCreator2())//set language
    /**
     * The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled
     * /if we have several dispatch we can use Promise.all
     */
    Promise.all([promise]).then((res) => {

        dispatch(initilizeSuccess());
    })
}

export default appReducer;