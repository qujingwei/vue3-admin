import { axios } from '@/libs/api.request'

export const getUserInfo = (data) => {
    return axios.request({
        url:'/api/user/get',
        methods: 'get',
        params: data
    })
}