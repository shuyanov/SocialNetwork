import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '3ca66285-a17e-478c-8427-4e5ffbf8bfbb' }
});

export const userAPI = {

    getUser(currenPage, totalUsersCount) {
        return instance.get(`users?page=${currenPage}&count=${totalUsersCount}`)
            .then(response => {
                return response.data;
            })
    },

    getUserButtonUnfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    getUserButtonFollow(id) {
         return instance.post(`follow/${id}`)
    },

    getProfile(userId) {
        console.warn('Obselut method. Pleas')
        return profileAPI.getProfile(userId);
        //return instance.get(`profile/`+ userId)
    },

    getHeader() {
        return instance.get(`/auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}


export default userAPI;
