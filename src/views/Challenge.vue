<template>
    <div id="challenge">
        <div :style="$store.state.activeScheme.fontColor" class="chall-title">
            Challenge
        </div>
        <div class="left-board">
            <div :style="$store.state.activeScheme.boxShadow" class="leader-board">
                <div class="title filter-board-title">
                    Filter
                </div>
                <chall-filter></chall-filter>
            </div>
        </div>
        <div class="right-board">
            <div :style="$store.state.activeScheme.boxShadow" class="rank-board">
                <div class="title challist-board-title">
                    Capture The Flag!
                </div>
                <chall-list></chall-list>
            </div>
        </div>
    </div>
</template>

<script>
    import ChallList from "../components/challList";
    import ChallFilter from "../components/challFilter";
    export default {
        name: "Challenge",
        components: {ChallFilter, ChallList},
        beforeCreate() {
            if (!this.$store.state.ACCESS_TOKEN) {
                this.$router.push({ path: "/login" })
            }
        }
    }
</script>

<style scoped>
    #challenge{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .chall-title
    {
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
        padding-bottom: 40px;
    }
    .title{
        position: relative;
        display: inline-block;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .leader-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 400px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .leader-board:hover{
        transform: translate(0, -5px);
    }
    .rank-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        overflow: scroll;
    }
    .rank-board:hover{
        transform: translate(0, -5px);
    }
    #challenge{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .left-board{
        width: 200px;

        height: 750px;
        float: left;
        margin-right: 50px;
        margin-bottom: 20px;
    }
    .right-board{
        width: 65%;
        min-width: 500px;
        height: 750px;
        float: left;
    }

</style>
