import Vue from "vue"
import App from "./App.vue"

import { router, vueRouterInstall } from "./router"
Vue.use(vueRouterInstall)

// import Unicom from "@/util/unicom"
import Unicom from "vue-unicom"
Vue.use(Unicom)

// 项目中Vue的插件
import plugin from "@/util/plugin"
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
