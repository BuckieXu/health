/**
 * 应用管理 辅食信息
 */
<template>
  <div class="dietContainer">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>辅食信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formInline.dietName" placeholder="输入辅食名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select size="small" v-model="formInline.foodclass" placeholder="请选择">
          <el-option
            v-for="type in classType"
            :label="type.key"
            :value="type.value"
            :key="type.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="addDiet">添加</el-button>
        <el-button size="small" type="primary" icon="el-icon-refresh" @click="refresh">刷新</el-button>

      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table
      size="small"
      :data="AllDietList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      border
      style="width: 100%;"
    >
      <el-table-column align="center" type="index" width="60"></el-table-column>
      <el-table-column sortable prop="dietName" label="辅食名称" width="110" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="ageGroup" label="月龄" width="70" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="dietId" label="辅食ID" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="efficacy" label="功效" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="foodclass" label="辅食分类" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="describe" label="辅食描述" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="foodMaterial" label="制作食材" width="180" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="process" label="制作步骤" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="displaysrc" label="展示图片" width="100" empty-text show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
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
      :total="AllDietList.length"
    ></el-pagination>
    <!-- 编辑界面 -->
    <el-dialog
      :title="title"
      :visible.sync="editFormVisible"
      width="30%"
      class="dialogClass"
      top="40px"
      @click="closeDialog('editForm')"
    >
      <el-form label-width="120px" :model="editForm" :rules="rules" ref="editForm">
        <el-form-item label="辅食名称" prop="dietName">
          <el-input
            size="small"
            v-model="editForm.dietName"
            auto-complete="off"
            placeholder="请输入辅食名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="辅食分类" prop="foodclass">
          <el-select
            size="small"
            v-model="editForm.foodclass"
            placeholder="请选择辅食分类"
            class="userRole"
          >
            <el-option
              v-for="type in classType"
              :label="type.key"
              :value="type.key"
              :key="type.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="展示图片" prop="displaysrc">
          <el-input
            size="small"
            v-model="editForm.displaysrc"
            auto-complete="off"
            placeholder="请输入展示图片"
          ></el-input>
        </el-form-item>
        <el-form-item label="月龄" prop="ageGroup">
          <el-input
            size="small"
            v-model="editForm.ageGroup"
            auto-complete="off"
            placeholder="请输入月龄"
          ></el-input>
        </el-form-item>
        <el-form-item label="功效" prop="efficacy">
          <el-input
            size="small"
            v-model="editForm.efficacy"
            auto-complete="off"
            placeholder="请输入功效"
          ></el-input>
        </el-form-item>
        <el-form-item label="辅食描述" prop="describe">
          <el-input
            size="small"
            v-model="editForm.describe"
            auto-complete="off"
            placeholder="请输入辅食描述"
          ></el-input>
        </el-form-item>
        <el-form-item label="制作食材" prop="foodMaterial">
          <el-input
            size="small"
            v-model="editForm.foodMaterial"
            auto-complete="off"
            placeholder="请输入制作食材"
          ></el-input>
        </el-form-item>
        <el-form-item label="制作步骤" prop="process">
          <el-input
            size="small"
            v-model="editForm.process"
            auto-complete="off"
            placeholder="请输入制作步骤"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeDialog('editForm')">取消</el-button>
        <el-button
          size="small"
          type="primary"
          class="title"
          @click="submitForm('editForm')"
          v-if="oper==0"
        >添加</el-button>
        <el-button
          size="small"
          type="primary"
          class="title"
          @click="changeEdit()"
          v-if="oper==1"
        >保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: "添加",
      classType: [
        { key: "全部", value: 0 },
        { key: "粥饭汤羹", value: 1 },
        { key: "肉类", value: 2 },
        { key: "鱼虾水产", value: 3 },
        { key: "水果类", value: 4 },
        { key: "蛋奶豆类", value: 5 },
        { key: "蔬菜类", value: 6 }
      ],
      editForm: {
        dietName: "",
        foodclass: "",
        displaysrc: "",
        ageGroup: "",
        efficacy: "",
        describe: "",
        foodMaterial: "",
        process: ""
      },
      // rules表单验证
      rules: {
        dietName: [
          { required: true, message: "请输入辅食名称", trigger: "blur" }
        ],
        foodclass: [
          { required: true, message: "请选择辅食类别", trigger: "blur" }
        ],
        displaysrc: [
          { required: true, message: "请输入展示图片", trigger: "blur" }
        ],
        ageGroup: [
          { required: true, message: "请输入适宜年龄", trigger: "blur" }
        ],
        efficacy: [{ required: true, message: "请输入功效", trigger: "blur" }],
        describe: [
          { required: true, message: "请输入辅食描述", trigger: "blur" }
        ],
        foodMaterial: [
          { required: true, message: "请输入制作食材", trigger: "blur" }
        ],
        process: [
          { required: true, message: "请输入制作步骤", trigger: "blur" }
        ]
      },
      formInline: {
        foodclass: "",
        dietName: ""
      },
      // 删除辅食数据
      seletedata: {
        ids: "",
        token: localStorage.getItem("logintoken")
      },
      userparm: [], //搜索权限
      currentPage: 1,
      pageSize: 10,
      dietId:'',
      oper:0
    };
  },
  computed: {
    ...mapState({
      AllDietList: state => state.diet.AllDietList
    })
  },
  /**
   * 数据发生改变
   */

  /**
   * 创建完毕
   */
  created() {
    this.$store.dispatch("getAllDiet");
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

    // 搜索事件
    search() {
      let paramsList = {};
      paramsList.class = "foodclass";
      paramsList.value = this.classType[this.formInline.foodclass].key;
      if(this.formInline.foodclass==0){
    this.$store.dispatch("getAllDiet");
      }else{
        this.$store.dispatch("getDietByValue", paramsList);

      }
    },
    //显示编辑界面
    handleEdit: function(e,row) {
        this.editForm.dietName=row.dietName,
        this.editForm.foodclass=row.foodclass,
        this.editForm.displaysrc=row.displaysrc,
        this.editForm.ageGroup=row.ageGroup,
        this.editForm.efficacy=row.efficacy,
        this.editForm.describe=row.describe,
        this.editForm.foodMaterial=row.foodMaterial,
        this.editForm.process=row.process
      this.dietId=row.dietId
      this.oper=1;
      this.editFormVisible = true;
    },
    addDiet(){
      this.oper=0;
      this.editFormVisible = true;   
    },
    // 增加数据方法
    async submitForm() {
      // 添加数据
      let editForm = this.editForm;
      if (
        editForm.dietName &&
        editForm.foodclass &&
        editForm.ageGroup &&
        editForm.efficacy &&
        editForm.describe &&
        editForm.describe &&
        editForm.process
      ) {
        await this.$store.dispatch("addDiet", this.editForm);
        await this.$store.dispatch("getAllDiet");
        this.editFormVisible = false;
        this.editForm = {
          dietName: "",
          foodclass: "",
          displaysrc: "",
          ageGroup: "",
          efficacy: "",
          describe: "",
          foodMaterial: "",
          process: ""
        };
      } else {
        this.$message({
          message: "请完善信息",
          type: "warning"
        });
      }
    },
    async changeEdit() {
      // 编辑数据
      let editForm = this.editForm;
      editForm.dietId=this.dietId
      if (
        editForm.dietName &&
        editForm.foodclass &&
        editForm.ageGroup &&
        editForm.efficacy &&
        editForm.describe &&
        editForm.describe &&
        editForm.process
      ) {
        await this.$store.dispatch("changeDietFn",editForm);
        await this.$store.dispatch("getAllDiet");
        this.editFormVisible = false;    
        this.editForm = {
          dietName: "",
          foodclass: "",
          displaysrc: "",
          ageGroup: "",
          efficacy: "",
          describe: "",
          foodMaterial: "",
          process: ""
        };
      } else {
        this.$message({
          message: "请完善信息",
          type: "warning"
        });
      }
    },
    // 删除辅食
     deleteUser(e, data) {
      this.$confirm('此操作会永久删除数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch("deleteDiet", data.dietId);
          this.$store.dispatch("getAllDiet");
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '已取消删除'
          });          
        });
      this.$store.dispatch("deleteDiet", data.dietId);

    },
    refresh(){
      this.$store.dispatch("getAllDiet");
    },
    // 关闭编辑、增加弹出框
    closeDialog(formName) {
      this.editFormVisible = false;
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.dietContainer {
  padding-top: 20px;
  padding-left: 20px;
}

.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
.dialogClass{
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 10%;
}
</style>

 
 