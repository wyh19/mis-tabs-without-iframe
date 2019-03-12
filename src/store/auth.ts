process.env.USE_MOCK && require('../mock/auth')

import { observable, action } from 'mobx'
import { authApi } from '../api'

export interface IOperatorInfo {
    name: String
}

export interface IMenuData {
    id: number | string,
    name: string,
    parentId: number | string,
    url: string
}

export interface IAuthStore {
    operatorInfo: IOperatorInfo,
    menus: Array<IMenuData>,
    login: Function,
    getOperatorInfo: Function,
}

class AuthStore implements IAuthStore {
    @observable operatorInfo: IOperatorInfo
    @observable menus: Array<IMenuData>

    constructor() {

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
