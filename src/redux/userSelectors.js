import { createSelector } from "reselect";


/**
 * A selector is a function that accepts Redux state as an argument and returns data that is derived from that state. Selectors can provide performance optimizations to your application and can also help you encapsulate your global state tree.
 */
//ProfileContainer
export const getUserId = state => {
    return state.auth.id;
};
export const getIsAuth = state => state.auth.isAuth;
export const getStatus = state => state.profile.status;
export const getIsFetching = state => state.users.isFetching;
export const getProfileData = state => state.profile.profileData;

// export const getUsers = (state) => state.users.filter(u => true);


//UserContainer


////primitive selector - variant 1
// export const getUsers = state => state.users.users;//not do re-render, becaiuse this selector return primitve value, BUT -> only called mpaStateToProps 👍

////reference selector- variant 2
// export const getUsers = state => state.users.users.filter(u => true);//mpaStateToProps -> render, mpaStateToProps -> render and etc ♾ 😨😨

export const getTotalCount = state => state.users.totalCount;
export const getCurrentPage = state => state.users.currentPage;
export const getPageSize = state => state.users.pageSize;
export const getFollowingInProgress = state => state.users.followingInProgress;


////with reselect - good perfomance 👍

const getUsersSelector = state => state.users.users;

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});