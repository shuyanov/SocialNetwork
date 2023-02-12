import axios from "axios"


const getUser = (currenPage, totalUsersCount) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/users?page=${currenPage}&count=${totalUsersCount}`,
    {
        withCredentials: true
    });
}

export default getUser;