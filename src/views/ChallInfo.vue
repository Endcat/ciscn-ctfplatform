<template>
    <div id="chall-info">
        <div :style="$store.state.activeScheme.fontColor" class="chall-info-title">
            {{this.$route.params.id}}
        </div>
        <div class="left">
            <div class="top chall-desp" :style="$store.state.activeScheme.boxShadow">
                <div :style="$store.state.activeScheme.fontColor" class="title">
                    Description
                </div>
                <div class="chall-desp-text">
                    xxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>
            </div>
            <div class="middle chall-file" :style="$store.state.activeScheme.boxShadow">
                <div :style="$store.state.activeScheme.fontColor" class="title">
                    Attachments
                </div>
                <div :style="$store.state.activeScheme.boxShadow" class="file-btn">File1</div>
                <div :style="$store.state.activeScheme.boxShadow" class="file-btn">File2</div>
                <div :style="$store.state.activeScheme.boxShadow" class="file-btn">File3</div>
                <div :style="$store.state.activeScheme.boxShadow" class="file-btn">File4</div>
            </div>
            <div class="bottom chall-hint" :style="$store.state.activeScheme.boxShadow">
                <div :style="$store.state.activeScheme.fontColor" class="title">
                    Hints
                </div>
                <ul class="chall-hint-list">
                    <li>Hi, I will not tell you the TRUE FLAG!!!!</li>
                    <li>Hi, Maybe I will tell you the TRUE FLAG.</li>
                    <li>I will tell you the TRUE FLAG.</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="top solved-team-list" :style="$store.state.activeScheme.boxShadow">
                <div :style="$store.state.activeScheme.fontColor" class="title">
                    Solved Teams
                </div>
                <table class="solved-list-wrapper">
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Solved Time</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>f1sh</td>
                        <td>2020-5-26 21:16:27</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>w1nd</td>
                        <td>2020-5-26 21:16:27</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Frank</td>
                        <td>2020-5-26 21:16:27</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>EndCat</td>
                        <td>2020-5-26 21:16:27</td>
                    </tr>
                </table>
            </div>
            <div class="bottom submit-flag" :style="$store.state.activeScheme.boxShadow">
                <div :style="$store.state.activeScheme.fontColor" class="title">
                    Submit Your FLAG<div :style="$store.state.activeScheme.boxShadow" class="submit-btn">Submit</div>
                </div>
                <input id="submit-flag-bar" type="text" placeholder="flag{xxxxxxxxxxxxx}"></input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChallInfo"
    }
</script>

<style scoped>
    #chall-info{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .chall-info-title
    {
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
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
    .left{
        width: 40%;
        min-width: 500px;
        height: 750px;
        float: left;
        margin-right: 50px;
        margin-bottom: 20px;
    }
    .right{
        width: 40%;
        min-width: 500px;
        height: 750px;
        float: left;
    }
    .chall-desp{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 250px;
        margin-bottom: 40px;
        margin-top: 20px;
        transition: all 0.2s linear;
    }
    .chall-desp:hover{
        transform: translate(0, -5px);
    }
    .chall-file{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 140px;
        margin-bottom: 40px;
        margin-top: 20px;
        transition: all 0.2s linear;
    }
    .chall-file:hover{
        transform: translate(0, -5px);
    }
    .solved-team-list{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 500px;
        margin-bottom: 40px;
        margin-top: 20px;
        transition: all 0.2s linear;
    }
    .solved-team-list:hover{
        transform: translate(0, -5px);
    }
    .chall-hint{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 220px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .chall-hint:hover{
        transform: translate(0, -5px);
    }
    .submit-flag{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 100%;
        height: 150px;
        margin-bottom: 40px;
        transition: all 0.2s linear;
    }
    .submit-flag:hover{
        transform: translate(0, -5px);
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
        background: linear-gradient(to bottom right, rgb(63, 186, 80), rgb(119, 180, 124));
        float: right;
        margin-right: 40px;
    }
    .file-btn:active{
        color: white;
        background: linear-gradient(to bottom right, rgb(174, 186, 248), rgb(202, 218, 248));
    }
    .file-btn:hover {
        color: white;

    }
    .file-btn{
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
        background: linear-gradient(to bottom right, rgb(63, 186, 80), rgb(119, 180, 124));
        float: left;
        margin-left: 30px;
        margin-top: 10px;
    }
    #submit-flag-bar{
        position: relative;
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        border-radius: 35px;
        width: 90%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 20px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
        margin-left: 20px;
    }
    .solved-list-wrapper {
        width: 80%;
        padding-top: 20px;
        margin: 0 auto;
    }
    .solved-list-wrapper tr td {
        text-align: center;
    }
    .chall-desp-text{
        margin-top: 10px;
        margin-left: 30px;
    }
    .chall-hint-list{
        margin-left: 60px;
        margin-top: 10px;
    }
</style>
