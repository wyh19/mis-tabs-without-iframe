import * as Mock from 'mockjs'

const menus = [
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

const opretorInfo = {
    name: 'wyh19'

}

Mock.mock('/api/auth/login', 'post', options => {

    return { code: 0, msg: 'success', result: {} }
})

Mock.mock('/api/auth/operator', 'get', options => {

    return {
        code: 0,
        msg: 'success',
        result: {
            opretorInfo,
            menus
        }
    }
})