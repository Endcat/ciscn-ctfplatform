<template>
    <div id="home-sponsor">
        <div class="sponsor-title">
            Sponsor
        </div>
        <div class="sponsor-wrapper">
            <ul class="sponsor-list">
                <li class="sponsor-item">
                    <img src="@/assets/sponsor/aliyun-logo.png">
                </li>
                <li class="sponsor-item">
                    <img src="@/assets/sponsor/google-analytics-logo.png">
                </li>
                <li class="sponsor-item">
                    <img src="@/assets/sponsor/upyun-logo.png">
                </li>
                <li class="sponsor-item">
                    <img src="@/assets/sponsor/vuejs-logo.png">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeSponsor"
    }
</script>

<style scoped>
    .sponsor-wrapper{
        margin-left: 40px;
    }
    #home-sponsor {
        position: relative;
        padding-top: 20px;
        padding-left: 40px;
    }
    .sponsor-title
    {
        font-size: 30px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: normal;
        letter-spacing: -2px;
    }
    ul{
        list-style: none;
        position: relative;
        margin-top: 20px;
    }
    .sponsor-item{
        float: left;
        width: 40%
    }
    .sponsor-item img {
        width: 200px;
        transition: all 0.2s ease-in-out;
    }
    .sponsor-item img:hover{
        transform: translate(0, -10px);
    }
</style>
