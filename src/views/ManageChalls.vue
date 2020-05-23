<template>
    <div id="manage-chall">
        <div :style="$store.state.activeScheme.fontColor" class="mgr-chall-title">
            Manage Challenges
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageChalls",
        components: {
        }
    }
</script>

<style scoped>
    #manage-chall{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .mgr-chall-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
</style>
