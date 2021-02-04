
/**
 * 判断两个对象是否相等 
 */
export const objEqual = (obj1, obj2) => {
    // 是否是对象
    if(!(obj1 instanceof Object) || !(obj2 instanceof Object)) return false
    // 可枚举属性是否一样多
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length) return false
    // 递归比较属性值是否相同
    for (let index = 0; index < keys1.length; index++) {
        const key = keys1[index];
        if(obj1[key] instanceof Object && obj2[key] instanceof Object){
            objEqual(obj1[key], obj2[key])
        }else if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}