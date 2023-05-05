<template>
  <div class="baikeContainer">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>育儿百科</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formInline.ChildKnowledgeId" placeholder="请输入百科ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select size="small" v-model="formInline.ageGroup" placeholder="请选择">
          <el-option
            v-for="item in option1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="handleEdit">添加</el-button>
      </el-form-item>
    </el-form>
        <!--列表-->
         <el-table
      size="small"
      :data="AllBaikeList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      highlight-current-row
      border
      element-loading-text="拼命加载中"
      style="width: 100%;"
    >
      <el-table-column align="center" type="index" width="60"></el-table-column>
      <el-table-column  prop="title" label="百科标题" width="200" ></el-table-column>
      <el-table-column sortable prop="ageGroup" label="月龄" width="70" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ChildKnowledgeId" label="百科ID" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column :filters="[{text: '新生儿护理', value: '新生儿护理'}, {text: '早产儿', value: '早产儿'}, 
      {text: '营养与喂养', value: '营养与喂养'}, {text: '早期教育', value: '早期教育'}, {text: '疾病接种', value: '疾病接种'}, 
      {text: '成长发育', value: '成长发育'}, {text: '辅食添加', value: '辅食添加'}, {text: '母婴用品', value: '母婴用品'},{text: '儿童用品', value: '儿童用品'}]" prop="mainClass" label="主要种类" width="120"       :filter-method="filterHandler"
></el-table-column>
<el-table-column prop="content" label="内容" width="300" height="200" show-overflow-tooltip></el-table-column>
      <el-table-column  prop="Imgsrc" label="展示图片" width="200" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      :total="AllBaikeList.length"
    ></el-pagination> 
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name:'vaccine',
data(){
  return {
    option1: [{
          value: '选项1',
          label: '0-6月龄'
        }, {
          value: '选项2',
          label: '6-12月龄'
        },
        {
          value: '选项3',
          label: '1-2岁'
        }, {
          value: '选项4',
          label: '2-3岁'
        }, {
          value: '选项5',
          label: '3-6岁'
        }
      ],
    currentPage: 1,
    pageSize: 10,
    formInline: {
      ChildKnowledgeId: "",
        ageGroup:''
      }
  }
},
computed:{
  ...mapState({
    AllBaikeList: state => state.baike.AllBaikeList
    })
},
created(){
  this.getAllBaike()
},
methods:{
    search(){
  console.log('搜索');
    },
    handleEdit(){
      console.log('添加');
    },
    // 获取所有百科信息
    getAllBaike(){
      this.$store.dispatch('getAllBaike')
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
  }
}
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