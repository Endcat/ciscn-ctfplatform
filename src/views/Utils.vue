<template>
    <div id="utils">
        <div :style="$store.state.activeScheme.fontColor" class="utils-title">
            Utilities
        </div>
        <div class="left-board">
            <div :style="$store.state.activeScheme.boxShadow" class="color-board">
                <div class="title color-board-title">
                    Color Schemes
                </div>
                <ul class="color-palette">
                    <li @click="changeWhite" class="color-circle color-white"></li>
                    <li @click="changeBlack" class="color-circle color-black"></li>
                    <li @click="changeCyan" class="color-circle color-cyan"></li>
                    <li @click="changePink" class="color-circle color-pink"></li>
                    <li @click="changeYellow" class="color-circle color-yellow"></li>
                    <li @click="changePurple" class="color-circle color-purple"></li>
                </ul>
            </div>
            <div :style="$store.state.activeScheme.boxShadow" class="apply-board">
                <div class="title apply-board-title">
                    NetTop Application

                </div>
                <div id="apply-left">
                    <div :style="$store.state.activeScheme.boxShadow" class="request-btn nettop-btn" >Request</div>
                    <div :style="$store.state.activeScheme.boxShadow" class="cancel-btn nettop-btn" >Cancel</div>
                </div>
                <div id="apply-mid">
                    <img src="@/assets/icons/laptop.png" id="nettop-img" alt="nettop-img">
                </div>
                <div id="apply-right">
                    <div :style="$store.state.activeScheme.boxShadow" class="request-btn nettop-btn" >Request</div>
                    <div :style="$store.state.activeScheme.boxShadow" class="cancel-btn nettop-btn" >Cancel</div>
                </div>
                
            </div>
            <div :style="$store.state.activeScheme.boxShadow" class="issue-board">
                <div class="title issue-board-title">
                    Issue
                </div>
            </div>
        </div>
        <div class="right-board">
            <div :style="$store.state.activeScheme.boxShadow" class="rank-board">
                <div class="title notice-board-title">
                    Notices
                    <notice-block notice-content="My name is Notice 1" notice-title="Notice"></notice-block>
                    <notice-block notice-content="My name is Notice 2" notice-title="Notice"></notice-block>
                    <notice-block notice-content="My name is Notice 3" notice-title="Notice"></notice-block>
                    <notice-block notice-content="My name is Notice 4" notice-title="Notice"></notice-block>
                    <notice-block notice-content="My name is Notice 5" notice-title="Notice"></notice-block>
                    <notice-block notice-content="My name is Notice 6" notice-title="Notice"></notice-block>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NoticeBlock from "../components/noticeBlock";
    export default {
        name: "Utils",
        components: {NoticeBlock},
        methods:{
            changeBlack(){
                this.$store.state.activeScheme.background = this.$store.state.blackScheme.background;
                this.$store.state.activeScheme.boxShadow = this.$store.state.blackScheme.boxShadow;
                this.$store.state.activeScheme.fontColor = this.$store.state.blackScheme.fontColor;
            },
            changeWhite(){
                this.$store.state.activeScheme.background = this.$store.state.whiteScheme.background;
                this.$store.state.activeScheme.boxShadow = this.$store.state.whiteScheme.boxShadow;
                this.$store.state.activeScheme.fontColor = this.$store.state.whiteScheme.fontColor;
            },
            changePurple(){
                this.$store.state.activeScheme.background = this.$store.state.purpleScheme.background;
                this.$store.state.activeScheme.boxShadow = this.$store.state.purpleScheme.boxShadow;
                this.$store.state.activeScheme.fontColor = this.$store.state.purpleScheme.fontColor;
            },
            changeCyan(){
                this.$store.state.activeScheme.background = this.$store.state.cyanScheme.background;
                this.$store.state.activeScheme.boxShadow = this.$store.state.cyanScheme.boxShadow;
                this.$store.state.activeScheme.fontColor = this.$store.state.cyanScheme.fontColor;
            },
            changePink(){
                this.$store.state.activeScheme.background = this.$store.state.pinkScheme.background;
                this.$store.state.activeScheme.boxShadow = this.$store.state.pinkScheme.boxShadow;
                this.$store.state.activeScheme.fontColor = this.$store.state.pinkScheme.fontColor;
            },
            changeYellow(){
                this.$store.state.activeScheme.background = this.$store.state.yellowScheme.background;
                this.$store.state.activeScheme.boxShadow = this.$store.state.yellowScheme.boxShadow;
                this.$store.state.activeScheme.boxShadow = this.$store.state.yellowScheme.boxShadow;
                this.$store.state.activeScheme.fontColor = this.$store.state.yellowScheme.fontColor;
            },
        }
    }
</script>

<style scoped>
    .color-palette{
        position: relative;
        height: 100%;
        padding-top: 20px;
    }
    .color-black{
        background: linear-gradient(to bottom right, rgb(47, 55, 59), rgb(54, 63, 69));
    }
    .color-purple{;
        background: linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248))
    }
    .color-pink{
        background: linear-gradient(to bottom right, rgb(255, 209, 253), rgb(250, 208, 201));
    }
    .color-cyan{
        background: linear-gradient(to bottom right, rgb(168, 204, 253), rgb(188, 226, 252));
    }
    .color-yellow{
        background: linear-gradient(to bottom right, rgb(248, 201, 108), rgb(251, 168, 127));
    }
    .color-white{
        background: linear-gradient(to bottom right, rgb(222, 232, 237), rgb(211, 220, 226));
    }
    .color-circle{
        width: 40px;
        height: 40px;
        float: left;
        border-radius: 20px;
        margin-left: 25px;
        list-style: none;
        transition: all 0.1s ease-in-out;
    }
    .color-black:hover{
        box-shadow: 0 10px 40px 0 rgb(24, 29, 32);
    }
    .color-purple:hover{
        box-shadow: 0 10px 40px 0 rgb(191, 149, 255);
    }
    .color-pink:hover{
        box-shadow: 0 10px 40px 0 rgb(253, 209, 227);
    }
    .color-cyan:hover{
        box-shadow: 0 10px 40px 0 rgb(176, 213, 253);
    }
    .color-yellow:hover{
        box-shadow: 0 10px 40px 0 rgb(250, 183, 118);
    }
    .color-white:hover{
        box-shadow: 0 10px 40px 0 rgb(217, 226, 232);
    }
    .color-board-title{
        position: relative;
        display: block;
        float: left;
    }
    #utils{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .utils-title
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
    .title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .color-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 80px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .color-board:hover{
        transform: translate(0, -5px);
    }
    .apply-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 250px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .apply-board:hover{
        transform: translate(0, -5px);
    }
    .issue-board{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 300px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .issue-board:hover{
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
    .request-btn{
        position: relative;
        width: 150px;
        height: 50px;
        font-size: 25px;
        line-height: 50px;
        border-radius: 50px;
        text-align: center;
        text-indent: 0;
        transition: all 0.2s linear;
        border: none;
        background: linear-gradient(to bottom right, rgb(63, 186, 80), rgb(119, 180, 124));
    }
    .request-btn:active{
        color: white;
        background: linear-gradient(to bottom right, rgb(174, 186, 248), rgb(202, 218, 248));
    }
    .request-btn:hover {
        color: white;

    }
    .cancel-btn{
        position: relative;
        width: 150px;
        height: 50px;
        font-size: 25px;
        line-height: 50px;
        border-radius: 50px;
        text-align: center;
        text-indent: 0;
        transition: all 0.2s linear;
        border: none;
        background: linear-gradient(to bottom right, rgb(225, 0, 0), rgb(255, 30, 30));
    }
    .cancel-btn:active{
        color: white;
        background: linear-gradient(to bottom right, rgb(174, 186, 248), rgb(202, 218, 248));
    }
    .cancel-btn:hover {
        color: white;

    }
    .nettop-btn{
        display: block;
        position: relative;
        margin-top: 20px;
    }
    #nettop-img{
        width: 150px;
        position: relative;
    }
    #apply-left{
        width: 30%;
        display: inline-block;
        position: relative;
        background: #9b59b6;
    }
    #apply-mid{
        display: inline-block;
        position: relative;
        background: #7f8c8d;
    }
    #apply-right{
        display: inline-block;
        position: relative;
        background: #3498db;
    }
    .apply-board-title{
        display: block;
    }
</style>
