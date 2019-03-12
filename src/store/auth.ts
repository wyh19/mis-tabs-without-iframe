import { observable, action } from 'mobx'
import { authApi } from '../api'

export interface IAuthStore {
    operatorInfo: object,
    login: Function,
    getOperatorInfo: Function,
}

class AuthStore implements IAuthStore {
    @observable operatorInfo: object

    constructor() {
        this.operatorInfo = {}
    }

    @action login = () => {

    }

    @action getOperatorInfo = () => {
        authApi.getOperatorInfo()
            .then(res => {

            })
    }
}

const authStore = new AuthStore()
export { authStore }
