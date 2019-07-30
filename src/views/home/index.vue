<style>
</style>
<template>
    <div class="page-home">
        <fieldset>
            <legend>测试功能</legend>
            <button @click="$router.push('/instruct')">订阅与发布</button>
            <button @click="$router.push('/get')">获取</button>
            <button @click="$router.push('/monitor')">监控</button>
        </fieldset>
        <fieldset>
            <legend>安装</legend>
            <p>npm i vue-unicom -S</p>
        </fieldset>
        <fieldset>
            <legend>详细API</legend>
            <p><a href="https://github.com/szpoppy/vue-unicom" target="_blank">GitHub API</a></p>
        </fieldset>
    </div>
</template>
<script>
export default {}
</script>