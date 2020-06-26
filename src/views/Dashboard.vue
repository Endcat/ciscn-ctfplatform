<template>
    <div id="dashboard">
        <div :style="$store.state.activeScheme.fontColor" class="board-title">Dashboard</div>
        <div class="left-board">
            <div :style="$store.state.activeScheme.boxShadow" class="leader-board">
                <div class="title team-board-title">
                    Your Team<div :style="$store.state.activeScheme.boxShadow" class="submit-btn" @click="logOut">Logout</div>
                </div>
<!--                TO DO Team display layout-->
                <team-board></team-board>
            </div>
            <div :style="$store.state.activeScheme.boxShadow" class="team-stat">
                <div class="title team-stat-title">
                    Progress
                </div>
                <chall-stat></chall-stat>
            </div>
        </div>
        <div class="right-board">
            <div :style="$store.state.activeScheme.boxShadow" class="rank-board">
                <div class="title notice-board-title">
                    Notices
                    <notice-block notice-content="Hint updated on Challenge 1" notice-title="Hint"></notice-block>
                    <notice-block notice-content="Hint updated on Challenge 2" notice-title="Hint"></notice-block>
                    <notice-block notice-content="Hint updated on Challenge 3" notice-title="Hint"></notice-block>
                    <notice-block notice-content="Hint updated on Challenge 4" notice-title="Hint"></notice-block>
                    <notice-block notice-content="Hint updated on Challenge 5" notice-title="Hint"></notice-block>
                    <notice-block notice-content="Hint updated on Challenge 6" notice-title="Hint"></notice-block>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChallStat from "../components/challStat";
    import TeamBoard from "../components/teamBoard";
    import NoticeBlock from "../components/noticeBlock";
    export default {
        name: "Dashboard",
        components: {NoticeBlock, TeamBoard, ChallStat},
        methods: {
            logOut: function () {
                this.$store.state.ACCESS_TOKEN = "";
                this.$router.push({ path: "/login" })
            }
        },
        beforeCreate() {
            if (!this.$store.state.ACCESS_TOKEN) {
                this.$router.push({ path: "/login" })
            }
        }
    }
</script>

<style scoped>
    .title{
        position: relative;
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
    .team-stat{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 320px;
        margin-bottom: 20px;
        transition: all 0.2s linear;
    }
    .team-stat:hover{
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
    #dashboard{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .board-title
    {
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
        padding-bottom: 40px;
    }
    .left-board{
        width: 40%;
        min-width: 500px;
        height: 750px;
        float: left;
        margin-right: 50px;
        margin-bottom: 20px;
    }
    .right-board{
        width: 40%;
        min-width: 500px;
        height: 750px;
        float: left;
    }
    .submit-btn:active{
        color: white;
        background: linear-gradient(to bottom right, rgb(174, 186, 248), rgb(202, 218, 248));
    }
    .submit-btn:hover {
        color: white;

    }
    .submit-btn{
        position: relative;
        width: 100px;
        height: 40px;
        font-size: 17px;
        line-height: 40px;
        border-radius: 50px;
        text-align: center;
        text-indent: 0;
        transition: all 0.2s linear;
        border: none;
        background: linear-gradient(to bottom right, rgb(240, 10, 81), rgb(200, 40, 40));
        float: right;
        margin-right: 40px;
    }
</style>
