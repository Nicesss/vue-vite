import axios from 'axios'

const service = axios.create({
    // baseURL: '',
    timeout: 30 * 1000,
    // 请求是否携带cookie
    withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        }
    },
    err => {
        return Promise.reject(err)
    }
)

export default service