<style lang="less">
.page-instruct {
    fieldset {
        
    }
}
</style>
<template>
    <div class="page-instruct">
        <div class="x-tip1">请打开console，查看部分日志输出</div>
        <fieldset>
            <legend>page-instruct#{{unicomId}}@instruct</legend>
            <p class="x-font1">{{message}}</p>
        </fieldset>
        <mode-a unicom-id="mode-a-1"></mode-a>
        <mode-a unicom-id="mode-a-2" unicom-name="instruct"></mode-a>
        <btns></btns>
    </div>
</template>
<script>
import modeA from "./cps/mode-a"
import btns from "./cps/btns"
export default {
    components: {
        modeA,
        btns
    },
    data() {
        return {
            message: "page-home 默认"
        }
    },
    // 这里参数可以多个分组，使用数组
    unicomName: ["instruct"],
    unicom: {
        instruct1({ $1 }) {
            // $1 和 data 一样，第一个实际的参数
            this.message = $1
        },
        instruct2({ data }) {
            // $1 和 data 一样，第一个实际的参数
            this.message = data
        }
    }
}
</script>
