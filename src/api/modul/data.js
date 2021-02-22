import { axios } from '@/libs/api.request'

export const getTable = (data) => {
    return axios.request({
        url:'/api/table/get',
        methods: 'get',
        params: data
    })
}