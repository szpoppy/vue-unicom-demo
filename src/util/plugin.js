export default function install(vue) {
    let unicom = new vue.Unicom()
    unicom.setId("plugin")

    unicom.on("instruct1", function(event) {
        console.log("plugin-instruct1", event)
    })

    unicom.on("instruct2", function(event) {
        console.log("plugin-instruct2", event)
    })

    unicom.monitor("@monitor", function(that) {
        console.log("监控", "@monitor", that)
        unicom.emit("instruct-name@monitor", "监控到 @monitor 创建，发送的消息")
    })

    unicom.monitor("#route-monitor", function(that) {
        console.log("监控", "#route-monitor", that)
        unicom.emit("instruct-id#route-monitor", "监控到 #route-monitor 创建，发送的消息")
    })
}
