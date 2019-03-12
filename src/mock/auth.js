import * as Mock from 'mockjs'

Mock.mock('/api/auth/login', 'post', options => {

    return { code: 0, msg: 'success', result: {} }
})

Mock.mock('/api/auth/operator','get',options => {
    
    return { code: 0, msg: 'success', result: {} }
})