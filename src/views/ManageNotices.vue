<template>
    <div id="manage-notices">
        <div :style="$store.state.activeScheme.fontColor" class="mgr-notice-title">
            Manage Notification
        </div>
        <div class="new-notice-left">
            <div class="notice-basis" :style="$store.state.activeScheme.boxShadow">
                <div class="notice-basis-title">
                    Basic Infomation
                </div>
                <div class="notice-basis-left">
                    <input type="text" v-model="noticeName" name="notice-name" placeholder="Notice Title"><br>
                </div>
                <div class="notice-basis-right">
                    <input type="text" v-model="noticeHidden" name="initial-score" placeholder="Hidden Status"><br>
                </div>
            </div>
            <div class="notice-desp" :style="$store.state.activeScheme.boxShadow">
                <div class="notice-desp-title">
                    Notice Content
                    <textarea v-model="noticeDesp" id="desp-content" type="text" name="desp" />
                </div>
            </div>
        </div>
        <div class="new-notice-right">
            <div class="notice-summary" :style="$store.state.activeScheme.boxShadow">
                <div class="notice-summary-title">
                    Summary
                    <div :style="$store.state.activeScheme.boxShadow" class="submit-btn">Update</div>
                    <ul class="notice-info-list">
                        <li><b>Notice Title: </b>{{noticeName}}</li>
                        <li><b>Category: </b>{{noticeHidden}}</li>
                        <li><b>Notice Content: </b><br/>{{noticeDesp}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageNotices",
        props: {
            noticeName: String,
            noticeHidden: String,
            noticeDesp: String,
        }
    }
</script>

<style scoped>
    #manage-notices{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .new-notice-left{
        float: left;
        width: 40%;
    }
    .new-notice-right{
        float: left;
        width: 40%;
    }
    .mgr-notice-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .notice-basis{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 200px;
        margin-bottom: 40px;
        margin-top: 30px;
    }
    .notice-basis-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .notice-desp{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 350px;
        margin-bottom: 40px;
    }
    .notice-desp-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .notice-basis-left{
        float: left;
        height: 80%;
        width: 50%;
        text-align: center;
    }
    .notice-basis-right{
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
    .notice-summary{
        position: relative;
        width: 100%;
        border-radius: 15px;
        height: 750px;
        margin-bottom: 40px;
        margin-top: 30px;
        margin-left: 30px;
    }
    .notice-summary-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .notice-info-list{
        margin-left: 30px;
        font-size: 25px;
    }
    .notice-info-list li{
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
</style>
