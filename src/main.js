import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
Vue.filter('date',function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  m=m>9 ?m:'0'+m;
  var d=date.getDate()
  d=d>9 ?d:'0'+d;
  return `${y}-${m}-${d}`
})
Vue.filter('datetime',function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  m=m>9 ?m:'0'+m;
  var d=date.getDate()
  d=d>9 ?d:'0'+d;
  var h=date.getHours();
  h=h>9 ?h:'0'+h;
  var mi=date.getMinutes();
  mi=mi>9 ?mi:'0'+mi;
  var s=date.getSeconds();
  s=s>9 ?s:'0'+s;
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
})
Vue.filter('currency',function(val){
  return '￥'+val.toFixed(2)
})
Vue.filter('tableStatus',val=>{
  if(val==1)return '空闲';
else if(val==2)return '预定';
else if(val==3)return '占用';
else return '其他';
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
