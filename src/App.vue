<style lang="less">
@font-color-firt: #4499fe;
html,
body {
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    background-color: #eef1f4;
    color: #333333; //height: 100%; overflow: hidden;
    // 不许复制
    user-select: none;
    padding: 0;
    margin: 0;
    border: none; // http://f2ex.cn/css-property-touch-action/
    // iOS Safari only supports auto and manipulation.
    touch-action: manipulation; //overflow-y: scroll;
}

body {
    font-size: 24px;
}

.page-app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.router {
    // 防止iphone 拉皮条后出现黑底
    &-first {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        padding-top: 92px;
        bottom: 0;
        box-sizing: border-box;
        overflow: visible;
        background-color: #ffffff;
    }
    &-child {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding-top: 92px;
        box-sizing: border-box;
        overflow: visible;
        // transition: transform 0.3s ease-out, opacity 0.35s ease-in;
        z-index: 103;
        background-color: #eef1f4;
        &.anim-fixed {
            position: fixed;
            overflow: hidden;
        }
    }
}

// 动画
.transition {
    &-child {
        &-enter-active {
            will-change: transform;
            transition: transform 0.3s ease-out, opacity 0.35s ease-in;
            // overflow: hidden;
        }
        &-leave-active {
            will-change: transform;
            transition: transform 0.3s ease-out, opacity 0.35s ease-in;
            opacity: 0.5;
            transform: translateX(40px);
            z-index: 99999;
            .transition-none {
                display: none;
            }
            // overflow: hidden;
        }
        &-enter {
            opacity: 0.5;
            transform: translateX(40px);
        }
    }

    &-go {
        &-enter-active {
            will-change: transform;
            transition: transform 0.3s ease-out, opacity 0.35s ease-out;
        }
        &-enter {
            opacity: 0;
            transform: translateX(30px);
        }
        &-leave-active {
            will-change: transform;
            transition: transform 0.3s ease-out, opacity 0.35s ease-out;
            opacity: 0.2;
            transform: translateX(30px);
        }
    }
}

.app-navbar {
    height: 92px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 999;
    line-height: 92px;
    border-bottom: 1px solid #cccccc;
    box-sizing: border-box;
    .back {
        width: 92px;
        float: left;
        position: relative;
        i {
            display: block;
            width: 16px;
            height: 16px;
            border-left: 4px solid @font-color-firt;
            border-top: 4px solid @font-color-firt;
            // border-color: #ffffff;
            transform: rotate(-45deg);
            margin: 36px 0 0 36px;
        }
        &:active {
            opacity: 0.6;
        }
    }
    .text {
        margin-left: 92px;
        font-size: 32px;
        font-weight: bold;
    }
}

fieldset {
    border: 1px solid #cccccc;
    margin: 20px;
    padding: 20px;
    p {
        line-height: 30px;
        min-height: 30px;
        padding: 0;
        margin: 0;
    }
    legend {
        color: @font-color-firt;
    }
    hr {
        border: none;
        border-top: 1px solid #cccccc;
        margin: 10px 0;
    }
}

button {
    font-size: 26px;
    line-height: 26px;
    padding: 8px 14px;
    margin-right: 10px;
    margin-top: 10px;
}

.x-tip1 {
    color: #f76a23;
    padding: 15px 30px;
    background-color: #fefced;
    line-height: 38px;
}
.x-tip2 {
    color: #f76a23;
    padding: 10px 16px;
    background-color: #fefced;
    line-height: 30px;
}

.x-font1 {
    color: #f76a23;
}
</style>

<template>
    <div id="app" class="page-app">
        <div class="app-navbar">
            <div class="back" @click="back">
                <i></i>
            </div>
            <div class="text">{{$route.meta.title}}</div>
        </div>
        <transition :name="transitionName">
            <router-view class="router-first"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {},
    data() {
        return {
            // 动画名称
            transitionName: ""
        }
    },
    watch: {
        "$route.meta.title"() {}
    },
    methods: {
        back() {
            window.history.back()
        }
    },
    mounted() {
        setTimeout(() => {
            // 防止进来就有动画
            this.transitionName = "transition-go"
        }, 900)
    }
}
</script>