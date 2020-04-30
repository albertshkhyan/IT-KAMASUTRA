const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";




const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: return {
            ...state,
            users: state.users.map((item) => {
                if (item.id === action.id) {
                    return ({
                        ...item,
                        followed: false
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
                        followed: true
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


        default: return state;
    }
}
export default userPageReducer;


export const setIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const setTotalCountAC = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
});
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const followAC = (id) => ({
    type: FOLLOW,
    id
});
export const unfollowAC = (id) => ({
    type: UNFOLLOW,
    id
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});
