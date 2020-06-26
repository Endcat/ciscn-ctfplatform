<template>
    <div id="chall-block" :style="$store.state.activeScheme.boxShadow" @click="goChallInfo">
        <div class="chall-title">
            {{challTitle}}
        </div>
        <div class="chall-content">
            {{challCategory}}
            {{challScore}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChallBlock",
        props: {
            challTitle: String,
            challCategory: String,
            challScore: String,
        },
        methods:{
            goChallInfo: function () {
                let routerUrl = '/challenge/' + this.$props.challTitle;
                this.$router.push({ path: routerUrl })
            }
        }
    }
</script>

<style scoped>
    .chall-title {
        text-indent: 20px;
        padding-top: 10px;
        font-size: 25px;
        font-weight: bold;
    }
    .chall-content {
        text-indent: 21px;
        font-size: 20px;
        padding-bottom: 10px;

    }
    #chall-block{
        position: relative;
        display: block;
        border-radius: 15px;
        width: 40%;
        height: 100%;
        transition: all 0.2s linear;
        margin-top: 30px;
        margin-bottom: 10px;
        margin-left: 35px;
        float: left;
    }
    #chall-block:hover{
        transform: translate(0, -5px);
    }
</style>
