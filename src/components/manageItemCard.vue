<template>
    <div id="manage-item-card">
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
            title: String,
            stat: Number
        },
        computed:{
            colorStyle: function () {
                return "background: " + this.circleColor
             },

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
    background: #383838;
}
    .item-circle{
        width: 140px;
        height: 140px;
        border-radius: 75px;
        margin: 0 auto;
        line-height: 140px;
        text-align: center;
        font-size: 35px;
    }
</style>
