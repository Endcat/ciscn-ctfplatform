<template>
    <div id="notice-block" :style="$store.state.activeScheme.boxShadow">
        <div class="notice-title">
            {{noticeTitle}}
        </div>
        <div class="notice-content">
            {{noticeContent}}
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "noticeBlock",
        props: {
            noticeTitle: String,
            noticeContent: String
        }
    }
</script>

<style scoped>
    .notice-title {
        text-indent: 20px;
        padding-top: 10px;
        font-size: 25px;
    }
    .notice-content {
        text-indent: 21px;
        font-size: 20px;
        padding-bottom: 10px;

    }
    #notice-block{
        position: relative;
        display: block;
        border-radius: 15px;
        width: 95%;
        height: 100%;
        transition: all 0.2s linear;
        margin-top: 30px;
    }
    #notice-block:hover{
        transform: translate(0, -5px);
    }
</style>
