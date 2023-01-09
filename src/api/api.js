import axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'fa5fb119-ca51-4300-8b31-288c487815df'
    }
})

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(baseUrl + `users?page=${pageNumber}&count=${pageSize}`, {
            withCredentials: true,
        })
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(baseUrl + `follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'fa5fb119-ca51-4300-8b31-288c487815df'
            }
        })
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(baseUrl + `follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'fa5fb119-ca51-4300-8b31-288c487815df'
            }
        })
            .then(response => response.data)
    }
}       