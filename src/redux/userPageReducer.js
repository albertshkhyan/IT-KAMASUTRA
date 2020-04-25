const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";



const initialState = {
    users: [
      
        
    ]
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

        case SET_USERS : return {
            ...state,
            users : [...state.users, ...action.users]
        }


        default: return state;
    }
}
export default userPageReducer;

export const followAC = (id) => ({
    type: FOLLOW,
    id
});
export const unfollowAC = (id) => ({
    type: UNFOLLOW,
    id
});

export const setUsersAC = (users) => ({
    type : SET_USERS,
    users
});
