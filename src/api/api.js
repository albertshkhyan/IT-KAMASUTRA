import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ae0b838f-0cd8-441f-a726-63236295e269",
    }
});

// const APIRequests = {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance
//             .get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
//     },

//     deleteFollow(id) {
//         return instance
//             .delete(`follow/${id}`).then(response => response.data);
//     },

//     postFollw(id) {//follwo fix name
//         return instance
//             .post(`follow/${id}`).then(response => response.data);
//     },

//     authMe() {
//         return instance.get(`auth/me`).then(response => response.data);
//     },

//     profile(userID = 7837) {//ge4Me
//         return instance
//             .get(`profile/${userID}`).then(response => response.data);
//     },
// }

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    deleteFollow(id) {
        return instance
            .delete(`follow/${id}`);
    },
    postFollow(id) {//
        return instance
            .post(`follow/${id}`);
    },

    profile(userID) {
        return profileAPI.profile(userID);
    },
}


const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
}

const profileAPI = {
    
    profile(userID) {
        return instance
            .get(`profile/${userID}`);
    },
    getStatus(id) {
        return instance
            .get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance
            .put("profile/status", { status });
    }
}

export {
    authAPI,
    usersAPI,
    profileAPI,
}

