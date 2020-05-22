<template>
    <div id="admin">
        <div :style="$store.state.activeScheme.fontColor" class="admin-title">
            Admin
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="overview-board board">
            <div class="title overview-board-title">
                Overview
            </div>
            <div class="overview-left overview-layout">
                <div class="overview-circle">4352</div>
                <div class="overview-msg">
                    Total<br>Teams
                </div>
            </div>
            <div class="overview-mid overview-layout">
                <div class="overview-circle">9578</div>
                <div class="overview-msg">
                    Total<br>Submissions
                </div>
            </div>
            <div class="overview-right overview-layout">
                <div class="overview-circle">7386</div>
                <div class="overview-msg">
                    Total<br>Challenges
                </div>
            </div>

        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="account-board board">
            <div class="title account-board-title">
                Manage Accounts
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="chall-board board">
            <div class="title chall-board-title">
                Manage Challenges
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="notice-board board">
            <div class="title notice-board-title">
                Manage Notices
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="issue-board board">
            <div class="title issue-board-title">
                Manage Issues
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin"
    }
</script>

<style scoped>
    #admin{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .admin-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 80%;
        height: 400px;
        margin-bottom: 40px;
        margin-top: 10px;
        transition: all 0.2s linear;
    }
    .title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }

    .board:hover{
        transform: translate(0, -5px);
    }
    .overview-board{
        height: 300px;
        width: 600px;
    }
    .overview-layout{
        margin-left: 20px;
        display: inline-block;
        float: left;
        width: 25%;
        height: 70%;
        text-align: center;
    }
    .overview-circle{
        width: 140px;
        height: 140px;
        border-radius: 75px;
        margin: 0 auto;
        line-height: 140px;
        font-size: 35px;
        border: #383838 solid 1px;
    }
    .overview-msg{
        font-size: 20px;
        margin-top: 10px;
    }
    .overview-left{
        margin-left: 60px;
    }
</style>
