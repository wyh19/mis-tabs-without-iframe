import axios from 'axios'


export default {
    login: () => {
        return axios.post('/api/auth/login')
    },
    logout: () => {

    },
    getOperatorInfo: () => {
        return axios.get('/api/auth/operator')
    }
}