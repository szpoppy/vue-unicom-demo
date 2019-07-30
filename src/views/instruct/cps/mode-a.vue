<template>
    <div class="mode-a">
        <fieldset>
            <legend>mode-a#{{unicomId}}@mode-a{{unicomName && '@' + unicomName || ''}}</legend>
            <p>{{message}}</p>
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
    },
    unicomName: "mode-a",
    unicom: {
        instruct1({ $1 }) {
            this.message = $1
        },
        instruct2({ data }) {
            this.message = data
        }
    }
}
</script>
