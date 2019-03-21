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
    url: string,
    children?: Array<IMenuData>
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

    /**
     * 格式化Menus数据（无children字段）为嵌套的（目前是两级，应该考虑升级为无限嵌套）
     */
    private formatMenus = (menus: Array<IMenuData>): Array<IMenuData> => {
        let result: Array<IMenuData> = []
        for (let i = 0; i < menus.length; i++) {
            if (!menus[i].parentId || menus[i].parentId == 0) {
                menus[i].children = []
                result.push(menus[i])
            }
        }
        for (let i = 0; i < result.length; i++) {
            let level1 = result[i]
            for (let j = 0; j < menus.length; j++) {
                if (level1.id === menus[j].parentId && level1.children) {
                    level1.children.push(menus[j])
                }
            }
        }
        return result
    }

    @action getOperatorInfo = () => {
        authApi.getOperatorInfo()
            .then((res: any) => {
                this.operatorInfo = res.operatorInfo
                this.menus = this.formatMenus(res.menus)
            })
    }
}

const authStore = new AuthStore()
export { authStore }
