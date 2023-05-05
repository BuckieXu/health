/**
* 左边菜单
*/ 
<template>
  <el-menu
    default-active="2"
    :collapse="collapsed"
    collapse-transition
    router
    :default-active="$route.path"
    unique-opened
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div class="logobox">
      <div v-show="!collapsed" class="margin-r-20">健康管理系统</div>
      <img class="logoimg" src="../assets/img/logo.png" alt />
    </div>
    <el-menu-item-group v-if="systemmenu.length!=0">
        <el-menu-item  v-for="menu1 in systemmenu" :index="'/'+menu1.url" :key="menu1.menuid">
          <i class="iconfont margin-r-20" :class="menu1.icon"></i>
          <span>{{menu1.menuname}}</span>
        </el-menu-item>
      </el-menu-item-group>
    <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
      <template slot="title">
        <i class="iconfont margin-r-20" :class="menu.icon"></i>
        <span>{{menu.menuname}}</span>
      </template>
      <el-menu-item-group v-if="menu.menus">
        <el-menu-item v-for="chmenu in menu.menus" :index="'/'+chmenu.url" :key="chmenu.menuid">
          <i class="iconfont margin-r-20" :class="chmenu.icon"></i>
          <span>{{chmenu.menuname}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "leftnav",
  data() {
    return {
      collapsed: false,
      allmenu: [],
      systemmenu:[
      ]
    };
  },
  // 创建完毕状态(里面是操作)
  created() {
    let userinfo=localStorage.getItem('userinfo')
    console.log(JSON.parse(userinfo) );
    let admindata=[
      {
          menuid: 45,
              icon: "icon-cs-manage",
              menuname: "首页",
              hasThird: null,
              url: "home"
        },
      {
          menuid: 43,
              icon: "icon-cus-manage",
              menuname: "用户管理",
              hasThird: null,
              url: "user"
        },
        {
          menuid: 44,
              icon: "icon-cms-manage",
              menuname: "我的信息",
              hasThird: null,
              url: "mymsg"
        },
        {
          menuid: 48,
              icon: "icon-news-manage",
              menuname: "角色管理",
              hasThird: null,
              url: "role"
        },
        {
          menuid: 49,
              icon: "icon-news-manage",
              menuname: "菜单管理",
              hasThird: null,
              url: "menuMan"
        },
    ]
    if(JSON.parse(userinfo).roleid==1){
      this.systemmenu=admindata
    }
    // 获取图形验证码
    let res = {
      success: true,
      data: [
        // 用户管理
        // 下面为小程序数据管理
        {
          menuid: 80,
          icon: "li-icon-xitongguanli",
          menuname: "应用管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 81,
              icon: "icon-cus-manage",
              menuname: "宝宝信息管理",
              hasThird: "N",
              url: "app/babymsg",
              menus: null
            },
            {
              menuid: 82,
              icon: "icon-cms-manage",
              menuname: "百科信息管理",
              hasThird: "N",
              url: "app/baike",
              menus: null
            },
            {
              menuid: 83,
              icon: "icon-news-manage",
              menuname: "疫苗接种管理",
              hasThird: "N",
              url: "app/vaccine",
              menus: null
            },
            {
              menuid: 84,
              icon: "icon-cs-manage",
              menuname: "辅食信息管理",
              hasThird: "N",
              url: "app/diet",
              menus: null
            },
            {
              menuid: 85,
              icon: "icon-promotion-manage",
              menuname: "运动信息管理",
              hasThird: "N",
              url: "app/exercise",
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: "li-icon-shangchengxitongtubiaozitihuayuanwenjian91",
          menuname: "图表",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "icon-provider-manage",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null
            },
          ]
        }
      ],
       
      msg: "success"
    };
    this.allmenu = res.data;

    // menu(localStorage.getItem('logintoken'))
    //   .then(res => {
    //     console.log(JSON.stringify(res))
    //     if (res.success) {
    //       this.allmenu = res.data
    //     } else {
    //       this.$message.error(res.msg)
    //       return false
    //     }
    //   })
    //   .catch(err => {
    //     this.$message.error('菜单加载失败，请稍后再试！')
    //   })
    // 监听
    this.$root.Bus.$on("toggle", value => {
      this.collapsed = !value;
    });
  },

};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
  text-align: left;
}
.el-menu-item-group__title {
  padding: 0px;
}
.el-menu-bg {
  background-color: #1f2d3d !important;
}
.el-menu {
  border: none;
}
.logobox {
  height: 40px;
  line-height: 40px;
  color: #ffd04b;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
  display: flex;
  justify-content: center;

}
.logoimg {
  height: 40px;
}
.margin-r-20{
  margin-right: 20px;
}
</style>