/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  showFirstOnly: (true)  是否隐藏折叠菜单，当子菜单有一个时生效
 *  noLogin: (false)  设为true后将不进行登录验证
 *  noAccess: (false)  设为true后将不进行权限验证
 *  hideMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 *  multiType: 多开类型,目前同时支持iframe和component两种模式
 *  iframePath: multiType为iframe时iframe标签的src
 *  fakerComponent: multiType为component时component标签的:is属性值
 *  每一个路由对象都必须有唯一name值，后台入库做权限树校验，所以路由的增删改都需要后台更新数据库
 * }
 */

import Main from '@/components/main'
export default [
    {
        path: '/', 
        name:'_home',
        redirect:'/home',
        component: Main,
        meta:{
            title:'首页',
            icon:'el-icon-s-home'
        },
        children:[
            {
                path: 'home', 
                name:'home',
                meta:{
                    title:'首页',
                    icon:'el-icon-s-home'
                },
                component: () => import('@/view/home/home.vue'),
            }
        ]
    },
    { 
        path: '/table', 
        name: 'table', 
        component: Main,
        meta:{
            title:'表格',
            icon:'el-icon-s-cooperation'
        },
        children: [
            {
                path: '/table/index', 
                name: 'tableIndex', 
                meta:{
                    title:'表格'
                },
                component: () => import('@/view/table/index.vue'),
            }
        ]
    },
    { 
        path: '/about', 
        name: 'about', 
        component: Main,
        meta:{
            title:'其他1',
            icon:'el-icon-s-cooperation'
        },
        children: [
            {
                path: '/index', 
                name: 'aboutIndex', 
                meta:{
                    title:'其他2'
                },
                component: () => import('@/view/about/index.vue'),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error_404',
        meta: {
            hideMenu: true
        },
        component: () => import('@/view/error-page/404.vue')
    }
]