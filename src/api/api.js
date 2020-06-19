import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ae0b838f-0cd8-441f-a726-63236295e269",
    }
});

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
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
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
    },
    saveImage(files) {
        const formData = new FormData();
        formData.append("image", files);
        return instance
            .put("profile/photo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
    },
    saveProfile(values) {
        return instance
            .put("profile", values);
    }
}

export {
    authAPI,
    usersAPI,
    profileAPI,
}

