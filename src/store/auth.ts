import { observable, action } from 'mobx'
import { authApi } from '../api'

class AuthStore {
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