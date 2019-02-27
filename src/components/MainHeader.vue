<template>
  <div class="xfn-main-header">
    <h3 class="xfn-title">{{$store.state.globalSettings.appName}}后台管理系统</h3>
    <div class="xfn-right">当前用户：{{$store.state.adminName}}
      <el-button size="mini" @click="quit">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    quit(){
      this.$store.commit('setAdminName','');
      this.$router.push('/login');
    }
  },
 
}
</script>

<style scoped lang="scss">
$header-height:60px;
.xfn-main-header{
  background: #DCDFE6;
  border-radius: 2px;
  line-height: $header-height;
  height: $header-height;
  padding: 0 6px;
  .xfn-title{
    color:#303133;
    float: left;
    margin: 0;
    text-align: center
  }
  .xfn-right{
    float: right;
  }

}
</style>
