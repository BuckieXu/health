<template>
    <div class="mymsgContainer">
        <el-form :model="userInfo" label-width="100px" >
        <el-form-item label="账号" prop="userId" :label-width="formLabelWidth" disabled="true">
          <el-input v-model="userInfo.userId" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="userInfo.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname" :label-width="formLabelWidth">
          <el-input v-model="userInfo.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth" disabled="true">
          <el-input v-model="userInfo.roleid" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
          <el-input v-model="userInfo.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
          <el-input v-model="userInfo.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="userInfo.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveUser">提交修改</el-button>
        </el-form-item>
      </el-form>
    </div>

</template>

<script>
export default {
  data(){
    return {
        userInfo: {
        userId:'',
        username: "",
        nickname: "",
        roleid: "",
        email: "",
        phone: "",
        sex: "",
        createTime:''
      },
      formLabelWidth:'120px'
    }
  },
  methods:{
    saveUser(){
      console.log('保存信息');
    }
  },
  beforeMount(){
    let user=JSON.parse(localStorage.getItem('userinfo'))
    console.log(user);
    this.userInfo={
        userId:user.userId,
        username:user.username,
        nickname:user.nickname,
        roleid:user.roleid,
        email:user.email,
        phone:user.phone,
        sex:user.sex,
        createTime:user.createTime
      }
  }
}
</script>

<style scoped>
.mymsgContainer{
   padding: 20px;
   width: 60%;
}
</style>