import { usersAPI } from '../api/api';

//action types
//redux ducks pattern
//"appName/reducerName/REDUCER_TYPE"
const FOLLOW = "social-network/userReducer/FOLLOW";
const UNFOLLOW = "social-network/userReducer/UNFOLLOW";
const SET_USERS = "social-network/userReducer/SET_USERS";
const SET_TOTAL_COUNT = "social-network/userReducer/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "social-network/userReducer/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "social-network/userReducer/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "social-network/userReducer/TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
//custom function
const followAndUnfollow = (state, action, followed) => ({
    ...state,
    users: state.users.map((item) => {
        if (item.id === action.id) {
            return ({
                ...item,
                followed
            })
        }
        return item;
    })
});

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            const followed = true;
            return followAndUnfollow(state, action, followed);
        }
        case UNFOLLOW: {
            const followed = false;
            return followAndUnfollow(state, action, followed);
        }
        case SET_USERS: return {
            ...state,
            users: [...action.users]
        }
        case SET_TOTAL_COUNT: return {
            ...state,
            totalCount: action.totalCount
        }
        case SET_CURRENT_PAGE: return {
            ...state,
            currentPage: action.currentPage
        }
        case TOGGLE_IS_FETCHING: return {
            ...state,
            isFetching: action.isFetching
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: return {
            ...state,
            followingInProgress: action.isFetching ? (
                [...state.followingInProgress, action.userID]
            ) : (
                    state.followingInProgress.filter((id) => id !== action.userID)
                )
        }
        default: return state;
    }
}
export default userReducer;

//actions
export const setIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
});
export const setCurrentPage = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
};
export const follow = (id) => {
    return {
        type: FOLLOW,
        id
    }
};
export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        id
    }
};
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const toggleFollowingInProgress = (isFetching, userID) => {
    return ({
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        userID,
        isFetching,
    })
}

//thunk creators
export const getUsersAsncAC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
}

export const followAsyncAC = (item) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, item.id));
    const { data } = await usersAPI.postFollow(item.id)
    if (data.resultCode === 0) {
        dispatch(follow(item.id));
    }
    dispatch(toggleFollowingInProgress(false, item.id));
}

export const unfollowAsyncAC = (item) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, item.id));
    const { data } = await usersAPI.deleteFollow(item.id)
    if (data.resultCode === 0) {
        dispatch(unfollow(item.id));
    }
    dispatch(toggleFollowingInProgress(false, item.id));
}


