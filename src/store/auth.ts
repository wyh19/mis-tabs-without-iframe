process.env.USE_MOCK && require('../mock/auth')

import { observable, action } from 'mobx'
import { authApi } from '../api'

export interface IAuthStore {
    operatorInfo: Object,
    menus: Array<Object>,
    login: Function,
    getOperatorInfo: Function,
}

class AuthStore implements IAuthStore {
    @observable operatorInfo: Object
    @observable menus: Array<Object>

    constructor() {
        this.operatorInfo = {}
    }

    @action login = () => {

    }

    @action getOperatorInfo = () => {
        authApi.getOperatorInfo()
            .then((res: any) => {
                this.operatorInfo = res.operatorInfo
                this.menus = res.menus
            })
    }
}

const authStore = new AuthStore()
export { authStore }
