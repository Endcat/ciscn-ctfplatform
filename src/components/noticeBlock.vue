<template>
    <div id="notice-block" :style="$store.state.activeScheme.boxShadow">
        <div class="notice-title">
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "noticeBlock"
    }
</script>

<style scoped>
    #notice-block{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
    }
    #notice-block:hover{
        transform: translate(0, -5px);
    }
</style>
