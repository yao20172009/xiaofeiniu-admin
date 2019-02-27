import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminName:'',
    globalSettings:{
    apiUrl:'http://127.0.0.1:8090'
    }
  },
   //公共数据修改方法：this.$store.commit('setAdminName','boss')
  //公共数据修改方法：this.$store.commit('setGlobalSettings',{...})
 
  mutations: {
    setAdminName(state,value){
      state.adminName=value;
    },
    setGlobalSettings(state,value){
      state.globalSettings=value;
    }
  }
})
