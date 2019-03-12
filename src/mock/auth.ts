import * as Mock from 'mockjs'
import { IMenuData, IOperatorInfo } from '../store/auth'

const menus: Array<IMenuData> = [
    {
        id: 1,
        name: '基础管理',
        parentId: 0,
        url: ''
    },
    {
        id: 2,
        name: '用户管理',
        parentId: 1,
        url: 'user'
    },
    {
        id: 3,
        name: '菜单管理',
        parentId: 1,
        url: 'menu'
    },
    {
        id: 4,
        name: '角色管理',
        parentId: 1,
        url: 'role'
    }
]

const operatorInfo: IOperatorInfo = {
    name: 'wyh19'

}

Mock.mock('/api/auth/login', 'post', (options: any) => {
    console.log(options)
    return { code: 0, msg: 'success', result: {} }
})

Mock.mock('/api/auth/operator', 'get', (options: any) => {
    console.log(options)
    return {
        code: 0,
        msg: 'success',
        result: {
            operatorInfo,
            menus
        }
    }
})
