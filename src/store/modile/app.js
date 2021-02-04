import { getMenuByRouter, routerIsexist } from '@/libs/utils'
import routes from '@/router/routers'

export default {
    state: {
        tagNavList:[]
    },
    getters:{
        menuList: () => getMenuByRouter(routes)
    },
    mutations: {
        setTagNavList(state, list = []){
            state.tagNavList.length = 0
            list.forEach(item => {
                state.tagNavList.push(item)
            })
            // state.tagNavList = [...list]
        },
        addTag(state, router){
            if(!routerIsexist(state.tagNavList, router)){
                state.tagNavList.push(router)
            }
        },
        closeTag(state, router){
            if(routerIsexist(state.tagNavList, router)){
                // const nextRouter = getNextRouter(router)
            }
        }
    },
    actions: {

    },
    modules: {

    }
}