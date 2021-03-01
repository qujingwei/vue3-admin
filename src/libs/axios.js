import axios from 'axios'

class HttpRequest {
    constructor(baseUrl = ''){
        this.baseUrl = baseUrl
    }
    getInstanceConfig(){
        return {
            baseUrl: this.baseUrl,
            headers:{

            },
            withCredentials:true
        }
    }
    interceptors(instance){
        // 请求拦截
        instance.interceptors.request.use((config) => {
            if (config.method === 'get') {
                config.params = config.params || {}
                config.params._timeStamp = new Date().getTime()
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        // 响应拦截
        instance.interceptors.response.use((response) => {
            let data = response.data
            let code = data.code
            if(code === '00000'){
                return Promise.resolve(data.data)
            }else{
                return Promise.reject(data)
            }
        }, (error) => {
            return Promise.reject(error)
        })
    }
    request(config){
        config = Object.assign(this.getInstanceConfig(), config)
        const instance = axios.create(config, config.url)
        this.interceptors(instance)
        return instance(config)
    }
}
export default HttpRequest