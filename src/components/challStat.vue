<template>
    <div id="chall-stat">
        Web<el-progress class="progress-bar" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        Pwn<el-progress class="progress-bar" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
        Reverse<el-progress class="progress-bar" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
        Crypto<el-progress class="progress-bar" :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
        Misc<el-progress class="progress-bar" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    </div>
</template>

<script>
    export default {
        name: "challStat",
        mounted() {
        }
    }
</script>

<style scoped>
    #chall-stat{
        position: relative;
        margin: 0 40px;
        font-size: 15px;
        font-family: "Microsoft YaHei",sans-serif;
        padding-top: 10px;
    }
</style>
