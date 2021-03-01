import Mock from 'mockjs'

export const login = () => {
    return Mock.mock({
        name: '@name',
        email: '@email',
        createTime: '@date'
    })
}