<template>
    <div id="manage-item-card" :style="$store.state.activeScheme.boxShadow" @click="goManageView">
        <div class="item-circle" :style="colorStyle">

        </div>
        <div class="item-title">
            {{title}}
        </div>
        <div class="item-stat">
            {{stat}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            circleColor: String,
            category: String,
            title: String,
            stat: String
        },
        computed:{
            colorStyle: function () {
                return "background: " + this.circleColor
             },

        },
        methods:{
          goManageView: function () {
              let routerUrl = '/manage/' + this.$props.category + '/' + this.$props.title;
              this.$router.push({ path: routerUrl })
          }
        },
        name: "manageItemCard"
    }
</script>

<style scoped>
#manage-item-card{
    position: relative;
    float: left;
    width: 200px;
    height: 250px;
    text-align: center;
    border-radius: 15px;
    transition: all ease-in-out 0.2s;
    margin-left: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
}
#manage-item-card:hover{
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
    }
</style>
