import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 1000,
})
// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.error(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response.data.data)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是 200 的情况
    (error) => {
        console.log('error: ', error)
        if (error?.response?.status) {
            switch (error.response.status) {
                case 401:
                    break
            }
            return Promise.reject(error.response)
        }
    }
)

export default instance
