<template>
    <div id="manage-chall">
        <div :style="$store.state.activeScheme.fontColor" class="mgr-chall-title">
            Manage Challenge
        </div>
        <div class="new-chall-left">
            <div class="chall-basis" :style="$store.state.activeScheme.boxShadow">
                <div class="chall-basis-title">
                    Basic Infomation <span style="font-size: 20px">(no input no change)</span>
                </div>
                <div class="chall-basis-left">
                    <input type="text" v-model="challName" name="chall-name" placeholder="Challenge Name"><br>
                    <input type="text" v-model="challCategory" name="chall-category" placeholder="Category"><br>
                    <input type="text" v-model="maxAttempt" name="max-attempt" placeholder="Max Attempts"><br>
                    <input type="text" v-model="challFlag" name="chall-flag" placeholder="Flag"><br>
                </div>
                <div class="chall-basis-right">
                    <input type="text" v-model="currentScore" name="current-score" placeholder="Current Score"><br>
                    <input type="text" v-model="initialScore" name="initial-score" placeholder="Initial Score"><br>
                    <input type="text" v-model="minScore" name="min-score" placeholder="Minimum Score"><br>
                    <input type="text" v-model="decayLimit" name="decay-limit" placeholder="Decay Limit"><br>
                </div>
            </div>
            <div class="chall-desp" :style="$store.state.activeScheme.boxShadow">
                <div class="chall-desp-title">
                    Challenge Description <span style="font-size: 20px">(no input no change)</span>
                    <textarea v-model="challDesp" id="desp-content" type="text" name="desp" />
                </div>
            </div>
            <div class="chall-docker" :style="$store.state.activeScheme.boxShadow">
                <div class="chall-docker-title">
                    Docker Setting <span style="font-size: 20px">(no input no change)</span>
                </div>
                <label class="form-switch">
                    <input type="checkbox" v-model="isDockerd">
                    <i></i>
                    Switch Docker Setting
                </label>
                <div class="chall-docker-left">
                    <input type="text" v-model="dockerImgUrl" name="chall-name" placeholder="Docker Image Url"><br>
                    <input type="text" v-model="frpType" name="chall-category" placeholder="Frp Redirect Type"><br>
                    <input type="text" v-model="frpPort" name="max-attempt" placeholder="Frp Redirect Port"><br>
                </div>
                <div class="chall-docker-right">
                    <input type="text" v-model="memLimit" name="initial-score" placeholder="Memory Limit"><br>
                    <input type="text" v-model="cpuLimit" name="min-score" placeholder="CPU Limit"><br>
                </div>
            </div>
            <div class="chall-hint" :style="$store.state.activeScheme.boxShadow">
                <div class="chall-hint-title">
                    Add Hint<div :style="$store.state.activeScheme.boxShadow" class="submit-btn">Add</div>
                    <textarea v-model="challDesp" id="hint-content" type="text" name="desp" />
                </div>
            </div>
            <div class="chall-file" :style="$store.state.activeScheme.boxShadow">
                <div class="chall-file-title">
                    Upload Files<div :style="$store.state.activeScheme.boxShadow" class="submit-btn">Upload</div>
                </div>
                <ul class="chall-file-wrapper">
                    <li class="chall-file-item">filename1</li>
                    <li class="chall-file-item">filename2</li>
                    <li class="chall-file-item">filename3</li>
                    <li class="chall-file-item">filename4</li>
                    <li class="chall-file-item">filename5</li>
                    <li class="chall-file-item">filename6</li>
                    <li class="chall-file-item">filename7</li>
                </ul>
            </div>
        </div>
        <div class="new-chall-right">
            <div class="chall-summary" :style="$store.state.activeScheme.boxShadow">
                <div class="chall-summary-title">
                    Summary
                    <div :style="$store.state.activeScheme.boxShadow" class="submit-btn">Update</div>
                    <ul class="chall-info-list">
                        <li><b>Challenge Name: </b>{{challName}}</li>
                        <li><b>Category: </b>{{challCategory}}</li>
                        <li><b>Max attempts: </b>{{maxAttempt}}</li>
                        <li><b>Current Score: </b>{{currentScore}}</li>
                        <li><b>Initial Score: </b>{{initialScore}}</li>
                        <li><b>Minimum Score: </b>{{minScore}}</li>
                        <li><b>Decay Limit: </b>{{decayLimit}}</li>
                        <li><b>Docker: </b>{{isDockerd}}</li>
                        <li v-if="isDockerd"><b>Docker Image Url: </b>{{dockerImgUrl}}</li>
                        <li v-if="isDockerd"><b>Frp Redirect Type: </b>{{frpType}}</li>
                        <li v-if="isDockerd"><b>Frp Redirect Port: </b>{{frpPort}}</li>
                        <li v-if="isDockerd"><b>Memory Limit: </b>{{memLimit}}</li>
                        <li v-if="isDockerd"><b>CPU Limit: </b>{{cpuLimit}}</li>
                        <li><b>Challenge Description: </b><br/>{{challDesp}}</li>
                    </ul>
                </div>
            </div>
            <div :style="$store.state.activeScheme.boxShadow" class="hint-list">
                <div class="hint-list-title">
                    Hint list
                    <notice-block notice-content="My name is Notice 1" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                    <notice-block notice-content="My name is Notice 2" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                    <notice-block notice-content="My name is Notice 3" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                    <notice-block notice-content="My name is Notice 4" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                    <notice-block notice-content="My name is Notice 5" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                    <notice-block notice-content="My name is Notice 6" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                    <notice-block notice-content="My name is Notice 7" notice-title="Hint"><span style="float: right; margin-right: 30px; color: red">DELETE</span></notice-block>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import NoticeBlock from "../components/noticeBlock";
    export default {
        name: "ManageChalls",
        components: {NoticeBlock},
        props: {
            challName: String,
            challCategory: String,
            maxAttempt: Number,
            initialScore: Number,
            minScore: Number,
            decayLimit: Number,
            challDesp: String,
            challFlag: String,
            dockerImgUrl: String,
            frpType: String,
            frpPort: String,
            memLimit: Number,
            cpuLimit: Number,
            isDockerd: Boolean,
            currentScore: Number,
        }
    }
</script>

<style scoped>
    #manage-chall{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .new-chall-left{
        float: left;
        width: 40%;
    }
    .new-chall-right{
        float: left;
        width: 40%;
    }
    .mgr-chall-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .chall-basis{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 500px;
        margin-bottom: 40px;
        margin-top: 30px;
    }
    .chall-basis-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .chall-desp{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 350px;
        margin-bottom: 40px;
    }
    .chall-desp-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .chall-hint{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 250px;
        margin-bottom: 40px;
    }
    .chall-hint-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .chall-file{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 200px;
        margin-bottom: 40px;
        overflow-y: scroll;
    }
    .chall-file-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .chall-basis-left{
        float: left;
        height: 80%;
        width: 50%;
        text-align: center;
    }
    .chall-basis-right{
        float: left;
        height: 80%;
        width: 50%;
        text-align: center;
    }
    input {
        position: relative;
        height: 70px;
        border-radius: 35px;
        margin: 15px auto;
        width: 70%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 20px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
    }
    #desp-content{
        position: relative;
        height: 250px;
        border-radius: 10px;
        width: 90%;
        outline-style: none;
        border: 1px solid #ccc;
        resize: none;
        margin-top: 20px;
    }
    #hint-content{
        position: relative;
        height: 150px;
        border-radius: 10px;
        width: 90%;
        outline-style: none;
        border: 1px solid #ccc;
        resize: none;
        margin-top: 20px;
    }
    .chall-docker{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 400px;
        margin-bottom: 40px;
        margin-top: 30px;
    }
    .chall-docker-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .chall-docker-left{
        float: left;
        height: 80%;
        width: 50%;
        text-align: center;
    }
    .chall-docker-right{
        float: left;
        height: 80%;
        width: 50%;
        text-align: center;
    }
    .form-switch {
        position: relative;
        display: block;
        margin-left: 30px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }
    .form-switch i {
        position: relative;
        display: inline-block;
        margin-right: 0.5rem;
        width: 46px;
        height: 26px;
        background-color: #e6e6e6;
        border-radius: 23px;
        vertical-align: text-bottom;
        transition: all 0.3s linear;
    }
    .form-switch i::before {
        content: "";
        position: absolute;
        left: 0;
        width: 42px;
        height: 22px;
        background-color: #fff;
        border-radius: 11px;
        transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
        transition: all 0.25s linear;
    }
    .form-switch i::after {
        content: "";
        position: absolute;
        left: 0;
        width: 22px;
        height: 22px;
        background-color: #fff;
        border-radius: 11px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
        transform: translate3d(2px, 2px, 0);
        transition: all 0.2s ease-in-out;
    }
    .form-switch:active i::after {
        width: 28px;
        transform: translate3d(2px, 2px, 0);
    }
    .form-switch:active input:checked + i::after {
        transform: translate3d(16px, 2px, 0);
    }
    .form-switch input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    .form-switch input:checked + i {
        background-color: #4bd763;
    }
    .form-switch input:checked + i::before {
        transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
    }
    .form-switch input:checked + i::after {
        transform: translate3d(22px, 2px, 0);
    }
    .chall-summary{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 1000px;
        margin-bottom: 40px;
        margin-top: 30px;
        margin-left: 30px;
    }
    .chall-summary-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .hint-list{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 800px;
        margin-bottom: 40px;
        margin-top: 30px;
        margin-left: 30px;
        overflow-y: scroll;
    }
    .hint-list-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .chall-info-list{
        margin-left: 30px;
        font-size: 25px;
    }
    .chall-info-list li{
        margin-top: 15px;
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
    .chall-file-wrapper{
        list-style: none;
        margin-left: 30px;
        margin-top: 20px;
    }
    .chall-file-item{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: #00a2ff;
        float: left;
        margin-right: 10px;
        text-align: center;
        line-height: 100px;
    }
</style>
