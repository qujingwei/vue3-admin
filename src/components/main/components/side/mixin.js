export const showChildren = function(item){
    return item.children && item.children.length > 0
}
export const getName = function (item,children0) {
    return children0 ? item.children[0].name : item.name
}
export const getTitle = function (item) {
    return item.meta && item.meta.title || item.name
}
export const getIcon = function (item) {
    return item.meta && item.meta.icon || ''
}