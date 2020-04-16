<template>
    <div id="side-bar">
        <ul>
            <li>
                <img id="team-icon" src="@/assets/mashirosmall.jpg">
            </li>
            <li class="nav-menu">
                首页
            </li>
            <li class="nav-menu">
                公告
            </li>
            <li class="nav-menu">
                题目
            </li>
            <li class="nav-menu">
                排名
            </li>
            <li class="nav-menu">
                功能
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sideBar"
    }
</script>

<style scoped>
#side-bar{
    position: relative;
    width: 120px;
    height: 95%;
    max-height: 100%;
    background: #d3d3d3;
    border-radius: 15px;
    margin: 10% auto;
    background: linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248));
    box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    transition: all 0.5s linear;
}
    ul{
        list-style: none;
        position: relative;
        padding-top: 20px;
        text-align: center;
    }
    #team-icon{
        border-radius: 40px;
        border: mediumpurple solid 1px;
        width: 80px;
        transition: all 1s ease-in-out;
    }
    #team-icon:hover{
        transform: rotate(360deg);
        border: white solid 1px;
    }
    .nav-menu{
        color: white;
        font-size: 22px;
        font-family: "Microsoft YaHei",sans-serif;
        font-weight: lighter;
        letter-spacing: 2px;

    }
</style>
