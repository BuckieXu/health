<template>
  <div class="vaccineContainer">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>宝宝信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formInline.babyid" placeholder="请输入宝宝ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button size="small" type="primary" icon="el-icon-refresh" @click="refresh" >刷新</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table
      size="small"
      :data="babylist.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      border
      style="width: 100%;"
    >
      <el-table-column align="center" type="index" width="60"></el-table-column>
      <el-table-column prop="nickname" label="疫苗名称" width="150"></el-table-column>
      <el-table-column sortable prop="birth" label="出生日期" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="babyid" label="宝宝ID" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="height" label="身高" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="weight" label="体重" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column prop="userId" label="用户ID" width="150"></el-table-column>
      <el-table-column prop="pic_url" label="宝宝头像" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteMsg(scope.$index, scope.row)">删除</el-button>
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
      :total="babylist.length"
    ></el-pagination>
    <!-- 添加基本疫苗页面 -->
    <!-- <el-dialog title="添加疫苗" :visible.sync="dialogFormVisible" width="30%" top="30vh">
      <el-input v-model="addBabyid" autocomplete="off" placeholder="请输入需要添加疫苗的宝宝ID"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelFn">取 消</el-button>
        <el-button type="primary" @click="addVaccineFn">确 定</el-button>
      </div>
    </el-dialog> -->
    <!-- 疫苗详情弹出框 -->
    <!-- <el-dialog title="疫苗详情" :visible.sync="detailShow" width="40%" class="dialogclass" top="30px">
      <el-form :model="vaccineDetail">
        <el-form-item label="疫苗名称" :label-width="formLabelWidth">
          <el-input v-model="vaccineDetail.vaccineName" autocomplete="off" disabled='true'></el-input>
        </el-form-item>
        <el-form-item label="疫苗种类" :label-width="formLabelWidth">
          <el-input v-model="vaccineDetail.vaccineGroup" autocomplete="off" disabled='true'></el-input>
        </el-form-item>
        <el-form-item label="接种次数" :label-width="formLabelWidth">
          <el-input v-model="vaccineDetail.num" autocomplete="off" disabled='true'></el-input>
        </el-form-item>
        <el-form-item label="接种总数" :label-width="formLabelWidth">
          <el-input v-model="vaccineDetail.sum" autocomplete="off" disabled='true'></el-input>
        </el-form-item>
        <el-form-item label="接种状态" :label-width="formLabelWidth">
          <el-select v-model="vaccineDetail.status" placeholder="请选择活动区域">
            <el-option label="已接种" value="已接种"></el-option>
            <el-option label="未接种" value="未接种"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接种时间" :label-width="formLabelWidth">
          <el-date-picker v-model="timeValue" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="疫苗介绍" :label-width="formLabelWidth">
          <el-input v-model="vaccineDetail.include" autocomplete="off" type="textarea" autosize></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="SaveCansel">取消</el-button>
        <el-button type="primary" @click="SaveEdit">保存</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>
<script>
import {getAllBaby,getBabyById} from '@/api/baby'
export default {
  name: "vaccine",
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      formInline: {
        babyid: "",
        vaccineGroup: "",
        ageGroup: ""
      },
      babylist:[],
      dialogFormVisible: false,
      detailShow: false, //疫苗详情弹出框
      timeValue:'',
      formLabelWidth: "120px"
    };
  },
  created() {
    this.getAllbaby();
  },
  methods: {
    search() {
      //  通过宝宝ID搜索疫苗信息
      this.getBabyById()
      this.formInline.babyid=''
    },
    // 获取所有疫苗
    async getAllbaby() {
      let result=await getAllBaby()
      this.babylist=result.data
    },
    refresh(){
this.getAllbaby()
    },
    // 通过宝宝ID获取信息
    async getBabyById(){
      let result=await getBabyById(this.formInline.babyid)
      this.babylist=result

    },
    deleteMsg(){
console.log('删除宝宝');
    },
    handleEdit(){
     console.log('编辑宝宝');
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<style scoped>
.vaccineContainer {
  padding-top: 20px;
  padding-left: 20px;
}

.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
.dialogclass {
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 10%;
}
</style>