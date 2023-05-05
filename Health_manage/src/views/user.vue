/**
 * 应用管理 辅食信息
 */
<template>
  <div class="userContainer">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formInline.userId" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" icon="el-icon-search" @click="search">查询</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="addUser">新增</el-button>
        <el-button size="small" type="danger" icon="el-icon-delete">批量删除</el-button>
        <el-button size="small" type="info" icon="el-icon-refresh" @click="refresh">重置</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table
      size="small"
      :data="userList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      border
      style="width: 100%;"
    >
      <el-table-column align="center" type="index" width="60"></el-table-column>
      <el-table-column prop="userId" label="账号" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column prop="username" label="用户" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="roleid" label="所属角色" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column prop="email" label="邮箱" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phone" label="手机号" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sex" label="性别" width="80" show-overflow-tooltip></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="warning"
            icon="el-icon-star-off"
            @click="roleEdit(scope.$index, scope.row)"
          >角色</el-button>
          <el-button
            size="mini"
            type="success"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteUser(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userList.length"
    ></el-pagination>
    <!-- 添加用户弹出框 -->
    <el-dialog
      title="用户信息"
      :visible.sync="editFormVisible"
      label-width="100px"
      top="10px"
      class="userClass"
    >
      <el-form :model="userInfo" :rules="rules" ref="userInfo">
        <el-form-item label="账号" prop="userId" :label-width="formLabelWidth">
          <el-input v-model="userInfo.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="userInfo.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname" :label-width="formLabelWidth">
          <el-input v-model="userInfo.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roleid" :label-width="formLabelWidth">
          <el-select v-model="userInfo.roleid" placeholder="请选择用户角色">
            <el-option label="系统管理员" value="1"></el-option>
            <el-option label="运维人员" value="2"></el-option>
            <el-option label="普通人员" value="3"></el-option>
            <el-option label="测试人员" value="4"></el-option>
            <el-option label="开发人员" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
          <el-input v-model="userInfo.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
          <el-input v-model="userInfo.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="userInfo.sex" placeholder="请选择性别">
            <el-option label="女" value="0"></el-option>
            <el-option label="男" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
          <el-input v-model="userInfo.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth" v-if="UKnum==0">
          <el-input v-model="password2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userInfo')" v-if="UKnum==0">立即创建</el-button>
          <el-button type="primary" @click="saveUser" v-else>保存</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="用户信息"
      :visible.sync="rolesshow"
      label-width="80px"
      top="150px"
      class="userClass"
    >
      <el-form :model="userInfo" ref="userInfo">
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="userInfo.username" autocomplete="off" :disabled=true ></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roleid" :label-width="formLabelWidth">
          <el-select v-model="userInfo.roleid" placeholder="请选择用户角色">
            <el-option label="系统管理员" value="1"></el-option>
            <el-option label="运维人员" value="2"></el-option>
            <el-option label="普通人员" value="3"></el-option>
            <el-option label="测试人员" value="4"></el-option>
            <el-option label="开发人员" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveRole">保存</el-button>
          <el-button @click="canceledieRole">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { timestampToTime } from "@/utils/util";
export default {
  data() {
    return {
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: "添加",
      currentPage: 1,
      pageSize: 10,
      formInline: {
        userId: ""
      },
      userInfo: {
        userId: "",
        username: "",
        nickname: "",
        roleid: "",
        email: "",
        phone: "",
        sex: "",
        password: "",
        createTime: ""
      },
      UKnum: 0,
      password2: "",
      formLabelWidth: "120px",
      rules: {
        userId: [{ required: true, message: "请输入账号", trigger: "blur" }],
        username: [
          { required: true, message: "请选择用户名", trigger: "blur" }
        ],
        nickname: [{ required: true, message: "请选择昵称", trigger: "blur" }],
        role: [{ required: true, message: "请选择用户角色", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      rolesshow:false
    };
  },
  computed: {
    ...mapState({
      userList: state => state.USER.userList
    })
  },
  /**
   * 数据发生改变
   */

  /**
   * 创建完毕
   */
  created() {
    this.$store.dispatch("getAllUserMsg");
  },

  /**
   * 里面的方法只有被调用才会执行
   */
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 分页插件事件
    refresh() {
      this.formInline.userId = "";
      this.$store.dispatch("getAllUserMsg");
    },
    // 通过用户ID查询信息
    search() {
      if (this.formInline.userId == "") {
        this.$store.dispatch("getAllUserMsg");
      } else {
        this.$store.dispatch("getUserById", this.formInline.userId);
      }
    },
    addUser() {
      this.UKnum = 0;
      this.editFormVisible = true;
    },
    // 提交注册
    async submitForm(userInfo) {
      if (this.password2 == this.userInfo.password) {
        let userInfo = this.userInfo;
        userInfo.createTime = timestampToTime(new Date());
        await this.$store.dispatch("register", userInfo);
        this.refresh();
        (this.userInfo = {
          userId: "",
          username: "",
          nickname: "",
          role: "",
          email: "",
          phone: "",
          sex: "",
          password: "",
          createTime: ""
        }),
          (this.editFormVisible = false);
      } else {
        this.$message({
          message: "需要和密码保持一致",
          type: "error"
        });
        this.editFormVisible = false;
      }
    },
    // 重置
    resetForm() {
      this.userInfo = {
        userId: "",
        username: "",
        nickname: "",
        role: "",
        email: "",
        phone: "",
        sex: "",
        password: ""
      };
    },
    handleEdit(index, row) {
      let {
        userId,
        username,
        nickname,
        role,
        email,
        phone,
        sex,
        password
      } = row;
      this.userInfo = {
        userId,
        username,
        nickname,
        role,
        email,
        phone,
        sex,
        password,
        createTime: timestampToTime(new Date())
      };
      this.UKnum = 1;
      this.editFormVisible = true;
    },
    // 保存
    async saveUser() {
      await this.$store.dispatch("editUser", this.userInfo);
      this.$store.dispatch("getAllUserMsg");
      this.editFormVisible = false;
    },
    // 编辑用户角色
    roleEdit(index,row){
this.rolesshow=true
this.userInfo={
        userId:row.userId,
        username:row.username,
        nickname:row.nickname,
        roleid: row.roleid,
        email:row.email,
        phone:row.phone,
        sex: row.sex,
        password:row.password,
        createTime:timestampToTime(new Date())
      }
    },
    // 保存用户角色
   async saveRole(){
      await this.$store.dispatch("editUser", this.userInfo);
      this.$store.dispatch("getAllUserMsg");
      this.rolesshow=false
    },
    canceledieRole(){
      this.rolesshow=false
    },
    // 删除
    deleteUser(index, row) {
      this.$confirm("此操作会永久删除数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch("deleteUserById", row.userId);
          this.$store.dispatch("getAllUserMsg");
        })
        .catch(() => {
          this.$message({
            type: "success",
            message: "已取消删除"
          });
        });
      this.$store.dispatch("getAllUserMsg");
    }
  }
};
</script>

<style scoped>
.userContainer {
  padding-top: 20px;
  padding-left: 20px;
}

.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
.dialogClass {
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 10%;
}
.userClass {
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 10%;
}
</style>

 
 