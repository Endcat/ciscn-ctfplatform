<template>
    <div id="chall-info">
        <div :style="$store.state.activeScheme.fontColor" class="chall-info-title">
            Challenge Info
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChallInfo"
    }
</script>

<style scoped>
    #chall-info{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .chall-info-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
</style>
