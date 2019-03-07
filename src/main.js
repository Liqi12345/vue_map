


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '../src/api/axios'
import api from '../src/api/config'
import  'mint-ui/lib/style.css'
import { Toast,Loadmore } from 'mint-ui';
Vue.prototype.axios  = axios
Vue.prototype.api = api
Vue.config.productionTip = false
Vue.prototype.toast = Toast
Vue.prototype.Loadmore = Loadmore
Vue.component(Loadmore.name, Loadmore);
import AMap from 'vue-amap';
Vue.use(AMap);


AMap.initAMapApiLoader({

    key: 'aae75b76b77417d914d30f85adedc1e8',
    // 插件集合 （插件按需引入）

    plugin: ['AMap.Geolocation'],
    // 默认高德 sdk 版本为 1.4.4
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')