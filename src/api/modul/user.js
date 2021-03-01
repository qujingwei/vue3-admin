import { axios } from '@/libs/api.request'

export const getUserInfo = (data) => {
    return axios.request({
        url:'/user/get',
        methods: 'get',
        params: data
    })
}