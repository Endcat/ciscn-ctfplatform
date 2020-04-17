<template>
    <div id="side-bar">
        <ul>
            <li>
                <router-link to="/login">
                    <img id="team-icon" src="@/assets/mashirosmall.jpg" alt="avatar">
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/homepage">Home</router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/dashboard">Notice</router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/challenge">Challs</router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/ranking">Rank</router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/utils">Utils</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sideBar",
    }
</script>

<style scoped>
#side-bar{
    position: relative;
    width: 120px;
    height: 95%;
    max-height: 100%;
    border-radius: 15px;
    margin: 10% auto;
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
        letter-spacing: -1px;

    }
</style>
