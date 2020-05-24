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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageAccount",
        components: {
        }
    }
</script>

<style scoped>
    #manage-account{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
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
        
    }
</style>
