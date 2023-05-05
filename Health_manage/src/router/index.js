// 导入组件
import Vue from 'vue';
import Router from 'vue-router';

// 登录
import login from '@/views/login';
// 首页
import home from '@/views/home';

import layout from '@/views/layout';
/**
 * 基础菜单
 */
// 用户管理
import user from '@/views/user'
// 我的信息
import mymsg from '@/views/Mymsg'
// 角色管理
import role from '@/views/role'
/**
 * 应用管理
 */
// 宝宝信息管理
import babymsg from "@/views/app/babymsg";
// 百科信息管理
import baike from "@/views/app/baike";
// 辅食信息管理
import diet from "@/views/app/diet";
// 运动信息管理
import exercise from "@/views/app/exercise";
// 疫苗接种管理
import vaccine from "@/views/app/vaccine";

// 图表界面
import statistics from '@/views/charts/statistics';


const routerCpt={
    layout:() => import("@/views/layout"),
    home:() => import("@/views/home"),
    user:() => import("@/views/user"),
    mymsg:() => import("@/views/Mymsg"),
    role:() => import("@/views/role"),
    babymsg:() => import("@/views/app/babymsg"),
    baike:() => import("@/views/app/diet"),
    diet:() => import("@/views/app/diet"),
    exercise:() => import("@/views/app/exercise"),
    vaccine:() => import("@/views/app/vaccine"),
    statistics:() => import("@/views/charts/statistics"),
    menuMan:() => import("@/views/menuMan")

}
// 启用路由
Vue.use(Router);
// 进入管理系统都可以看到的路由
const constantRoutes=[{
    path: '/',
    redirect:'/login',
    hidden: true,
    meta: {
        requireAuth: false
    }
}, {
    path: '/login',
    name: '登录',
    component:() => import("@/views/login"),
    hidden: true,
    meta: {
        requireAuth: false
    }
}
]
const adyncRoutes=[
    {
        path: '/layout',
        name: '路由分配',
        component: layout,
        iconCls: 'el-icon-tickets',
        children: [
            {
                path: '/charts/statistics',
                name: '数据可视化',
                component: statistics,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/home',
                name: '首页',
                component: home,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/app/babymsg',
                name: '宝宝信息',
                component: babymsg,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/app/baike',
                name: '育儿百科',
                component: baike,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/app/diet',
                name: '辅食',
                component: diet,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/app/exercise',
                name: '身体锻炼',
                component: exercise,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/app/vaccine',
                name: '疫苗接种',
                component: vaccine,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/user',
                name: '用户管理',
                component: user,
                meta: {
                    requireAuth: true
                }
            }, 
            {
                path: '/mymsg',
                name: '我的信息',
                component: mymsg,
                meta: {
                    requireAuth: true
                }
            }, 
            {
                path: '/role',
                name: '角色管理',
                component: role,
                meta: {
                    requireAuth: true
                }
            }
        ]
    }
]
//把人家原型对象的push方法进行保存
let originPush = Router.prototype.push;
let originReplace = Router.prototype.replace;
Router.prototype.push = function (location, resolve, reject) {
    //当前函数this：即为VueRouter类的实例
    //相当于push方法里面this，是windows【完犊子了】
    //利用人家push方法实现路由跳转，保证push里面this,应该vueRouter类的实例

    //面试:函数apply与call区别?
    //相同的地方:都可以篡改函数里面this
    //不同的地方:apply传递参数 数组  call传递参数 逗号分割

    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
Router.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
// 导出路由 
const router= new Router({
routes:constantRoutes
})

export {
    router,routerCpt,constantRoutes
}
