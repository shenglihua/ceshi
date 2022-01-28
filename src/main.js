import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//引入公共css
import './assets/css/common.css'
import '../src/assets/css/index.css'
//移动端适配大小
import utils from './assets/js/utils'
//引入SWipper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false
   
new Vue({
  router,
  store,
  mounted(){
    utils.setRem();
    window.onresize=utils.setRem
  },
  render: h => h(App)
}).$mount('#app')
