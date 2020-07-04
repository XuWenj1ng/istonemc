import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from './router';
import store from './store';
import { UrlSearch } from '@/assets/url.js'
// import './rem.js';


//公用js  css
import base from '@/assets/base.js' //引用
import  '@/assets/common.less'

Vue.use(base)
Vue.use(ElementUI)
Vue.use(VueRouter)
let Request = new UrlSearch() //  实例 urlSearch   功能:获取到 url 里的参数
Vue.prototype.$Request = Request
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  router: VueRouter,
  store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App),
}).$mount('#app')
