<template>
  <div class="baikeContainer">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search">
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="handleadd">添加</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table
      size="small"
      :data="roleList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      border
      element-loading-text="拼命加载中"
      style="width: 100%;"
    >
      <el-table-column prop="roleid" label="ID" width="250"></el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="200" show-overflow-tooltip></el-table-column>
      <el-table-column prop="describe" label="角色描述" width="250" show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="创建时间" width="250" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handledelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="roleList.length"
    ></el-pagination>
    <!-- 添加角色表单 -->
    <el-dialog title="新增角色" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="roleinfo">
        <el-form-item label="角色id" :label-width="formLabelWidth">
          <el-input v-model="roleinfo.roleid" autocomplete="off" placeholder="请输入角色id"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="roleinfo.rolename" autocomplete="off" placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="formLabelWidth">
          <el-input v-model="roleinfo.describe" autocomplete="off" placeholder="请输入角色描述"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
  <script>
import { mapState } from "vuex";
import { timestampToTime } from "@/utils/util";

export default {
  name: "vaccine",
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      dialogFormVisible: false,
      roleinfo: {
        roleid: "",
        rolename: "",
        describe: ""
      },
      formLabelWidth: "100px"
    };
  },
  computed: {
    ...mapState({
      roleList: state => {
        return state.USER.roleList;
      }
    })
  },
  created() {
    this.getALLRole();
  },
  methods: {
    getALLRole() {
      this.$store.dispatch("getallrole");
    },
    handleadd() {
      this.dialogFormVisible = true;
    },
    // 取消添加角色
    cancelAdd() {
      (this.roleinfo = {
        roleid: "",
        rolename: "",
        describe: ""
      }),
        (this.dialogFormVisible = false);
    },
    // 添加角色确认
    async confirmAdd() {
      let roleinfo = this.roleinfo;
      roleinfo.time = timestampToTime(new Date());
      await this.$store.dispatch("addrole",roleinfo); 
      (this.roleinfo = {
        roleid: "",
        rolename: "",
        describe: ""
      }),
      this.getALLRole()
        (this.dialogFormVisible = false);
    },
    // 删除角色
     handledelete(index,row){
      if(row.describe=='此角色不可删除'){
        this.$message({
            type: 'warning',
            message: '此角色不可删除'
          }); 
      }else{
        this.$confirm('此操作会永久删除数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.$store.dispatch("deleterole",row.roleid);
           this.$store.dispatch("getallrole");
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '已取消删除'
          });          
        });
        this.$store.dispatch("getallrole");
      }
         



    }
  }
};
</script>
  
  <style scoped>
.baikeContainer {
  padding-top: 20px;
  padding-left: 20px;
}

.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
</style>