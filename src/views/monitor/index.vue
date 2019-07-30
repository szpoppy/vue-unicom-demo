<style lang="less">
</style>
<template>
    <div class="page-monitor">
        <div class="x-tip1">请打开console，查看部分日志输出</div>
        <fieldset>
            <legend>page-monitor@monitor</legend>
            <p class="x-font1">instruct-name: {{msgName}}</p>
        </fieldset>
        <fieldset>
            <legend>page-monitor#{{unicomId}}</legend>
            <p class="x-font1">instruct-id: {{msgId}}</p>
        </fieldset>
    </div>
</template>
<script>
export default {
    unicomName: "monitor",
    data() {
        return {
            msgName: "",
            msgId: ""
        }
    },
    unicom: {
        // 监控到分组
        "instruct-name"({ $1 }) {
            this.msgName = $1
        },
        // 监控到 id
        "instruct-id"({ $1 }) {
            this.msgId = $1
        }
    }
}
</script>
