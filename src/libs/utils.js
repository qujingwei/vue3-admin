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