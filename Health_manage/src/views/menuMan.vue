<template>
  <div class="menuContainer">
    <el-table
    :data="menuPermissionList"
    row-key="menuid"
    border
    default-expand-all
    :tree-props="{children: 'menus', hasChildren: 'hasChildren'}">
    <el-table-column prop="menuname" label="名称" />
      <el-table-column prop="url" label="路径" />
      <el-table-column label="操作">
        <el-button type="primary" size="mini" icon="el-icon-plus"></el-button>
        <el-button type="primary"  size="mini" icon="el-icon-edit"></el-button>
        <el-button type="primary" size="mini" icon="el-icon-delete"></el-button>
      </el-table-column>
  </el-table>
  </div>
</template>
  
  <script>
export default {
  name: "menuMan",

  data() {
    return {
      expandKeys: [{0:"1"}], // 需要自动展开的项
      dialogPermissionVisible: false, // 是否显示菜单权限的Dialog
      permission: {
        // 要操作的菜单权限对象
        level: 0,
        name: "",
        code: "",
        toCode: ""
      },
      menuPermissionList:[{
        menuid: 100,
          icon: "li-icon-xitongguanli",
          menuname: "全部菜单",
          hasThird: null,
          url: null,
          menus: [
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
    ]
      }
    ]
    };
  },

  computed: {
  },

  mounted() {
    this.fetchPermissionList();
  },

  methods: {

  }
};
</script>
<style>
.menuContainer{
    padding: 20px;
}
</style>
  