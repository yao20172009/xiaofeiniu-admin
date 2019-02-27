<template>
  <div class="settings">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页 </el-breadcrumb-item>
      <el-breadcrumb-item >全局设置 </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="never">
      <el-form lable-width="100px">
        <el-form-item label="应用名称：">
          <el-input v-model="formDate.appName"></el-input>
        </el-form-item>
        <el-form-item label="数据API地址：">
          <el-input v-model="formDate.apiUrl"></el-input>
        </el-form-item>
        <el-form-item label="管理后台地址：">
          <el-input v-model="formDate.adminUrl"></el-input>
        </el-form-item>
        <el-form-item label="客户APP地址：">
          <el-input v-model="formDate.appUrl"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号：">
          <el-input v-model="formDate.icp"></el-input>
        </el-form-item>
        <el-form-item label="版权申明：">
          <el-input v-model="formDate.copyright"></el-input>
        </el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>取消</el-button>
      </el-form>     
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formDate:{}
    }
  },
  mounted() {
    this.formDate=this.$store.state.globalSettings;
  },
}
</script>