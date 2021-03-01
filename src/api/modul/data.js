import { axios } from '@/libs/api.request'

export const getTable = (params) => {
    return axios.request({
        url:'/data/table',
        method: 'get',
        params: params
    })
}