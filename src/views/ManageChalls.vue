<template>
    <div id="manage-chall">
        <div :style="$store.state.activeScheme.fontColor" class="mgr-chall-title">
            Manage Challenges
        </div>
        <div class="chall-info" :style="$store.state.activeScheme.boxShadow">
            <div class="chall-info-title">
                Challenge Info
            </div>
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
    .chall-info{
        position: relative;
        width: 50%;
        border-radius: 15px;
    }
    .chall-info-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
</style>
