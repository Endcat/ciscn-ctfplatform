<template>
    <div id="dashboard">
        <div class="board-title">Dashboard</div>
        <div class="left-board">
            <div class="leader-board">
                <div class="title team-board-title">
                    Your Team
                </div>
            </div>
            <div class="team-stat">
                <div class="title team-stat-title">
                    Statistics
                </div>
            </div>
        </div>
        <div class="right-board">
            <div class="rank-board">
                <div class="title notice-board-title">
                    Notices
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
    .title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        color: #383838;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .leader-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 30px 0 rgb(107, 66, 217);
        width: 100%;
        height: 400px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .leader-board:hover{
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
    .team-stat{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 30px 0 rgb(107, 66, 217);
        width: 100%;
        height: 300px;
        margin-bottom: 20px;
        transition: all 0.2s linear;
    }
    .team-stat:hover{
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
    .rank-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 30px 0 rgb(107, 66, 217);
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
    }
    .rank-board:hover{
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
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
</style>
