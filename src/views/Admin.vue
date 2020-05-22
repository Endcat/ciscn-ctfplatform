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
                <manage-item-card></manage-item-card>
            </div>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="chall-board board">
            <div class="title chall-board-title">
                Manage Challenges
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
    import ManageItemCard from "../components/manageItemCard";
    export default {
        name: "Admin",
        components: {ManageItemCard}
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
        background: #00a2ff;
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
        font-size: 20px;
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
        background: #00a2ff;
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
    .chall-search-bar{
        position: relative;
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        border-radius: 35px;
        width: 70%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 20px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
    }
</style>
