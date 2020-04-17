<template>
    <div id="utils">
        <div class="utils-title">
            Utilities
        </div>
        <div class="left-board">
            <div class="color-board">
                <div class="title team-board-title">
                    Color Schemes
                </div>
            </div>
            <div class="apply-board">
                <div class="title apply-board-title">
                    NetTop Application
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
        name: "Utils"
    }
</script>

<style scoped>
    #utils{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .utils-title
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
    .color-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 30px 0 rgb(107, 66, 217);
        width: 100%;
        height: 80px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .color-board:hover{
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
    .apply-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 30px 0 rgb(107, 66, 217);
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
        transition: all 0.2s linear;
    }
    .apply-board:hover{
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
</style>
