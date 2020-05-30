/**
 * A selector is a function that accepts Redux state as an argument and returns data that is derived from that state. Selectors can provide performance optimizations to your application and can also help you encapsulate your global state tree.
 */
export const getUserId = state => {
    return state.auth.id;
};
export const getIsAuth = state => state.auth.isAuth;
export const getStatus = state => state.profile.status;
export const getIsFetching = state => state.users.isFetching;
export const getProfileData = state => state.profile.profileData;
