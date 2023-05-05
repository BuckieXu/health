import {router,routerCpt,constantRoutes,routes} from '@/router/index.js';
function addRouter(item,NewRou){
    item.component=NewRou[item.title]
    if(item.children){
      item.children.forEach(tmp =>addRouter(tmp,NewRou));
    }
  }
router.beforeEach(async(to, from, next) => {
    console.log(to);
    console.log(123);
    let token = localStorage.getItem('TOKEN')
    let menu = JSON.parse(sessionStorage.getItem('menu'))
    if (token!==null) {
        if(router.getRoutes().length<=2){
            console.log(router.getRoutes());
            menu.forEach((item) => {
                addRouter(item,routerCpt)
              })
               for (let i = 0; i < menu.length; i++) {
                router.addRoute(menu[i]);       
               }
            console.log(router.getRoutes());
               next({path:to.path}) 
        }else{
            next()
        }
     
       
    } else {
        //防止无限循环
        if (to.path === '/login') {
            next();
            return
        }
            next('/login')
        }
    }
)

