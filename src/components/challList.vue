<template>
    <div id="chall-list">
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge1 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
<!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge2 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge3 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge4 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge5 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge6 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge7 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
        <el-card :style="$store.state.activeScheme.fontColor" class="box-card">
            <div slot="header" class="clearfix">
                <span>Challenge8 Name</span>
                <el-button style="float: right; padding: 3px 0" type="text">Button</el-button>
            </div>
            <!--            v-for-->
            <div class="text item">Category: </div>
            <div class="text item">Point: </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "challList"
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        position: relative;
        float: left;
        margin-top: 40px;
        margin-left: 40px;
        width: 480px;
        background: none;
        font-family: "Microsoft YaHei",sans-serif;
    }
</style>
