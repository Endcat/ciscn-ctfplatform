<template>
    <div id="manage-item-card">
        <div class="item-circle"></div>
        <div class="item-title"></div>
        <div class="item-stat"></div>
    </div>
</template>

<script>
    export default {
        props: {
          circleColor: String,

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
</style>
