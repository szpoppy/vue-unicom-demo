<style lang="less">
</style>
<template>
    <div class="page-get">
        <div class="x-tip1">打开Console日志输出窗口，查看日志输出<br/>plugin为src/util/plugin中的订阅对象</div>
        <fieldset>
            <legend>page-instruct#{{unicomId}}</legend>
            <p class="x-font1">{{message}}</p>
        </fieldset>

        <group unicom-name="a" unicom-id="g1"></group>
        <group :unicom-name="['a', 'b']" unicom-id="g2"></group>
        <group unicom-name="b" unicom-id="g3"></group>

        <fieldset>
            <legend>获取 ID,注意观察target</legend>
            <button @click="getById('plugin')">获取plugin</button>
            <button @click="getById('route-get')">获取自己</button>
            <hr />
            <button @click="getById('g1')">获取G1</button>
            <button @click="getById('g2')">获取G2</button>
            <button @click="getById('g3')">获取G3</button>
        </fieldset>

        <fieldset>
            <legend>获取 Name</legend>
            <button @click="getByName('a')">分组 a</button>
            <button @click="getByName('b')">分组 b</button>
            <button @click="getByName('group')">分组 group</button>
        </fieldset>
    </div>
</template>
<script>
import group from './cps/group'
export default {
    components: {
        group
    },
    data() {
        return {
            message: "点击下面按钮，获取日志输出"
        }
    },
    methods: {
        getById (id) {
            let idName = '#' + id
            let vm = this.$unicom(idName)
            this.message = '获取了 ' + idName + ' ，请查看日志输出'
            console.log(idName, vm)
        },
        getByName (name) {
            let nameName = '@' + name
            let vms = this.$unicom(nameName)
            this.message = '获取了 ' + nameName + ' ，请查看日志输出'
            console.log(nameName, vms)
        }
    }
}
</script>

