<template>
    <div id="side-bar">
        <ul>
            <li>
                <router-link to="/login">
                    <img id="team-icon" src="@/assets/mashirosmall.jpg" alt="avatar">
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/homepage">
                <img class="menu-icon" src="@/assets/icons/home.png" alt="home">
                Home
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/dashboard">
                <img class="menu-icon" src="@/assets/icons/chart-area.png" alt="board">
                Board
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/challenge">
                <img class="menu-icon" src="@/assets/icons/flag-checkered.png" alt="challs">
                Challs
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/ranking">
                <img class="menu-icon" src="@/assets/icons/crown.png" alt="rank">
                Rank
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/utils">
                <img class="menu-icon" src="@/assets/icons/cog.png" alt="utils">
                Utils
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/admin">
                    <img class="menu-icon" src="@/assets/icons/cog.png" alt="utils">
                    Admin
                </router-link>
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
    .menu-icon{
        display: block;
        width: 45px;
        margin: 0 auto;
        padding-bottom: 10px;
        transition: all 0.1s ease-in-out;
    }
    .menu-icon:hover{
        width: 80px;
    }
#side-bar{
    position: relative;
    width: 120px;
    height: 95%;
    max-height: 100%;
    border-radius: 15px;
    margin: 10% auto;
    box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    transition: all 0.5s linear;
    overflow: auto;

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
        margin-top: 10px;
        margin-bottom: 30px;
    }
    #team-icon:hover{
        transform: rotate(360deg);
        border: white solid 1px;
    }
    .nav-menu{
        color: #551a8b;
        font-size: 22px;
        font-family: "Microsoft YaHei",sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
        margin-top: 30px;

    }
    a:visited{
        color: #551a8b;
    }
</style>
