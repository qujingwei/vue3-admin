import { getMenuByRouter, routerIsexist, getNextRoute, routerEqual } from '@/libs/utils'
import routes from '@/router/routers'
import router from '@/router'
import config from '@/config'
export default {
    state: {
        tagNavList:[]
    },
    getters:{
        menuList: () => getMenuByRouter(routes),
    },
    mutations: {
        setTagNavList(state, list){
            state.tagNavList = [...list]
        },
        addTag(state, route){
            if(!routerIsexist(state.tagNavList, route)){
                state.tagNavList.push(route)
            }
        },
        closeTag(state, route){
            if(config.homeName !== route.name && routerIsexist(state.tagNavList, route)){
                const nextRouter = getNextRoute(state.tagNavList, route)
                state.tagNavList = state.tagNavList.filter(item => !routerEqual(route, item))
                router.push(nextRouter)
            }
        }
    },
    actions: {

    },
    modules: {

    }
}