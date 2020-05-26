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
                <div class="overview-circle team-circle">4352</div>
                <div class="overview-msg">
                    Total<br>Teams
                </div>
            </div>
            <div class="overview-mid overview-layout">
                <div class="overview-circle submit-circle">9578</div>
                <div class="overview-msg">
                    Total<br>Submissions
                </div>
            </div>
            <div class="overview-right overview-layout">
                <div class="overview-circle chall-circle">7386</div>
                <div class="overview-msg">
                    Total<br>Challenges
                </div>
            </div>

        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="account-board board">
            <div class="title account-board-title">
                Manage Accounts
            </div>
            <div class="account-left account-layout">
                <div class="team-result">
                    4352
                </div>
                <div class="search-wrapper">
                    <div class="search-title">Search</div>
                    <input class="team-search-bar" type="text" placeholder="search by name"></input>
                </div>
            </div>
            <div class="account-right account-layout">
                <manage-item-card category="account" title="test" circle-color="#888888" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#903754" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#137846" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#204868" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#986145" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#980012" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#357073" stat="test"></manage-item-card>
                <manage-item-card category="account" title="test" circle-color="#114514" stat="test"></manage-item-card>
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="chall-board board">
            <div class="title chall-board-title">
                Manage Challenges<div :style="$store.state.activeScheme.boxShadow" class="submit-btn" @click="goNewChall">New</div>
            </div>
            <div class="chall-left chall-layout">
                <div class="chall-result">
                    9578
                </div>
                <div class="search-wrapper">
                    <div class="search-title">Search</div>
                    <input class="chall-search-bar" type="text" placeholder="search by name"></input>
                </div>
            </div>
            <div class="chall-right chall-layout">
                <manage-item-card category="challenge" title="test" circle-color="#888888" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#903754" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#137846" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#204868" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#986145" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#980012" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#357073" stat="test"></manage-item-card>
                <manage-item-card category="challenge" title="test" circle-color="#114514" stat="test"></manage-item-card>
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="notice-board board">
            <div class="title notice-board-title">
                Manage Notices
            </div>
            <div class="notice-block-left">
                <div class="notice-result">
                    1473
                </div>
                <div class="search-wrapper">
                    <div class="search-title">Search</div>
                    <input class="notice-search-bar" type="text" placeholder="search by content"></input>
                </div>
            </div>
            <div class="notice-block-right">
                <notice-block notice-content="My content is Notice 1" notice-title="Notice">
                    <span style="float: right; margin-right: 30px; color: red">DELETE</span>
                </notice-block>
                <notice-block notice-content="My content is Notice 2" notice-title="Notice">
                    <span style="float: right; margin-right: 30px; color: red">DELETE</span>
                </notice-block>
                <notice-block notice-content="My content is Notice 3" notice-title="Notice">
                    <span style="float: right; margin-right: 30px; color: red">DELETE</span>
                </notice-block>
                <notice-block notice-content="My content is Notice 4" notice-title="Notice">
                    <span style="float: right; margin-right: 30px; color: red">DELETE</span>
                </notice-block>
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="issue-board board">
            <div class="title issue-board-title">
                Manage Issues
            </div>
            <div class="issue-layout">
                <issue-card category="challenge" title="test" circle-color="#888888" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#903754" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#137846" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#204868" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#986145" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#980012" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#357073" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#114514" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#114514" stat="test"></issue-card>
                <issue-card category="challenge" title="test" circle-color="#114514" stat="test"></issue-card>
            </div>
        </div>
    </div>
</template>

<script>
    import ManageItemCard from "../components/manageItemCard";
    import IssueCard from "../components/IssueCard";
    import NoticeBlock from "../components/noticeBlock";
    export default {
        name: "Admin",
        components: {NoticeBlock, IssueCard, ManageItemCard},
        methods: {
            goNewChall: function () {
                this.$router.push({ path: "/manage/newchall" })
            }
        }
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
        margin-top: 10px;
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
    }
    .overview-msg{
        font-size: 20px;
        margin-top: 10px;
    }
    .overview-left{
        margin-left: 60px;
    }
    .chall-circle{
        background: linear-gradient(to right bottom, #bfd52d, #aadf33, #90e83f, #6cf150, #24f965);
    }
    .submit-circle{
        background: linear-gradient(to right bottom, #6868eb, #00a2ff, #00c8f0, #00e18f, #a8eb12);
    }
    .team-circle{
        background: linear-gradient(to right bottom, #b03665, #dc4f4b, #ec7f21, #ddb500, #a8eb12);
    }
    .account-layout{
        position: relative;
        float: left;
        width: 40%;
        height: 70%;
        margin-left: 40px;
        margin-top: 20px;
    }
    .account-left{
        width: 20%;
        text-align: center;
    }
    .account-right{
        width: 70%;
        overflow-x: scroll;
    }
    .team-result{
        width: 140px;
        height: 140px;
        border-radius: 75px;
        margin: 0 auto;
        line-height: 140px;
        text-align: center;
        font-size: 35px;
        background: linear-gradient(to right bottom, #b03665, #dc4f4b, #ec7f21, #ddb500, #a8eb12);
    }
    .team-search-bar{
        position: relative;
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        border-radius: 35px;
        width: 70%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 15px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
    }
    .notice-search-bar{
        position: relative;
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        border-radius: 35px;
        width: 70%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 15px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
    }
    .search-title{
        margin-top: 20px;
        font-size: 25px;
    }
    .chall-layout{
        position: relative;
        float: left;
        width: 40%;
        height: 70%;
        margin-left: 40px;
        margin-top: 20px;
    }
    .chall-left{
        width: 20%;
        text-align: center;
    }
    .chall-right{
        width: 70%;
        overflow-x: scroll;
    }
    .notice-block-left{
        width: 20%;
        text-align: center;
        position: relative;
        float: left;
        height: 70%;
        margin-left: 40px;
        margin-top: 20px;
    }
    .notice-block-right{
        width: 70%;
        overflow-y: scroll;
        position: relative;
        float: left;
        height: 70%;
        margin-left: 40px;
        margin-top: 20px;
    }
    .chall-result{
        width: 140px;
        height: 140px;
        border-radius: 75px;
        margin: 0 auto;
        line-height: 140px;
        text-align: center;
        font-size: 35px;
        background: linear-gradient(to right bottom, #bfd52d, #aadf33, #90e83f, #6cf150, #24f965);
    }
    .notice-result{
        width: 140px;
        height: 140px;
        border-radius: 75px;
        margin: 0 auto;
        line-height: 140px;
        text-align: center;
        font-size: 35px;
        background: linear-gradient(to right bottom, #6868eb, #00a2ff, #00c8f0, #00e18f, #a8eb12);
    }
    .chall-search-bar{
        position: relative;
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        border-radius: 35px;
        width: 70%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 15px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
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
    .issue-layout{
        margin-left: 20px;
    }
    .issue-board{
        overflow-y: scroll;
    }
</style>
