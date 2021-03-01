import { objEqual } from './tools'

/**
 * @param {Array} list 路由列表
 * @returns {Array} list 需要显示的路由列表
 */
export const getMenuByRouter = (list=[]) => {
    let res = []
    list.forEach(item => {
        if(!item.meta || !item.meta.hideMenu){
            let obj = {
                icon:(item.meta && item.meta.icon) || '',
                name:item.name,
                meta:item.meta
            }
            if(item.children && item.children.length > 0){
                obj.children = getMenuByRouter(item.children)
            }
            res.push(obj)
        }
    })
    return res
}

/**
 * 判断当前打开的路由列表是否存在 参数router
 * @param {Array} list 路由列表
 * @router {Object} 路由对象
 */
export const routerIsexist = (list = [], router = {}) => {
    return !!list.find(item => routerEqual(item,router))
}

/**
 * 判断两个路由是否相等
 */
export const routerEqual = (route1, route2) => {
    const params1 = route1.params || {}
    const params2 = route2.params || {}
    const query1 = route1.query || {}
    const query2 = route2.query || {}
    return route1.name === route2.name && objEqual(params1, params2) && objEqual(query1, query2)
}

/**
 * 判断当前打开的路由列表是否存在 参数router
 * @param {Array} list 路由列表
 * @router {Object} 路由对象
 */
export const getNextRoute = (list, route) => {
    let res = null
    if(list && list.length > 0){
        let index = list.findIndex(item => routerEqual(item, route))
        if(index === list.length - 1){
            res = list[index - 1]
        }else{
            res = list[index + 1]
        }
    }
    return res
}

/**
 * 获取home路由
 */
export const getHomeRoute = (routes, name='home') => {
    let route = {}
    for (let index = 0; index < routes.length; index++) {
        const element = routes[index];
        if(element.name === name){
            route = element
            break
        }else{
            if(element.children && element.children.length){
                return getHomeRoute(element.children, name)
            }
        }
    }
    return route
}