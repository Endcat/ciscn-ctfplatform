<template>
    <div class="base-container" :style="baseSize">
        <div class="nav-bar">
            <ul>
                <li class="red-btn"></li>
                <li class="yellow-btn"></li>
                <li class="green-btn"></li>
            </ul>
        </div>
        <div class="content"></div>
        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "baseObject",
        props: {
            baseWidth: String,
            baseHeight: String,
        },
        data: function () {
            return {
                baseSize: {
                    width: this.baseWidth + 'px',
                    height: this.baseHeight + 'px',
                }
            }
        }
    }
</script>

<style scoped>
    .base-container {
        border-radius: 15px;
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
    .nav-bar {
        width: 100%;
        height: 10%;
        background-color: coral;
    }
    .nav-bar ul {
        height: 100%;
        list-style: none;
    }
    .nav-bar ul li {
        float: left;
        width: 10px;
        height: 10px;
        background-color: crimson;
    }
    .content {
        width: 100%;
        height: 70%;
    }
    .footer {
        width: 100%;
        height: 15%;
    }
</style>
