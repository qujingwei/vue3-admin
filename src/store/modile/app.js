import { getMenuByRouter } from '@/libs/utils'
import routes from '@/router/routers'

export default {
    state: {

    },
    getters:{
        menuList: () => getMenuByRouter(routes)
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    }
}