import { axios } from '@/libs/api.request'

export const getAuth = (data) => {
    return axios.request({
        url:'/api/auth/get',
        methods: 'get',
        params: data
    })
}