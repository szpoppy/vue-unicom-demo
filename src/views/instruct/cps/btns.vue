<style lang="less">
.home-mode-btns {

}
</style>

<template>
    <div class="home-mode-btns">
        <fieldset>
            <legend>[通用]instruct(会有日志输出)</legend>
            <button @click="$unicom('instruct1', '[instruct1]message')">instruct1</button>
            <button @click="$unicom('instruct2', '[instruct2]message')">instruct2</button>
        </fieldset>
        <fieldset>
            <legend>[唯一]instruct#id</legend>
            <button @click="$unicom('instruct1#mode-a-1', '[instruct1#mode-a-1]message')">instruct1[#mode-a-1]</button>
            <button @click="$unicom('instruct2#mode-a-2', '[instruct2#mode-a-2]message')">instruct2[#mode-a-2]</button>
            <hr />
            <button @click="$unicom('instruct1#route-instruct', '[instruct1#route-instruct]message')">instruct1[#route-instruct]</button>
            <button @click="$unicom('instruct2#route-instruct', '[instruct2#route-instruct]message')">instruct2[#route-instruct]</button>
        </fieldset>
        <fieldset>
            <legend>[分组]instruct@group</legend>
            <button @click="$unicom('instruct1@instruct', '[instruct1@instruct]message')">instruct1[@instruct]</button>
            <button @click="$unicom('instruct2@instruct', '[instruct2@instruct]message')">instruct2[@instruct]</button>
            <hr />
            <button @click="$unicom('instruct1@mode-a', '[instruct1@mode-a]message')">instruct1[@mode-a]</button>
            <button @click="$unicom('instruct2@mode-a', '[instruct2@mode-a]message')">instruct2[@mode-a]</button>
        </fieldset>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            message: "mode-a 默认"
        }
    }
}
</script>
