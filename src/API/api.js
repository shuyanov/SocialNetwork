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
        //toogleFollowProgress(true, id)
        return instance.delete(`follow/${id}`)
        // .then(response => {
        //     if (response.data.resultCode == 0) {
        //         unfollow(id)
        //     }
        //     toogleFollowProgress(false, id)
        // });
    },

    getUserButtonFollow(id) {
        // toogleFollowProgress(true, id)
        //  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
        //      {
        //         withCredentials: true,
        //         headers: { 'API-KEY': '3ca66285-a17e-478c-8427-4e5ffbf8bfbb' }
        //      })
        //    .then(response => {
        //         if (response.data.resultCode == 0) {
        //             follow(id)
        //         }
        //         toogleFollowProgress(false, id)
        //     });
         return instance.post(`follow/${id}`)
    },

    getProfile(userId) {
        return instance.get(`profile/`+ userId)
        // .then(response => {
        //     setUsersProfile(response.data)
        //     setContacts(response.data)
        // });
    },

    getHeader() {
        return instance.get(`/auth/me`)
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, login, email } = response.data.data;
        //             setAuthUserData(id, email, login);
        //         }
        //     });
        // ;
    }
}


export default userAPI;
