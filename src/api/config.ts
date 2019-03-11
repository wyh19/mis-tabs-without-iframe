import axios from 'axios'
import * as NProgress from 'nprogress'
import { message } from 'antd'
import '../../node_modules/nprogress/nprogress.css'

//定义服务器字段，统一在这里修改
const serverField = {
    code:'code',
    successCode:'0',
    result:'result',
    msg:'msg'
}

//拦截请求
axios.interceptors.request.use(config => {
    NProgress.start()
    return config
})

//拦截响应
axios.interceptors.response.use(response => {
    NProgress.done()
    if (response.status !== 200) {
        message.error('网络错误')
        return
    }
    if(response.data[serverField.code] == serverField.successCode){
        return response.data[serverField.result]
    }else{
        message.error(response.data[serverField.msg])
        return Promise.reject()
    }
})