<template>
    <div id="utils">
        <div class="utils-title">
            Utilities
        </div>
        <div class="left-board">
            <div class="color-board">
                <div class="title color-board-title">
                    Color Schemes
                </div>
                <ul class="color-palette">
                    <li @click="changeBlack" class="color-circle color-black"></li>
                    <li @click="changeWhite" class="color-circle color-white"></li>
                    <li @click="changeCyan" class="color-circle color-cyan"></li>
                    <li @click="changePink" class="color-circle color-pink"></li>
                    <li @click="changeYellow" class="color-circle color-yellow"></li>
                    <li @click="changePurple" class="color-circle color-purple"></li>
                </ul>
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
        name: "Utils",
        methods:{
            changeBlack(){
                this.$store.state.activeScheme.background = this.$store.state.blackScheme.background;
            },
            changeWhite(){
                this.$store.state.activeScheme.background = this.$store.state.whiteScheme.background;
            },
            changePurple(){
                this.$store.state.activeScheme.background = this.$store.state.purpleScheme.background;
            },
            changeCyan(){
                this.$store.state.activeScheme.background = this.$store.state.cyanScheme.background;
            },
            changePink(){
                this.$store.state.activeScheme.background = this.$store.state.pinkScheme.background;
            },
            changeYellow(){
                this.$store.state.activeScheme.background = this.$store.state.yellowScheme.background;
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
    .color-circle:hover{
        box-shadow: 0 10px 40px 0 rgb(107, 66, 217);
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
