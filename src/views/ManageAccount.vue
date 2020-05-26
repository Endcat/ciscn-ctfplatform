<template>
    <div id="manage-account">
        <div :style="$store.state.activeScheme.fontColor" class="mgr-account-title">
            Manage Accounts
        </div>
        <div class="account-info" :style="$store.state.activeScheme.boxShadow">
            <div class="account-info-title">
                Team Info
            </div>
            <div class="team-left-wrapper">
                <div class="team-avatar"></div>
                <div class="team-name">
                    {{this.$route.params.id}}
                </div>
            </div>
            <div class="team-right-wrapper">
                <ul class="team-info-list">
                    <li>Total Solved: xxx</li>
                    <li>Total Submission: xxx</li>
                    <li>Score: xxx</li>
                    <li>Rank: xxx</li>
                </ul>
            </div>
        </div>
        <div class="account-edit" :style="$store.state.activeScheme.boxShadow">
            <div class="account-info-title">
                Edit Team
            </div>
            <form action="xxx" method="get">
                <input :style="$store.state.activeScheme.boxShadow" class="submit-btn" type="submit" value="Submit" />
                <label>
                    <input type="text" v-model="teamName" name="team-name" placeholder="Edit team name">
                    <input type="text" v-model="teamPasswd" name="team-passwd" @keyup="starredPasswd" placeholder="Edit password">
                    <input type="text" v-model="teamScore" name="team-score" placeholder="Edit score">
                </label>
            </form>
        </div>
        <div class="account-submission" :style="$store.state.activeScheme.boxShadow">
            <div class="account-info-title">
                Team Submission
            </div>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
            <submission-bar></submission-bar>
        </div>
    </div>
</template>

<script>
    import SubmissionBar from "../components/SubmissionBar";
    export default {
        name: "ManageAccount",
        props: {
            teamName: String,
            teamPasswd: String,
            teamScore: String,
        },
        methods: {
            starredPasswd() {
                this.teamPasswd = '*'.repeat(this.teamPasswd.length)
            }
        },
        components: {
            SubmissionBar
        }
    }
</script>

<style scoped>
    #manage-account{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .account-edit{
        position: relative;
        width: 50%;
        border-radius: 15px;
        height: 320px;
        margin-top: 30px;
    }
    .account-submission{
        position: relative;
        width: 80%;
        border-radius: 15px;
        height: 400px;
        margin-top: 30px;
        margin-bottom: 30px;
        overflow-y: scroll;
    }
.mgr-account-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .account-info{
        position: relative;
        width: 50%;
        border-radius: 15px;
        height: 300px;
        margin-top: 20px;
    }
    .account-info-title{
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
    }
    .team-avatar{
        position: relative;
        text-align: center;
        width: 140px;
        height: 140px;
        border-radius: 75px;
        line-height: 140px;
        font-size: 35px;
        margin: 0 auto;
        margin-top: 20px;
        background: #00a2ff;
    }
    .team-left-wrapper{
        text-align: center;
        float: left;
        width: 30%;
        height: 80%;
    }
    .team-right-wrapper{
        float: left;
        width: 70%;
        height: 80%;
    }
    .team-name{
        padding-top: 10px;
        font-size: 25px;
    }
    .team-info-list{
        list-style: none;
        font-size: 30px;
        margin-top: 20px;
    }
    .team-info-list li{
        padding-bottom: 5px;
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
    }

    input {
        position: relative;
        display: block;
        margin-top: 10px;
        margin-left: 30px;
        height: 50px;
        border-radius: 25px;
        width: 80%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 20px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
    }
</style>
