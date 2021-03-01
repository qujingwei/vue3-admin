import { axios } from '@/libs/api.request'

export const login = (data) => {
    return axios.request({
        url:'/auth/login',
        methods: 'get',
        params: data
    })
}