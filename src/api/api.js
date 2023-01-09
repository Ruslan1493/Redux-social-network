import axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '79553dac-ad56-4fbe-9b26-d925b4711157'
    }
})

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(baseUrl + `users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(baseUrl + `profile/${userId}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(baseUrl + `follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(baseUrl + `follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(baseUrl + `follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(baseUrl + `auth/me`)
            .then(response => response.data);
    }
}