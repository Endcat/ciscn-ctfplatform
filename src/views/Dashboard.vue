<template>
    <div id="dashboard">
        <div class="board-title">Dashboard</div>
        <div class="board-subtitle">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
    #dashboard{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .board-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .board-subtitle{
        color: #383838;
        font-size: 20px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        line-height: 25px;
        padding-top: 20px;
        padding-left: 10px;
        padding-bottom: 40px;
        max-width: 1000px;
        height: 225px;
    }
</style>
