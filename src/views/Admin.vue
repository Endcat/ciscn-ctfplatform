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

            </div>
            <div class="overview-mid overview-layout">

            </div>
            <div class="overview-right overview-layout">
                
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
    .overview-layout{
        width: 30%;
        height: 100px;
        background: cadetblue;
    }
</style>
