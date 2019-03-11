import axios from 'axios'

const base = '/api/auth'

export default {
    login: () => {
        return axios.post(`${base}/login`)
    },
    logout: () => {

    },
    getUserInfo: () => {

    }
}