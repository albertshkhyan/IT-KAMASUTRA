import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ae0b838f-0cd8-441f-a726-63236295e269",
    }
});

const APIRequests = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    deleteFollow(id) {
        return instance
            .delete(`follow/${id}`).then(response => response.data);
    },

    postFollw(id) {
        return instance
            .post(`follow/${id}`).then(response => response.data);
    },

    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },

    profile(userID = 7837) {
        return instance
            .get(`profile/${userID}`).then(response => response.data);
    },
}


export default APIRequests;