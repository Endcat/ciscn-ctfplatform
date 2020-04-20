<template>
    <div class="chall-filter">
        <ul>
            <li><el-button class="filter-button" type="primary" round>Web</el-button></li>
            <li><el-button class="filter-button" type="success" round>Pwn</el-button></li>
            <li><el-button class="filter-button" type="success" round>Reverse</el-button></li>
            <li><el-button class="filter-button" type="warning" round>Crypto</el-button></li>
            <li><el-button class="filter-button" type="danger" round>Misc</el-button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "challFilter"
    }
</script>

<style scoped>
.filter-button{
    margin: 10px auto;
    width: 150px;
    float: left;
}
    ul{
        padding-left: 20px;
        list-style: none;
        position: relative;
        width: 100%;
    }
</style>
