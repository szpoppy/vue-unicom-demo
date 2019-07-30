import VueRouter from "vue-router"

let routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        // 测试
        path: "/home",
        component: resolve => require(["@/views/home"], resolve),
        meta: {
            title: "vue-unicom-home"
        },
        children: []
    },
    {
        // 指令发送
        path: "/instruct",
        component: resolve => require(["@/views/instruct"], resolve),
        meta: {
            title: "vue-unicom-instruct"
        },
        children: []
    },
    {
        // 获取命名订阅者
        path: "/get",
        component: resolve => require(["@/views/get"], resolve),
        meta: {
            title: "vue-unicom-get"
        },
        children: []
    },
    {
        // 指令延后发送
        path: "/monitor",
        component: resolve => require(["@/views/monitor"], resolve),
        meta: {
            title: "vue-unicom-monitor"
        },
        children: []
    }
]

// 设置 name 和 unicom-id 默认值
function inRoutes(rs) {
    rs.forEach(function(item) {
        if (!item.name) {
            item.name = item.path.replace(/^\/+/, "").replace(/\/+/g, "-")
        }

        // 生成 默认的 unicom-id
        // 方便$unicom 发送消息可以指定路由
        if (!item.props) {
            item.props = {}
        }

        if (!item.props["unicom-id"]) {
            item.props["unicom-id"] = "route-" + item.name
        }
        if (item.children && item.children.length) {
            inRoutes(item.children)
        }
    })
}
inRoutes(routes)

export let router = new VueRouter({
    routes
})

let vueRouterInstallFlag
export function vueRouterInstall(Vue) {
    if (vueRouterInstallFlag) {
        // 只注册一次
        return
    }
    vueRouterInstallFlag = true

    // 注册
    Vue.use(VueRouter)
}
