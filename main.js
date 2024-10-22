import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

import buttomBarVue from './compoents/buttomBar/buttomBar.vue'
import headBarVue from './compoents/headBar/headBar.vue'
import marskBoxVue from './compoents/marskBox/marskBox.vue'
import Request from 'util/http.js';
Vue.component("buttom-bar", buttomBarVue)
Vue.component("head-bar", headBarVue)
Vue.component("marsk-box", marskBoxVue)
Vue.prototype.$Request = Request
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif