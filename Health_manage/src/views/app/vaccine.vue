<template>
  <div class="vaccineContainer">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>疫苗信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formInline.babyid" placeholder="请输入宝宝ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="AddFn">添加</el-button>
        <el-button size="small" type="primary" icon="el-icon-refresh" @click="refresh">刷新</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table
      size="small"
      :data="AllVaccineList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      border
      style="width: 100%;"
    >
      <el-table-column align="center" type="index" width="60"></el-table-column>
      <el-table-column prop="vaccineName" label="疫苗名称" width="150"></el-table-column>
      <el-table-column sortable prop="ageGroup" label="月龄" width="70" show-overflow-tooltip></el-table-column>
      <el-table-column prop="vaccineId" label="疫苗ID" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column
        :filters="[{text: '免疫规划疫苗', value: '免疫规划疫苗'}, {text: '非免疫规划疫苗', value: '非免疫规划疫苗'}]"
        prop="vaccineGroup"
        label="疫苗种类"
        width="120"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column sortable prop="num" label="接种次数" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column sortable prop="sum" label="总次数" width="90" show-overflow-tooltip></el-table-column>
      <el-table-column prop="babyid" label="宝宝ID" width="90"></el-table-column>
      <el-table-column prop="include" label="疫苗描述" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="status" label="接种状态" width="100"></el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">删除</el-button>
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
      :total="AllVaccineList.length"
    ></el-pagination>
    <!-- 添加基本疫苗页面 -->
    <el-dialog title="添加疫苗" :visible.sync="dialogFormVisible" width="30%" top="30vh">
      <el-input v-model="addBabyid" autocomplete="off" placeholder="请输入需要添加疫苗的宝宝ID"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelFn">取 消</el-button>
        <el-button type="primary" @click="addVaccineFn">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 疫苗详情弹出框 -->
    <el-dialog title="疫苗详情" :visible.sync="detailShow" width="40%" class="dialogclass" top="30px">
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
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "vaccine",
  data() {
    return {
      option2: [
        {
          value: "选项1",
          label: "免疫规划疫苗"
        },
        {
          value: "选项2",
          label: "非免疫规划疫苗"
        }
      ],
      currentPage: 1,
      pageSize: 10,
      formInline: {
        babyid: "",
        vaccineGroup: "",
        ageGroup: ""
      },
      dialogFormVisible: false,
      detailShow: false, //疫苗详情弹出框
      addBabyid: "",
      vaccineDetail: {
        vaccineName: "",
        vaccineGroup: "",
        sum: "",
        num: "",
        status: "",
        babyid: "",
        ageGroup: "",
        include: ""
      },
      timeValue:'',
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState({
      AllVaccineList: state => state.vaccine.AllVaccineList,
      babymsg: state => state.vaccine.babymsg
    })
  },
  created() {
    this.getAllVaccine();
  },
  methods: {
    search() {
      //  通过宝宝ID搜索疫苗信息
      this.$store.dispatch("getVaccineByid", this.formInline.babyid);
    },
    // 点击添加疫苗  添加免疫规划疫苗
    AddFn() {
      this.dialogFormVisible = true;
    },
    cancelFn() {
      (this.dialogFormVisible = false), (this.addBabyid = "");
    },

    //点击弹出框确认 ，验证宝宝是否存在并添加
    async addVaccineFn() {
      // 先判断改宝宝是否存在
      await this.$store.dispatch("getBabyMsgById", this.addBabyid);

      if (this.babymsg.babyid == this.addBabyid) {
        this.$store.dispatch("addFreeVaccine", this.addBabyid);
      } else {
        this.$message.error("该宝宝不存在");
      }
      (this.dialogFormVisible = false), (this.addBabyid = "");
    },
    // 获取所有疫苗
    getAllVaccine() {
      this.$store.dispatch("AllVaccine");
    },
    // 点击刷新
    refresh() {
      this.$store.dispatch("AllVaccine");
      this.formInline.babyid = "";
    },
    handleEdit(index, row) {
      (this.vaccineDetail.vaccineName = row.vaccineName),
        (this.vaccineDetail.vaccineGroup = row.vaccineGroup),
        (this.vaccineDetail.sum = row.sum),
        (this.vaccineDetail.num = row.num),
        (this.vaccineDetail.status = row.status),
        (this.vaccineDetail.ageGroup = row.ageGroup),
        (this.vaccineDetail.include = row.include);
      this.vaccineDetail.vaccineId = row.vaccineId;
      this.vaccineDetail.inoculateDate =row.inoculateDate||new Date();
      this.timeValue=row.inoculateDate||new Date();
      this.detailShow = true;
    },
    SaveCansel() {
      this.detailShow = false;
    },
    SaveEdit() {
      let obj={
        vaccineId:this.vaccineDetail.vaccineId,
        status:this.vaccineDetail.status,
        inoculateDate:this.timeValue
      }
      this.$store.dispatch('changeVaccineAc',obj)
      this.getAllVaccine()
      this.detailShow = false;

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