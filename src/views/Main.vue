<template>
  <div class="main">
    <el-container>
      <!-- 左侧的菜单栏 -->
      <el-aside>
          左侧边栏
      </el-aside>
      <el-container>
        <!-- 顶部信息栏 -->
        <el-header>头部</el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
 data() {
   return {
     
   }
 },
 beforeCreate() {
   if(!this.$store.state.adminName){
     this.$router.push('/login')
   }
 },
}
</script>
