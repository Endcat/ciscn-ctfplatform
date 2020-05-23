<template>
    <div id="manage-account">
        <div :style="$store.state.activeScheme.fontColor" class="mgr-account-title">
            Manage Accounts
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageAccount",
        components: {
        }
    }
</script>

<style scoped>
    #manage-account{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
.mgr-account-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
</style>
