<style lang="less">

</style>
<template>
    <div class="pagecps-group">
        <fieldset>
            <legend>组件group命名</legend>
            <p>{{unicomNameText}}[#{{unicomId}}]</p>
        </fieldset>
    </div>
</template>
<script>
export default {
    unicomName: "group",
    data () {
        return {
            message: ""
        }
    },
    computed: {
        unicomNameText () {
            let x = ['group']
            if(this.unicomName) {
                x = x.concat(this.unicomName)
            }
            return '[@' + x.join('][@') + ']'
        }
    }
}
</script>
