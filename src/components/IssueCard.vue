<template>
    <div id="issue-card" :style="$store.state.activeScheme.boxShadow">
        <div class="item-circle" :style="colorStyle">

        </div>
        <div class="item-title">
            {{title}}
        </div>
        <div class="item-stat">
            {{stat}}
        </div>
        <span class="issue-status" @click="switchStatus">{{issueStatus}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            circleColor: String,
            category: String,
            title: String,
            stat: String,
        },
        data() {
            return {
                issueStatus: "UNDONE",
            }
        },
        computed:{
            colorStyle: function () {
                return "background: " + this.circleColor
            },
        },
        methods: {
          switchStatus: function () {
              if (this.issueStatus === "UNDONE"){
                  this.issueStatus = "DONE"
              }
          }
        },
        name: "IssueCard"
    }
</script>

<style scoped>
    #issue-card{
        position: relative;
        float: left;
        width: 200px;
        height: 260px;
        text-align: center;
        border-radius: 15px;
        transition: all ease-in-out 0.2s;
        margin-left: 30px;
        margin-bottom: 20px;
        margin-top: 10px;
    }
    #issue-card:hover{
        transform: translate(0, -5px);
    }
    .item-circle{
        width: 140px;
        height: 140px;
        border-radius: 75px;
        margin: 0 auto;
        line-height: 140px;
        text-align: center;
        font-size: 35px;
        margin-top: 20px;
    }
    .item-title{
        font-size: 25px;
        margin-top: 10px;
    }
    .item-stat{
        font-size: 20px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
</style>
