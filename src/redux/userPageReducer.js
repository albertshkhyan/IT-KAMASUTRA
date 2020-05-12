import APIRequests from './../api/api';

////action types
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";




const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: return {
            ...state,
            users: state.users.map((item) => {
                if (item.id === action.id) {
                    return ({
                        ...item,
                        followed: true
                    })
                }
                return item;
            })
        }
        case UNFOLLOW: return {
            ...state,
            users: state.users.map((item) => {
                if (item.id === action.id) {
                    return ({
                        ...item,
                        followed: false
                    });
                }
                return item;
            })
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
export default userPageReducer;


export const setIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
});
export const setCurrentPage = (currentPage) => {
    debugger
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

export const getUsersAsncAC = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));
    APIRequests.getUsers(currentPage, pageSize).then(
        (data) => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        }
    );
}

export const followAsyncAC = (item) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, item.id));
    APIRequests.postFollw(item.id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(item.id));
        }
        dispatch(toggleFollowingInProgress(false, item.id));
    });

}

export const unfollowAsyncAC = (item) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, item.id));
    APIRequests.deleteFollow(item.id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollow(item.id));
        }
        dispatch(toggleFollowingInProgress(false, item.id));
    });
}


