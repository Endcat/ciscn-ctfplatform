<template>
    <div id="ranking">
        <div :style="$store.state.activeScheme.fontColor" class="rank-title">
            Ranking
        </div>
        <div class="left-board">
            <div :style="$store.state.activeScheme.boxShadow" class="leader-board">
                <div class="title leader-board-title">
                    Top 3
                    <div class="top-team-board" :style="$store.state.activeScheme.boxShadow">
                        <div class="top-team-board-left">
                            <img src="@/assets/icons/gold.png" width="70px" alt="top1">
                        </div>
                        <div class="top-team-board-right">
                            <div class="team-name">
                                FooBar1
                            </div>
                            <div class="team-score">
                                1234567Pt
                            </div>
                        </div>
                    </div>
                    <div class="top-team-board" :style="$store.state.activeScheme.boxShadow">
                        <div class="top-team-board-left">
                            <img src="@/assets/icons/silver.png" width="70px" alt="top2">
                        </div>
                        <div class="top-team-board-right">
                            <div class="team-name">
                                FooBar2
                            </div>
                            <div class="team-score">
                                123456Pt
                            </div>
                        </div>
                    </div>
                    <div class="top-team-board" :style="$store.state.activeScheme.boxShadow">
                        <div class="top-team-board-left">
                            <img src="@/assets/icons/bronze.png" width="70px" alt="top3">
                        </div>
                        <div class="top-team-board-right">
                            <div class="team-name">
                                FooBar3
                            </div>
                            <div class="team-score">
                                114515Pt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-board">
            <div :style="$store.state.activeScheme.boxShadow" class="rank-board">
                <div class="title rank-board-title">
                    Rank List
                </div>
                <table class="rank-list-wrapper">
                    <tr>
                        <th>Place</th>
                        <th>Team</th>
                        <th>Score</th>
                        <th>Solved</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FooBar1</td>
                        <td>1234567Pt</td>
                        <td>1234</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>FooBar2</td>
                        <td>123456Pt</td>
                        <td>321</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>FooBar3</td>
                        <td>114515Pt</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>FooBar4</td>
                        <td>114514Pt</td>
                        <td>71</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ranking",
        components: {},
        beforeCreate() {
            if (!this.$store.state.ACCESS_TOKEN) {
                this.$router.push({ path: "/login" })
            }
        }
    }
</script>

<style scoped>
    #ranking{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .rank-title
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
        height: 550px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .top-team-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 95%;
        margin-bottom: 20px;
        margin-top: 20px;
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
    }
    .rank-board:hover{
        transform: translate(0, -5px);
    }
    .left-board{
        width: 400px;
        height: 750px;
        float: left;
        margin-right: 50px;
        margin-bottom: 20px;
    }
    .right-board{
        width: 55%;
        min-width: 500px;
        height: 750px;
        float: left;
    }
    .top-team-board-left {
        position: relative;
        float: left;
    }
    .top-team-board-left img {
        padding-top: 20px;
        padding-left: 10px;
    }
    .top-team-board-right{
        float: left;
    }
    .team-name {
        float: top;
        text-indent: 20px;
        padding-top: 10px;
    }
    .team-score {
        float: bottom;
        text-indent: 20px;
        padding-bottom: 10px;
        font-size: 30px;
    }
    .rank-list-wrapper {
        width: 100%;
        padding-top: 20px;
    }
    .rank-list-wrapper tr td {
        text-align: center;
    }
</style>
