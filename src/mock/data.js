import Mock from 'mockjs'
import { doCustomTimes, dataSupplement, getMockParams } from '@/libs/utils'

export const getTableData = (req) => {
    const params = getMockParams(req)
    const time = params.pageSize || 10
    let list = []
    doCustomTimes(time, () => {
        list.push(
            Mock.mock({
                name: '@name',
                email: '@email',
                createTime: '@date'
            })
        )
    })
    const data = {
        data: list,
        total: 300,
        pageSize: Number(params.pageSize),
        pageNumber: Number(params.pageNumber)
    }
    return dataSupplement(data)
}